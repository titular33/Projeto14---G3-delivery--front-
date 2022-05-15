import { Router } from "express";
import drinks from "../controllers/drinksController.js";

const drinksRouter = Router();
drinksRouter.get("/drinks", drinks);

export default drinksRouter;