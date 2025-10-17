import { bookModel } from "@/models/Book";
import { BookResult, CreateBookInput } from "@/types/book";
import { Types } from "mongoose";

export const createBookService = async (
  bookData: CreateBookInput
): Promise<BookResult> => {
  try {
    const newBook = new bookModel(bookData);
    const savedBook = await newBook.save();
    return {
      success: true,
      data: savedBook,
      message: "Book created successfully.",
    };
  } catch (error) {
    console.error("Error creating book:", error);
    return {
      success: false,
      data: null as any,
      message: "Failed to create book.",
    };
  }
};

export const getAllBooksService = async (): Promise<BookResult[]> => {
  try {
    const books = await bookModel.find();
    return books.map((book) => ({
      success: true,
      data: book,
    }));
  } catch (error) {
    console.error("Error fetching books:", error);
    return [
      {
        success: false,
        data: null as any,
        message: "Failed to fetch books.",
      },
    ];
  }
};

export const getBookByIdService = async (id: string): Promise<BookResult> => {
  try {
    // Check if the provided ID is a valid MongoDB ObjectId
    if (!Types.ObjectId.isValid(id)) {
      return {
        success: false,
        data: null as any,
        message: "Invalid book ID.",
      };
    }

    const book = await bookModel.findById(id);

    if (!book) {
      return {
        success: false,
        data: null as any,
        message: "Book not found.",
      };
    }

    return {
      success: true,
      data: book,
    };
  } catch (error) {
    console.error("Error fetching book by ID:", error);
    return {
      success: false,
      data: null as any,
      message: "Failed to fetch book.",
    };
  }
};
export const getBooksByCategoryService = async (categoryId: string) => {
  try {
    const books = await bookModel.find({ category: categoryId });

    if (!books || books.length === 0) {
      return { success: false, message: "No books found for this category." };
    }

    return { success: true, data: books };
  } catch (error) {
    console.error("Error fetching books by category:", error);
    return { success: false, message: "Failed to fetch books by category." };
  }
};

export const deleteBookService = async (bookId: string) => {
  try {
    const deletedBook = await bookModel.findByIdAndDelete(bookId);
    if (!deletedBook) {
      return {
        success: false,
        data: null,
        message: "Book not found or already deleted.",
      };
    }
    return {
      success: true,
      data: deletedBook,
      message: "Book deleted successfully.",
    };
  } catch (error) {
    console.error("Error deleting book:", error);
    return {
      success: false,
      data: null,
      message: "Failed to delete book.",
    };
  }
};

export const getBooksByAuthorService = async (author: string) => {
  return await bookModel.find({ author });
};
