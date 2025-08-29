/**
 * models/borrow.js
 * Mongoose model for tracking borrowed books (which user borrowed which book
 * and when). Exports the `Borrow` model.
 */
import mongoose from "mongoose";

const borrowSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    description: "ID of the user borrowing the book",
  },
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true,
    description: "ID of the book being borrowed",
  },
  borrowDate: {
    type: Date,
    default: Date.now,
    description: "Date when the book was borrowed",
  },
  returnDate: {
    type: Date,

    default: null,
    description: "Date when the book is due to be returned",
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

const Borrow = mongoose.model("Borrow", borrowSchema);
export default Borrow;
