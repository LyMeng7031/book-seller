import mongoose, { Schema, Document } from "mongoose";

export interface ICard extends Document {
  title: string;
  description?: string;
  ownerId: mongoose.Types.ObjectId;
  isActive: boolean;
  createdAt: Date;
}

const cardSchema: Schema<ICard> = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  ownerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<ICard>("Card", cardSchema);
