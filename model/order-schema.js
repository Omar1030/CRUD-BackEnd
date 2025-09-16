import mongoose from "mongoose";

const orderSchema = new Schema(
  {
    products: [{ name: { type: String }, quantity: { type: Number } }],
  },
  { timeStamps: true }
);

const orderModel = mongoose.model("order", orderSchema, "order");

export default orderModel;
