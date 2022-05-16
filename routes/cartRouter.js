import { Router } from "express";
import { addProduct, productsCart } from "../controllers/cartController.js";
import { validToken } from "../middlewares/tokenMiddleware";

const cartRouter = Router();

cartRouter.post("/cart", validToken, addProduct);
cartRouter.get("/cart", validToken, productsCart);

export default cartRouter;