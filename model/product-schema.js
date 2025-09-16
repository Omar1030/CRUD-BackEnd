import mongoose from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      unique: [true, "Unique name for product"],
    },
    description: {
      type: String,
      required: false,
    },
    sellerid: {
      type: Number,
      required: [true, "SellerId is required"],
    },
  },
  { timeStamps: true }
);

const productModel = mongoose.model("product", productSchema, "product");

export default productModel;
