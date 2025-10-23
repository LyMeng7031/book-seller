// src/routes/auth.route.ts
import { Router } from "express";
import { registerController } from "../controllers/authController";
import { loginController } from "../controllers/authController";
import { logoutController } from "../controllers/authController";

const router = Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/logout", logoutController);

export default router;
