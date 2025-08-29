/**
 * Handles user registration and login. Uses bcrypt for password hashing
 * and JWT for issuing authentication tokens.
 */
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: role || 'Borrower',
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}


export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found or Invalid email!" });
    }
    const check = bcrypt.compareSync(password, user.password);
    if (!check) {
      return res.status(400).json({ message: "Invalid password!" });
    }
    if (user && check) {
      const { password: userPassword, ...userData } = user._doc;
    }
    
      const token = jwt.sign(
        { userId: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      res.status(200).json({ message: "Login successful", token, user:{
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      } });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
