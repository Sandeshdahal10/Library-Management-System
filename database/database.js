/**
 * MongoDB connection helper. Exports `connectDB()` which connects using
 * the `MongoDB_URL` environment variable.
 */
import mongoose from 'mongoose';
const connectDB = async () => {
  try{
    await mongoose.connect(process.env.MongoDB_URL, {});
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
