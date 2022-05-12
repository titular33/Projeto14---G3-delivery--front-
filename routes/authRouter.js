import { Router } from "express";
import { signUp, signIn } from "../controllers/authController.js";
import { validSignUp, validSignIn } from "../middlewares/authMiddleware.js";

const authRouter = Router();
authRouter.post("/sign-up", validSignUp, signUp);
authRouter.post("/sign-in", validSignIn, signIn);

export default authRouter;