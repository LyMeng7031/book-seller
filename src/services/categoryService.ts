import { categoryModel, ICategory } from "@/models/categoryModel";
import { Request, Response } from "express";

export const createCategoryService = async (req: Request, res: Response) => {

  const {name} = req.body;
    const userId = req.user?.id; // Assuming user ID is attached to req.user after authentication
    console.log("User ID in createCategor yService:", userId);
  try {

  const userId = req.body.userId;
  try {
    const { name, bookId } = req.body;

    // Optional: check if category with same name & bookId already exists
    const existing = await categoryModel.findOne({
      name: name,
    });

    if (existing) {
      return {
        success: false,
        data: null,
        message: "Category already exists.",
      };
    }

    const newCategory = await categoryModel.create({
      name,
      userId,
    });

    return {
      success: true,
      data: newCategory,
      message: "Category created successfully.",
    };
  } catch (error) {
    console.error("Error creating category:", error);
    return {
      success: false,
      data: null,
      message: "Failed to create category.",
    };
  }
};
export const updateCategoryService = async (id: string, name: string) => {
  return await categoryModel.findByIdAndUpdate(
    id,
    { name },
    { new: true } // return updated category
  );
};
