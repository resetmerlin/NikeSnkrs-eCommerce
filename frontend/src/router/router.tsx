import { createBrowserRouter } from 'react-router-dom';
import {
  CartPage,
  HomePage,
  LoginPage,
  OrderPage,
  ProductPage,
  ProductsPage,
  ProfilePage,
  RegisterPage,
} from '../pages';

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
