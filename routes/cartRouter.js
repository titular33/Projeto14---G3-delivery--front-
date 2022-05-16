import { Router } from "express";
import { addProduct, deleteProducts, finishOrder, productsCart } from "../controllers/cartController.js";
import validToken from "../middlewares/tokenMiddleware.js";

const cartRouter = Router();

cartRouter.post("/cart", validToken, addProduct);
cartRouter.get("/cart", validToken, productsCart);
cartRouter.post("/finish", validToken, finishOrder);
//cartRouter.delete("/cart", validToken, deleteProducts);

export default cartRouter;