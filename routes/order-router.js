import express from "express";
import { getOrders, getOrder, editOrder, deleteOrder } from "../controller/order-controller.js";

const orderRouter = express.Router();

orderRouter.get("/", getOrders); // admin - seller - customer
orderRouter.get("/:id", getOrder); // admin - seller
orderRouter.patch("/:id", editOrder); // admin - seller - cusomer       
orderRouter.delete("/:id", deleteOrder); // admin - seller - customer


export default orderRouter;
