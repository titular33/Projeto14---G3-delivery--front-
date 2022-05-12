import db from "../db.js";

async function validToken(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer", "").trim();

    if (!token) {
        res.status(401).send("token não encontrado...");
        return;
    }

    try {
        const session = await db.collection("sessions").findOne({ token });
        if (!session) {
            res.status(401).send("sessão nao encontrada...");
            return;
        }

        const user = await db.collection("users").findOne({ _id: session.userId });
        if (!user) {
            res.status(404).send("user não encontrado...");
            return;
        }
        
        delete user._id;
        delete user.password;

        res.locals.user = user;
    
        next();

    } catch (error) {
        console.log("erro ao tentar validar o token...", error);
        res.sendStatus(500);
        return;
    }
}

export default validToken;