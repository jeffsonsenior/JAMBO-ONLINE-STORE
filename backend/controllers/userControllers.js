import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from '../models/userModels.js';

// Function to create a JWT token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({ error: "User not found" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, msg: "Invalid credentials" });
    }

    // Create a token
    const token = createToken(user._id);

    // Send response
    res.json({ success: true, msg: "Login successful", token });
  } catch (error) {
    console.error("Error:", error);
    res.json({ success: false, msg: "Server error" });
  }
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const exists = await UserModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, msg: "User already exists" });
    }

    // Validate email
    if (!validator.isEmail(email)) {
      return res.json({ success: false, msg: "Invalid email" });
    }

    // Validate password
    if (!password || password.length < 8) {
      return res.json({ success: false, msg: "Password must be at least 8 characters" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user = await UserModel.create({
      name,
      email,
      password: hashedPassword, // Store hashed password
    });

    // Create a token
    const token = createToken(user._id);

    // Send response
    res.json({ success: true, msg: "User registered successfully", token });
  } catch (error) {
    console.error("Error:", error);
    res.json({ success: false, msg: "Server error" });
  }
};

/**const adminLogin = async (req, res) => {
  try {
    res.json({ success: true, msg: "Admin login working" });
  } catch (error) {
    console.error("Error:", error);
    res.json({ success: false, msg: "Server error" });
  }
};**/

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sighn( email + password, process.env.JWT_SECRET);
      res.json({ success: true, msg: "Admin login successful", token });
    } else {
      res.json({ success: false, msg: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.json({ success: false, msg: "Server error" });
  }
};


    // Check if user exists
  //const user = await UserModel.findOne({ email });

export { loginUser, registerUser, adminLogin };
