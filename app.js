import express from "express";
import bodyParser from "body-parser";

import { createProduct, getProduct } from "./mongoose.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/products", createProduct);

app.get("/products", getProduct);

app.listen(3000);
