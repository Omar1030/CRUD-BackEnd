import express from "express";
import { getCart, addtoCart, editCart, deleteCart } from "../controller/cart-controller.js";

const cartRouter = express.Router();

cartRouter.get("/", getCart);
cartRouter.post("/add", addtoCart);
cartRouter.patch("/edit", editCart);
cartRouter.delete("/delete", deleteCart);

export default cartRouter;
