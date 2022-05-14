import db from "../db.js";
import bcrypt from "bcrypt";

import { signUpSchema, signInSchema } from "../schemas/authSchemas.js"

async function validSignUp(req, res, next) {
    const { name, email, password, confirmedPassword } = req.body;
    const { error } = signUpSchema.validate(req.body, { abortEarly: false });

    if (error) {
        res.status(422).send(error.details.map((detail) => detail.message));
        return;
    }

    try {
        const isEmailExist = await db.collection("users").findOne({ email });
        if (isEmailExist) {
            res.sendStatus(409);
            return;
        }

        next();

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
        return;
    }
}

async function validSignIn(req, res, next) {
    const { email, password } = req.body
    const validation = signInSchema.validate(req.body, { abortEarly: false })

    if (validation.error) {
        res.status(422).send(validation.error.details.map((error) => error.message));
        return;
    }

    try {
        const user = await db.collection("users").findOne({ email });
        const isCorrectPassword = bcrypt.compareSync(password, user.password);

        if (!user) {
            res.sendStatus(404);
            return;
        }

        if (!isCorrectPassword) {
            res.sendStatus(401);
            return;
        }

        res.locals.user = user;

        next();

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
        return;
    }
}

export { validSignUp, validSignIn };