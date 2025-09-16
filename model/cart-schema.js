import mongoose from "mongoose";

const cartSchema = new Schema(
  {
    userid: {
      type: mongoose.Types.objectId(),
    },
    products: [{ name: { type: String } }],
  },
  { timestamps: true }
);

const cartModel = mongoose.model("cart", cartSchema, "cart");

export default cartModel;
