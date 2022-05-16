import { Router } from "express";
import { addProduct, finishOrder, productsCart, deleteProducts, deleteUniqueProduct } from "../controllers/cartController.js";
import validToken from "../middlewares/tokenMiddleware.js";

const cartRouter = Router();

cartRouter.post("/cart", validToken, addProduct);
cartRouter.get("/cart", validToken, productsCart);
cartRouter.post("/finish", validToken, finishOrder);
cartRouter.delete("/cart", validToken, deleteProducts);
cartRouter.delete("/cart/:id", validToken, deleteUniqueProduct);

export default cartRouter;