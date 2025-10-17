import mongoose from "mongoose";
import { environment } from "@/config/environment";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async (): Promise<void> => {
  const MONGODB_URI = process.env.MONGODB_URI as string;
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://hortlymeng_db_user:PiHZO3lcQnHyPjS8@cluster0.laeecks.mongodb.net/Meng"
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
