import { Request, Response } from "express";
import { createCategoryService } from "@/services/categoryService";

export const createCategoryController = async (req: Request, res: Response) => {
  try {
    const categoryData = req.body;

    const result = await createCategoryService(categoryData, res);

    if (result.success) {
      return res.status(201).json(result);
    } else {
      return res.status(400).json(result);
    }
  } catch (error) {
    console.error("Error in createCategoryController:", error);
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Internal server error",
    });
  }
};
