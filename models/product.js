import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://beereshbc:beereshbc@backenddb.wcm3b.mongodb.net/test_products"
  )
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch(() => {
    console.log("DB connection Failed");
  });

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, default: 0 },
});

export const Product = mongoose.model("Product", productSchema);
