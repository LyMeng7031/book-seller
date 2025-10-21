import { ICategory } from "@/models/categoryModel";

export interface CategoryResult {
  success: boolean;
  data: ICategory | null;
  message?: string;
}
