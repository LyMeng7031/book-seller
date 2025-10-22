import { Request, Response } from "express";
import {
  createCategoryService,
  updateCategoryService,
} from "@/services/categoryService";

export const createCategoryController = async (req: Request, res: Response) => {
  // try {
    const result = await createCategoryService(req, res);
    return res.status(result.success ? 201 : 400).json(result);
  
};
export const updateCategoryController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "Category name is required" });
  }

  try {
    const updatedCategory = await updateCategoryService(id, name);
    if (!updatedCategory) {
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }

    res.json({
      success: true,
      message: "Category updated successfully",
      data: updatedCategory,
    });
  } catch (error) {
    console.error("Error updating category:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to update category" });
  }
};
