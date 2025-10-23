import { categoryModel } from "@/models/categoryModel";
import { createCategoryService } from "@/services/categoryService";
import { Request,Response } from "express";
interface IServiceResult {
  success: boolean;
  data: any;
  message: string;
}

// Create Category Service
export const createCategoryController = async(req:Request, res:Response) =>{
  const result = await createCategoryService(req, res);
  return result;
}
// Update Category Service
export const updateCategoryService = async (id: string, name: string) => {
  try {
    const updatedCategory = await categoryModel.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    return updatedCategory;
  } catch (error) {
    console.error("Error updating category:", error);
    throw new Error("Failed to update category");
  }
};
