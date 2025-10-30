import { cartModel } from "../models/cartModel";
import {
  CreateCartInput,
  AddItemInput,
  UpdateItemQuantityInput,
} from "../types/cart";

// Create a new cart
export const createCartService = async (data: CreateCartInput) => {
  const cart = new cartModel(data);
  return await cart.save();
};

// Get cart by user
export const getCartByUserService = async (userId: string) => {
  return await cartModel.findOne({ userId }).populate("items.bookId");
};

// Add item to cart
export const addItemToCartService = async ({
  userId,
  bookId,
  quantity,
}: AddItemInput) => {
  const cart = (await cartModel.findOne({ userId })) as any;
  if (!cart) return null;

  const existingItem = cart.items.find(
    (item: any) => item.bookId.toString() === bookId
  );
  if (existingItem) existingItem.quantity += quantity;
  else cart.items.push({ bookId, quantity });

  return await cart.save();
};
// Update item quantity
export const updateItemQuantityService = async ({
  userId,
  bookId,
  quantity,
}: UpdateItemQuantityInput) => {
  return await cartModel.findOneAndUpdate(
    { userId, "items.bookId": bookId },
    { $set: { "items.$.quantity": quantity } },
    { new: true }
  );
};

// Delete entire cart
export const deleteCartService = async (userId: string) => {
  return await cartModel.findOneAndDelete({ userId });
};
