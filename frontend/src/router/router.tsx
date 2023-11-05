import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import ProductsPage from '../pages/products/ProductsPage';
import ProductPage from '../pages/product/ProductPage';
import LoginPage from '../pages/login/LoginPage';
import RegisterPage from '../pages/register/RegisterPage';
import CartPage from '../pages/cart/CartPage';
import ProfilePage from '../pages/profile/ProfilePage';
import OrderPage from '../pages/order/OrderPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  { path: '/products', element: <ProductsPage /> },
  {
    path: '/product',
    element: <ProductPage />,
    children: [{ path: ':id', element: <ProductPage /> }],
  },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  {
    path: '/cart',
    element: <CartPage />,
    children: [
      { path: ':id', element: <CartPage /> },
      { path: '', element: <CartPage /> },
    ],
  },
  { path: '/profile', element: <ProfilePage /> },
  {
    path: '/order',
    element: <OrderPage />,
    children: [
      { path: ':id', element: <OrderPage /> },
      { path: '', element: <OrderPage /> },
    ],
  },
]);

export default router;
