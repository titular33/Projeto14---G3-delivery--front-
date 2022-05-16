import express, { json } from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import cors from "cors";

import authRouter from "./routes/authRouter.js";
import drinksRouter from "./routes/drinksRouter.js";
import cartRouter from "./routes/cartRouter.js";


dotenv.config();

const app = express();
app.use(cors());
app.use(json());
app.use(authRouter);
app.use(drinksRouter);
app.use(cartRouter);


app.listen(process.env.PORT, () => {
    console.log(chalk.bold.green(`Server is running at ${process.env.PORT}`))
});