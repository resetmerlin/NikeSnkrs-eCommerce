import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDatabase from "./config/database";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import { notFound } from "./middleware/errorMiddleware.js";

dotenv.config();

// MongoDB에 연결
connectDatabase();

const app = express();

app.use(express.json());

// products용 API(GET ALL, GET by ID)
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

//not found handler
app.use(notFound);

const PORT = process.env.PORT;

//listen() method creates a listener on the specified port or path.
app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`.magenta
      .underline.bold
  )
);
