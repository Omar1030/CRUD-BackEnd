import express from "express";

const sellerRouter = express.Router();

sellerRouter.get("/products", getProductsOfSeller);
sellerRouter.post("/add", addProduct);
sellerRouter.patch("/edit", editProduct);
sellerRouter.delete("/delete", deleteProduct);

export default sellerRouter;
