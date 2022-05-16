import db from "./../db.js";

export async function addProduct(req, res) {
  const { user } = res.locals;
  const { name, idProduct, brand, image, price } = req.body;

  console.log("USER", user)
  console.log("INFOSDRINK", name, idProduct, brand, image, price)

  try {
    await db.collection("carts").insertOne({idUser: user._id, name: name, idProduct: idProduct, brand: brand, image: image, price: price});

    console.log("USERID", user._id)
    res.send({idUser: user._id}).status(200);

  } catch (error) {
    res.status(500).send("Falha no addProduct " + error);
  }
}

export async function productsCart(req, res) {
  try {
    const userCart = await db.collection("carts").find({}).toArray();

    console.log("USERCART", userCart)
    res.send(userCart).status(200);

  } catch (error) {
    res.status(500).send("Falha no addProduct " + error);
  }
}