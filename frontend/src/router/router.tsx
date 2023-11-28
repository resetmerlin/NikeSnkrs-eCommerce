import { createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Loader } from '../components';

const RegisterPage = lazy(() => import('../pages/register/RegisterPage'));
const ProfilePage = lazy(() => import('../pages/profile/ProfilePage'));
const ProductsPage = lazy(() => import('../pages/products/ProductsPage'));
const ProductPage = lazy(() => import('../pages/product/ProductPage'));
const OrderPage = lazy(() => import('../pages/order/OrderPage'));
const LoginPage = lazy(() => import('../pages/login/LoginPage'));
const HomePage = lazy(() => import('../pages/home/HomePage'));
const CartPage = lazy(() => import('../pages/cart/CartPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loader />}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: '/products',
    element: (
      <Suspense fallback={<Loader />}>
        <ProductsPage />
      </Suspense>
    ),
  },
  {
    path: '/product',
    element: (
      <Suspense fallback={<Loader />}>
        <ProductPage />
      </Suspense>
    ),
    children: [{ path: ':id', element: <ProductPage /> }],
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<Loader />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: '/register',
    element: (
      <Suspense fallback={<Loader />}>
        <RegisterPage />
      </Suspense>
    ),
  },
  {
    path: '/cart',
    element: (
      <Suspense fallback={<Loader />}>
        <CartPage />
      </Suspense>
    ),
    children: [
      { path: ':id', element: <CartPage /> },
      { path: '', element: <CartPage /> },
    ],
  },
  {
    path: '/profile',
    element: (
      <Suspense fallback={<Loader />}>
        <ProfilePage />
      </Suspense>
    ),
  },
  {
    path: '/order',
    element: (
      <Suspense fallback={<Loader />}>
        <OrderPage />
      </Suspense>
    ),
    children: [
      { path: ':id', element: <OrderPage /> },
      { path: '', element: <OrderPage /> },
    ],
  },
]);

export default router;
