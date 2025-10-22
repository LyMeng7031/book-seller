import { categoryModel, ICategory } from "@/models/categoryModel";
import { Request, Response } from "express";

export const createCategoryService = async (req: Request, res: Response) => {
  const {name} = req.body;
    const userId = req.user?.id; // Assuming user ID is attached to req.user after authentication
    console.log("User ID in createCategor yService:", userId);
  try {
    const existing = await categoryModel.findOne({
      name: name,
    });

    if (existing) {
      return { success: false, data: null, message: "Category already exists." };
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
    return { success: false, data: null, message: "Failed to create category." };
  }
};
