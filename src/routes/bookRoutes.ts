import express from "express";
import { createBook } from "@/controllers/bookController";
import { getAllBooks, getBookById } from "@/controllers/bookController";

const router = express.Router();

router.post("/create-book", createBook);
router.get("/all-books", getAllBooks);
router.get("/books/:id", getBookById);
export default router;
