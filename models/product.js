import mongoose from "mongoose";

// edu mongoose na MongoDB ge connect madirodu
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
//
//
//

// edu schema create madkolodu
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, default: 0 },
});

export const Product = mongoose.model("Product", productSchema);
