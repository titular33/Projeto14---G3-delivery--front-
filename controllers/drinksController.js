import db from "../db.js";

async function drinks(req, res) {
    try {
        const drinks = await db.collection("drinks").find({}).toArray();
        res.status(200).send(drinks);

    } catch (error) {
        console.log("erro ao procurar a categoria escolhida...", error);
        res.sendStatus(500);
        return;
    }
}

export default drinks;