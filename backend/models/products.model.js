import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({   
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    image: {type: Array, required: true},
    category: {type: String, required: true},
    size: {type: Array, required: true},
    bestSeller: {type: Boolean, required: true},
    date: {type: Number, required: true},
});

// Check if model already exists to avoid overwriting
const productModel = mongoose.models.Product || mongoose.model('Product', productSchema);

export default productModel;
