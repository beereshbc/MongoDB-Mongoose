import mongoose from "mongoose";

import { Product } from "./models/product.js";
//

//  product create by using mongoose schema by async await function
const createProduct = async (req, res, next) => {
  const { name, price } = req.body;
  const createdProduct = new Product({
    // <---(new Product) is the schema imported from product.js
    name,
    price,
  });
  const result = await createdProduct.save(); // .save is importent to save data

  // edu mongoDB li "_id" eruttalla adu "object" datatype alli erutta
  //  adanna "string" ge convert madakke "_id" badlu " id " use madthare
  console.log(typeof createdProduct._id);
  console.log(typeof createdProduct.id);

  res.json({ products: result });
};
//

//edu get request ----> mongoDB database inda Data thagolodu
const getProduct = async (req, res, next) => {
  const products = await Product.find();
  try {
    res.json({ products: products });
  } catch (error) {
    res.status(500).json({ error: "products not found" });
  }
};
//

// edanna app.js file ge kalsidini alli api request add agutta and exicute agutta
export { createProduct, getProduct };
