const express = require("express");
const router = express.Router();

const {
  createBook,
  fetchBooks,
  updateBooks,
  deleteBooks,
} = require("../controllers/booksController");
router.post("/books", createBook);
router.route("/").get(fetchBooks);
router.put("/:id", updateBooks);
router.delete("/:id", deleteBooks);
module.exports = router;
