import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import ProductsPage from '../pages/products/ProductsPage';
import ProductPage from '../pages/product/ProductPage';
import LoginPage from '../pages/login/LoginPage';

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
]);

export default router;
