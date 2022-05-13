import { Router } from "express";
import drinks from "../controllers/drinksController.js";
import validToken from "../middlewares/drinksMiddleware.js";

const drinksRouter = Router();
drinksRouter.get("/drinks", validToken, drinks);

export default drinksRouter;