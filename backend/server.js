import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/mongodb.js';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Start the server
app.listen(port, () => console.log('Server is running on http://localhost:' + port));

// API endpoint
app.get('/', (req, res) => {
  res.send('Hello World');
});










/**import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

//dotenv.config();

//middleware
app.use(express.json());
app.use(cors());


const app = express();
const PORT = process.env.PORT || 5000;

//console.log(process.env.port);

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:"  + PORT);
});

//api endpoint
app.get('/', (req, res) => {
  res.send('Hello World');
});**/