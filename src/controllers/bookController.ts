import { createBookService, getBookByIdService } from "@/services/bookService";
import { CreateBookInput } from "@/types/book";
import { Request, response, Response } from "express";
import { getAllBooksService } from "@/services/bookService";
import { getBooksByCategoryService } from "@/services/bookService";
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
