import express from "express";
import dotenv from "dotenv";
import connectDB from "./database.js";
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
import orderRouter from "./routes/orderRouter.js";
import morgan from "morgan";

const app = express();

dotenv.config();

connectDB();

app.use(morgan("dev"));

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({
    appName: "backend-intern",
    version: process.env.VERSION,
    port: PORT,
  });
});

app.use("/api/user", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.........`);
});
