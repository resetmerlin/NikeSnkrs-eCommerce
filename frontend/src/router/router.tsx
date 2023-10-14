import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import CartPage from '../pages/cart/CartPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: 'cart',
        element: <CartPage />,
      },
    ],
  },
]);

export default router;
