import db from "../db.js";

async function drinks(req, res) {
    const { category } = req.body; //usuário vai mandar a categoria desejada por meio do reqparams...

    try {
        const drinks = await db.collection("drinks").find({ idCategoria: category }).toArray();
        res.status(200).send(drinks);

    } catch (error) {
        console.log("erro ao procurar a categoria escolhida...", error);
        res.sendStatus(500);
        return;
    }
}

export default drinks;