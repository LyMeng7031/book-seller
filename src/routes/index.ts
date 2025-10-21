import { Router } from "express";
import bookRoute from "./bookRoutes";
import authRoute from "./authRoutes"
import categoryRoutes from "./categoryRoutes";

const router = Router();

router.use("/books", bookRoute);
router.use("/auth", authRoute);
router.use("/categories", categoryRoutes);

export default router;