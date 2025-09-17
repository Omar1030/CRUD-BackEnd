import express from "express";

import userRouter from "./routes/user-router.js.js";
import sellerRouter from "./routes/seller-router.js";
import cartRouter from "./routes/cart-router.js";
import orderRouter from "./routes/order-router.js";
import productsRouter from "./routes/product-router.js";

// ! App
const app = express();
const port = 3000;
app.listen(port, () => console.log(`Server is running on port: ${port}`));

// ! Middleware
app.use(express.json());
app.use("/user", userRouter);
app.use("/seller", sellerRouter);
app.use("/cart", cartRouter);
app.use("/order", orderRouter);
app.use("/products", productsRouter);
