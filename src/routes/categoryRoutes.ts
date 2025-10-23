import express from "express";
import { createCategoryController } from "@/controllers/categoryController";

import { roleCheck } from "@/Middlewares/roleMiddleware";

const router = express.Router();

// POST /api/categories
router.post(
  "/create-categories",
  roleCheck(["admin"]),
  createCategoryController
);

export default router;
