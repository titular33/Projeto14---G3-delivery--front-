import db from "./../db.js";
import { ObjectId } from "mongodb";

export async function addProduct(req, res) {
  const { user } = res.locals;
  const { name, idProduct, brand, image, price } = req.body;

  try {
    await db.collection("carts").insertOne({ ...req.body, idUser: user._id });
    res.send({ idUser: user._id }).status(200);

  } catch (error) {
    res.status(500).send("Falha no addProduct " + error);
  }
}

export async function productsCart(req, res) {
  try {
    const userCart = await db.collection("carts").find({}).toArray();
    res.send(userCart).status(200);

  } catch (error) {
    res.status(500).send("Falha no productsCart " + error);
  }
}

export async function finishOrder(req, res) {
  const { cartProducts } = req.body;

  try {
    await db.collection("solds").find({}).toArray();
    await db.collection("solds").insertMany({ cartProducts });
    res.sendStatus(200);

  } catch (error) {
    res.status(500).send("Falha no finishOrder " + error);
  }
}

export async function deleteProducts(req, res) {
  const { idProduct } = req.body;

  const product = await db.collection("drinks").findOne({ _id: idProduct })

  try {
    await db.collection("drinks").deleteOne({ product });
    res.sendStatus(200);

  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}