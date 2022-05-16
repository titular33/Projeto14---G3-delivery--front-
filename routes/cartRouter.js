import { Router } from "express";
import {
  addProduct,
  getCart,
  deleteProduct,
  changeQuant,
} from "../controllers/cartController.js";
import { validToken } from "../middlewares/tokenMiddleware";

const cartRouter = Router();

cartRouter.put("/addProduct/:id", validToken, addProduct);
cartRouter.get("/cart", validToken, getCart);
cartRouter.delete("/cart/:productId", validToken, deleteProduct);
cartRouter.post("/changeQuant", validToken, changeQuant);

export default cartRouter;
