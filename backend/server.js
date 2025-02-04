import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
connectDB();
connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors());

// Start the server
app.listen(port, () => console.log('Server is running on http://localhost:' + port));

// API endpoint
app.use('/api/user', userRouter)
app.use('/api/product', productRouter);

app.get('/', (req, res) => {
  res.send('Hello World');
});