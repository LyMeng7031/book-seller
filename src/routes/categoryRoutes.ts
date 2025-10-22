import express from "express";
import { createCategoryController } from "@/controllers/categoryController";
import { updateCategoryController } from "@/controllers/categoryController";
const router = express.Router();

// POST /api/categories
router.post("/create-categories", createCategoryController);
router.put("/categories/:id", updateCategoryController);

export default router;
