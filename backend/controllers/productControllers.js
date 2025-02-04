// controllers/productControllers.js
import { v2 as cloudinary } from 'cloudinary';
import productModel from '../models/products.model.js';

const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, bestSeller, size } = req.body;

    // Convert bestSeller to boolean. Default to false if not provided.
    const isBestSeller = bestSeller === 'true' || bestSeller === true || false;

    // Parse size safely; if no size is provided, default to an empty array.
    let parsedSize = [];
    try {
      parsedSize = size ? JSON.parse(size) : [];
    } catch (err) {
      parsedSize = [];
    }

    // Get uploaded image paths (if provided)
    const images = [
      req.files.image1?.[0]?.path,
      req.files.image2?.[0]?.path,
      req.files.image3?.[0]?.path,
      req.files.image4?.[0]?.path
    ].filter(Boolean); // Remove undefined values

    // Upload images to Cloudinary and get their URLs
    const imagesUrls = await Promise.all(
      images.map(async (item) => {
        const result = await cloudinary.uploader.upload(item, { resource_type: 'image' });
        return result.secure_url;
      })
    );

    // Create the product data object.
    const productData = {
      name,
      description,
      price: Number(price),
      category,
      bestSeller: bestSeller === "true" ? true : false, // Only bestSeller is included
      size: parsedSize,
      images: imagesUrls,
      date: new Date() // Create a Date object for the current time
    };

    // Save product to the database
    const product = new productModel(productData);
    await product.save();

    res.status(201).json({ message: 'Product added successfully', product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Other controller functions remain the same
const listProduct = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removeProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await productModel.findByIdAndDelete(id);
    res.status(200).json({ message: 'Product removed successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const singleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findById(id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { addProduct, listProduct, removeProduct, singleProduct };