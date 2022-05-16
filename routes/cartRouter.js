import { Router } from "express";
import { addProduct, finishOrder, productsCart } from "../controllers/cartController.js";
import validToken from "../middlewares/tokenMiddleware.js";

const cartRouter = Router();

cartRouter.post("/cart", validToken, addProduct);
cartRouter.get("/cart", validToken, productsCart);
cartRouter.post("/cart", validToken, finishOrder);

export default cartRouter;