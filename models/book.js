/**
 * models/book.js
 * Mongoose model for books stored in the library.
 */
import mongoose from "mongoose";


const bookScehma = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    description: "Title of the book",
    trim: true,
  },
  author: {
    type: String,
    required: true,
    description: "Author of the book",
    trim: true,
  },
  isbn: {
    type: String,
    required: true,
    unique: true,
    description: "ISBN number of the book",
    trim: true,
  },
  quantity: {
    type: Number,
    required: true,
    description: "Total number of books in the library",
    min: [0, "Quantity cannot be negative"],
  },
  availableBooks: {
    type: Number,
    required: true,
    description: "Number of books available for borrowing",
    min: [0, "Available books cannot be negative"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Book = mongoose.model("Book", bookScehma);
export default Book;
