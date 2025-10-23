import { categoryModel } from "@/models/categoryModel";
import { Request, Response } from "express";

// Create Category Service
export const createCategoryService = async (req: Request, res: Response) => {
  const { name } = req.body;
  const userId = req.user?.id; // assuming auth middleware adds user to req

  try {
    // Check if category already exists for this user
    const existing = await categoryModel.findOne({ name, userId });

    if (existing) {
      return res.status(409).json({
        success: false,
        data: null,
        message: "Category already exists.",
      });
    }

    const newCategory = await categoryModel.create({
      name,
      userId,
    });

    return res.status(201).json({
      success: true,
      data: newCategory,
      message: "Category created successfully.",
    });
  } catch (error) {
    console.error("Error creating category:", error);
    return res.status(500).json({
      success: false,
      data: null,
      message: "Failed to create category.",
    });
  }
};

// Update Category Service
export const updateCategoryService = async (id: string, name: string) => {
  try {
    const updatedCategory = await categoryModel.findByIdAndUpdate(
      id,
      { name },
      { new: true } // return updated document
    );
    return updatedCategory;
  } catch (error) {
    console.error("Error updating category:", error);
    throw new Error("Failed to update category");
  }
};
