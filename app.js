import express from "express";
import bodyParser from "body-parser";

import { createProduct, getProduct } from "./mongoose.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

//

//E kelagiro post get route direct contoller inda thagondina edu basic structre aste
//  app.js matte controllers naduve ond "Route" file erutte adanna create madilla
app.post("/products", createProduct);

app.get("/products", getProduct);

app.listen(3000);
