import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDatabase from "./config/database";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

// MongoDB에 연결
connectDatabase();

const app = express();

app.use(express.json());

// products용 API
app.use("/api/products", productRoutes);

const PORT = process.env.PORT;

//listen() method creates a listener on the specified port or path.
app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`.magenta
      .underline.bold
  )
);
