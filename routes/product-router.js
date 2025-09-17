import express from "express";
import { getProducts, addProduct, editProduct, deleteProduct } from "../controller/products-controller";

const productsRouter = express.Router();

userRouter.get("/", getProducts); // admin - customer - seller
userRouter.post("/add", addProduct); //  seller
userRouter.patch("/edit", editProduct); //  seller
userRouter.delete("/delete", deleteProduct); //  seller

export default productsRouter;
