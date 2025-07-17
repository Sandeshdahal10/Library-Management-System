import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    description: "Full name of the user",
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    description: "Unique email address of the user",
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    description: "Password for user authentication",
    minlength: [8, "Password must be at least 8 characters long"],
    select: false,
    unique: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ["Borrower", "Librarian"],
    default: "Borrower",
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    description: "Timestamp when the user was created",
  },
  updatedAt: {
    type: Date,
    default: Date.now,
    description: "Timestamp when the user was last updated",
  },
});

const User = mongoose.model("User", userSchema);
export default User;
