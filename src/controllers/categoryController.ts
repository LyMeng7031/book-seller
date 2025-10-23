import { Request, Response } from "express";
import { createCategoryService } from "@/services/categoryService";

export const createCategoryController = async (req: Request, res: Response) => {
  // try {
    const result = await createCategoryService(req, res);
    return res.status(result.success ? 201 : 400).json(result);
  
};
