import mongoose, { Schema, Document } from "mongoose";
import { CartItem, CartType } from "../types/cart";

export type CartDocument = Omit<CartType, "_id"> & Document;

const cartSchema = new Schema<CartDocument>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        bookId: { type: Schema.Types.ObjectId, ref: "Book", required: true },
        quantity: { type: Number, required: true, default: 1, min: 1 },
      },
    ],
  },
  { timestamps: true }
);

export const cartModel = mongoose.model<CartDocument>("Cart", cartSchema);
