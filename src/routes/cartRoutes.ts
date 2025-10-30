import { Router } from "express";
import {
  createCart,
  getCartByUser,
  addItemToCart,
  updateItemQuantity,
  deleteCart,
} from "../controllers/cartController";

const router = Router();

// Cart routes
router.post("/", createCart); // Create new cart
router.get("/:userId", getCartByUser); // Get cart by user
router.post("/add-item", addItemToCart); // Add item
router.put("/update-item", updateItemQuantity); // Update item quantity
router.delete("/:userId", deleteCart); // Delete entire cart

export default router;
