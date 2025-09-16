import express from "express";

const userRouter = express.Router();

userRouter.get("/customers", getCustomers); // admin
userRouter.get("/sellers", getSellers); // admin
userRouter.get("/products", getProducts); // admin
userRouter.get("/orders", getOrders); // admin
userRouter.get("/:id", getUser); // admin - seller - customer
userRouter.patch("/:id", editUser); // admin - seller - customer
userRouter.delete("/:id", deleteUser); // admin - seller - customer

export default userRouter;
