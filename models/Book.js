const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, "Book category is required"],
    },
    author: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
