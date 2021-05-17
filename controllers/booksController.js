const asyncHandler = require("express-async-handler");
const Book = require("../models/book");
const authMiddlware = require("../middlewares/AuthMiddleware");
module.exports.createBook = asyncHandler(async (req, res) => {
  const book = await Book.create(req.body);
  if (book) {
    res.status(200);
    res.json(book);
  } else {
    res.status(500);
    throw new Error("book creating failed");
  }
});
module.exports.fetchBooks = asyncHandler(async (req, res) => {
  const book = await Book.find({});
  if (book) {
    res.status(200);
    res.json(book);
  } else {
    res.status(500);
    throw new Error("Thare are no books");
  }
});
module.exports.updateBooks = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (book) {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200);
    res.json(updatedBook);
  } else {
    res.status(500);
    throw new Error("Update failed");
  }
});
module.exports.deleteBooks = asyncHandler(async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    res.status(200);
    res.send(book);
  } catch (error) {
    res.json(error);
  }
});
