// Edu classical 'MongoDB' language mele create madiru database
//Only for Example and refrence
const MongoClient = require("mongodb").MongoClient;

const url =
  "mongodb+srv://manu:KyOP1JrHoErqQILt@cluster0-g8eu9.mongodb.net/products_test?retryWrites=true&w=majority";

// edu post action edunna app,js ge export madethi but edralli edu add agilla
//  bcz mongoose mele API create madi connect madini
const createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db();
    const result = db.collection("products").insertOne(newProduct);
  } catch (error) {
    return res.json({ message: "Could not store data." });
  }
  client.close();

  res.json(newProduct);
};

// edu get action edunna app,js ge export madethi but edralli edu work agalla
//  bcz mongoose mele API create madi connect madini
const getProducts = async (req, res, next) => {
  const client = new MongoClient(url);

  let products;

  try {
    await client.connect();
    const db = client.db();
    products = await db.collection("products").find().toArray();
  } catch (error) {
    return res.json({ message: "Could not retrieve products." });
  }
  client.close();

  res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
