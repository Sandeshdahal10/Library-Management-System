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
