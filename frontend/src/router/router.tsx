import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import ProductsPage from '../pages/products/ProductsPage';
import ProductPage from '../pages/product/ProductPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  { path: '/products', element: <ProductsPage /> },
  { path: '/product', element: <ProductPage /> },
]);

export default router;
