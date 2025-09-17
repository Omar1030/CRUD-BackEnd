import express from "express";
import { getCustomers, getSellers, getUser, editUser, deleteUser } from "../controller/user-controller";

const userRouter = express.Router();

userRouter.get("/customers", getCustomers); // admin
userRouter.get("/sellers", getSellers); // admin
userRouter.get("/:id", getUser); // admin - seller - customer
userRouter.patch("/:id", editUser); // admin - seller - customer
userRouter.delete("/:id", deleteUser); // admin - seller - customer

export default userRouter;
