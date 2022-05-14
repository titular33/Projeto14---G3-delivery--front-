import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

import db from "../db.js";

async function signUp(req, res) {
    const { name, email, password, urlImage } = req.body;
    const passwordHash = bcrypt.hashSync(password, 10);

    try {
        await db.collection("users").insertOne({ name, email, password: passwordHash, confirmedPassword: passwordHash, urlImage });
        res.sendStatus(201);

    } catch (error) {
        console.log("erro ao criar novo usuário...", error);
        res.sendStatus(500);
        return;
    }
}

async function signIn(req, res) {
    try {
        const token = uuid();
        const { user } = res.locals;

        await db.collection("sessions").insertOne({ token, userId: user._id });
        res.send({ token: token, urlImage: user.urlImage }).status(200);

    } catch (error) {
        console.log("erro ao se logar...", error);
        res.sendStatus(500);
        return;
    }
}

export { signUp, signIn };