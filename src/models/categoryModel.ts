import { Schema, model, Document, Types } from "mongoose";

export interface ICategory extends Document {
  userId: Types.ObjectId; // reference to user
  bookId: Types.ObjectId; // reference to book
  name: string;
}

const categorySchema = new Schema<ICategory>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User", // reference to User model
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const categoryModel = model<ICategory>("Category", categorySchema);
