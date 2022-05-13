import express, { json } from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import cors from "cors";

import authRouter from "./routes/authRouter";
import drinksRouter from "./routes/drinksRouter";

dotenv.config();

const app = express();
app.use(cors());
app.use(json());
app.use("/auth", authRouter);
app.use("/drinks", drinksRouter);


app.listen(process.env.PORT, () => {
    console.log(chalk.bold.green(`Server is running at ${process.env.PORT}`))
});