import { categoryModel, ICategory } from "@/models/categoryModel";
import { Request, Response } from "express";

export const createCategoryService = async (req: Request, res: Response) => {
    const userId = req.body.userId;
  try {
    const {name,bookId} = req.body;

    // Optional: check if category with same name & bookId already exists
    const existing = await categoryModel.findOne({
      name: name,
      bookId: bookId,
      userId: userId,
    });

    if (existing) {
      return { success: false, data: null, message: "Category already exists." };
    }

    const newCategory = await categoryModel.create({
      name,
      bookId,
      userId,
    });

    return {
      success: true,
      data: newCategory,
      message: "Category created successfully.",
    };
  } catch (error) {
    console.error("Error creating category:", error);
    return { success: false, data: null, message: "Failed to create category." };
  }
};
