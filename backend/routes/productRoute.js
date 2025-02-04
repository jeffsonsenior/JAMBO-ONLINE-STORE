import express from 'express';
import {addProduct, listProduct, removeProduct, singleProduct } from '../controllers/productControllers.js';
import upload from '../middleware/multer.js';

const productRouter = express.Router();

  productRouter.post('/add',upload.fields([
    {name: 'image1', maxCount:1},
    {name: 'image2', maCount:1},
    {name: 'image3', maxCount:1},
    {name: 'image4', maxCount:1},    
  ]), addProduct);

  productRouter.get('/list', listProduct);
  productRouter.post('/remove', removeProduct);
  productRouter.get('/single', singleProduct);

export default productRouter;