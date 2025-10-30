import { Request, Response } from "express";
import {
  createCartService,
  getCartByUserService,
  addItemToCartService,
  updateItemQuantityService,
  deleteCartService,
} from "../services/cartService";

// Create new cart
export const createCart = async (req: Request, res: Response) => {
  try {
    const newCart = await createCartService(req.body);
    res.status(201).json({ success: true, data: newCart });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to create cart" });
  }
};

// Get cart by user
export const getCartByUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const cart = await getCartByUserService(userId);
    if (!cart)
      return res
        .status(404)
        .json({ success: false, message: "Cart not found" });
    res.json({ success: true, data: cart });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to get cart" });
  }
};

// Add item to cart
export const addItemToCart = async (req: Request, res: Response) => {
  try {
    const updatedCart = await addItemToCartService(req.body);
    res.json({ success: true, data: updatedCart });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to add item" });
  }
};

// Update item quantity
export const updateItemQuantity = async (req: Request, res: Response) => {
  try {
    const updatedCart = await updateItemQuantityService(req.body);
    res.json({ success: true, data: updatedCart });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update quantity" });
  }
};

// Delete entire cart
export const deleteCart = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const deletedCart = await deleteCartService(userId);
    if (!deletedCart)
      return res
        .status(404)
        .json({ success: false, message: "Cart not found" });
    res.json({ success: true, message: "Cart deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete cart" });
  }
};
