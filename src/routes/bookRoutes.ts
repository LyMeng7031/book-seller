import express from "express";
import { createBook } from "@/controllers/bookController";
import { getAllBooks, getBookById } from "@/controllers/bookController";
import { deleteBookController as deleteBook } from "@/controllers/bookController";
import { getBooksByAuthorController } from "@/controllers/bookController";
import { updateBook } from "@/controllers/bookController";
const router = express.Router();

router.post("/create-book", createBook);
router.get("/all-books", getAllBooks);
router.get("/:id", getBookById);
router.delete("/delete-book/:id", deleteBook);
router.get("/author/:author", getBooksByAuthorController);
router.put("/edit-book/:id", updateBook);
router.delete("/books/:id", deleteBook);
// router.delete("/delete-book/:id", deleteBook);
router.get("/books/author/:author", getBooksByAuthorController);
export default router;
