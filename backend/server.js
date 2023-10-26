import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDatabase from './config/database.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

// MongoDB에 연결
connectDatabase();

const app = express();

app.use(express.json());

// products용 API(GET ALL, GET by ID)
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});
app.get('/', (req, res) => {
  res.send('Api is running...');
});

//not found handler
app.use(notFound);
//error middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5328;

//listen() method creates a listener on the specified port or path.
app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`.magenta
      .underline.bold
  )
);
