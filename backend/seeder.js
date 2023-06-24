import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";
import connectDatabase from "./config/database.js";
import products from "./data/product.js";
import productModel from "./models/productModel.js";

dotenv.config();

connectDatabase();

//전체 데이터 파일을 DB에 넣음
const exportWholeDataFile = async () => {
  try {
    await productModel.deleteMany();

    const sampleProducts = products.map((productModel) => {
      return {
        ...productModel,
      };
    });
    await productModel.insertMany(sampleProducts);
    console.log(`Data imported`.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

//products 데이터만 DB에 넣음
const exportProductDataFile = async () => {
  try {
    await productModel.deleteMany();

    const sampleProducts = products.map((productModel) => {
      return {
        ...productModel,
      };
    });
    await productModel.insertMany(sampleProducts);
    console.log(`Data imported`.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-product") {
  exportProductDataFile();
} else {
  exportWholeDataFile();
}
