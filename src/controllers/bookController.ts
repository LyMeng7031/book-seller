import { CreateBookInput } from "@/types/book";
import { Request, Response } from "express";
import { getBooksByAuthorService } from "@/services/bookService";

import {
  createBookService,
  getBookByIdService,
  getAllBooksService,
  deleteBookService,
  getBooksByCategoryService,
} from "@/services/bookService";

export const createBook = async (req: Request, res: Response) => {
  try {
    const bookData: CreateBookInput = req.body;
    const result = await createBookService(bookData);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to create book.",
    });
  }
};

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const result = await getAllBooksService();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to fetch books.",
    });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Get book ID from URL
    const result = await getBookByIdService(id);

    if (result.success) {
      res.status(200).json(result);
    } else {
      res.status(404).json(result);
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Failed to fetch book.",
    });
  }
};

export const getBooksByCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params; // Get category ID from URL
    const result = await getBooksByCategoryService(categoryId);

    if (result.success) {
      res.status(200).json(result);
    } else {
      res.status(404).json(result);
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to fetch books by category.",
    });
  }
};

export const deleteBookController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await deleteBookService(id);
    return res.status(result.success ? 200 : 400).json(result);
  } catch (error) {
    console.error("Controller error:", error);
    return res.status(500).json({
      success: false,
      data: null,
      message: "Internal server error.",
    });
  }
};

export const getBooksByAuthorController = async (
  req: Request,
  res: Response
) => {
  const books = await getBooksByAuthorService(req.params.author);
  if (books.length === 0)
    return res
      .status(404)
      .json({ success: false, message: "No books found for this author" });
  res.json({ success: true, data: books });
};
