import express from "express";
import { createCategoryController } from "@/controllers/categoryController";

const router = express.Router();

// POST /api/categories
router.post("/create-categories", createCategoryController);

export default router;
