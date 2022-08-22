import { Router } from "express";
import { authController } from "../controllers/auth";

const router = Router();

router.get("/sign-in", authController.signIn);

export default router;