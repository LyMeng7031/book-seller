import { Types } from "mongoose";

export interface CartItem {
  bookId: Types.ObjectId;
  quantity: number;
}

export interface CreateCartInput {
  userId: Types.ObjectId;
  items: CartItem[];
}

export interface AddItemInput {
  userId: Types.ObjectId;
  bookId: Types.ObjectId;
  quantity: number;
}

export interface UpdateItemQuantityInput {
  userId: Types.ObjectId;
  bookId: Types.ObjectId;
  quantity: number;
}

export interface CartType {
  _id: Types.ObjectId;
  userId: Types.ObjectId;
  items: CartItem[];
  createdAt: Date;
  updatedAt: Date;
}
