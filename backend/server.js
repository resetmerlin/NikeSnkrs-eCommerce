import express from "express";
import colors from "colors";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT;

//listen() method creates a listener on the specified port or path.
app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`.magenta
      .underline.bold
  )
);
