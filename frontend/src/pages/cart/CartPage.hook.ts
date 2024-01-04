import { useCallback, useEffect, useMemo } from 'react';
import {
  NavigateFunction,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { goToLogin, logOut, useAppDispatch, useAppSelector } from '../../hooks';
import { IAddress, ICart, ICarts, IOrder, IUser } from '../../types';
import {
  cartDeleted,
  selectAddress,
  selectCart,
  selectUser,
  useAddToCartMutation,
  useAddToOrderMutation,
} from '../../features';

/**
 * ### Responsible for Conducting Business Logic of Cart Page
 *
 * - Responsible for checking user authentication; if user didn't authenticated, go login page
 * - Responsible for fetching a product that user chose; a product in cart
 * - Responsible for go Order page if ordered
 * - Responsible for handling a feature; delete item on cart
 * - Responsible for handling a feature; logout
 * - Responsible for handling a feature; adding a order info via api
 */
export const useCartPage = (): [
  userInfo: IUser,
  logOutHandler: () => void,
  carts: ICarts,
  deletOnCart: (product: ICart['product']) => void,
  taxPrice: number,
  shippingPrice: number,
  productPrice: string,
  totalPrice: number,
  paymentMethod: string,
  date: Date,
  dateFormat: Intl.DateTimeFormat,
  addToOrderHandler: () => void,
  address: IAddress,
] => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation().search;
  const qty = Number(new URLSearchParams(location).get('qty'));

  const [addToOrder, { data: orderData }] = useAddToOrderMutation();

  const carts: ICarts = useAppSelector(selectCart);
  const userInfo: IUser = useAppSelector(selectUser);
  const address: IAddress = useAppSelector(selectAddress);

  // Check user auth, if no auth go to login page
  goToLogin(userInfo, navigate);

  /** Delete product on cart */
  const deletOnCart = useCallback(
    (product: ICart['product']) => dispatch(cartDeleted(product)),
    [dispatch, cartDeleted]
  );

  const logOutHandler = useCallback(() => {
    logOut(dispatch);
  }, [logOut, dispatch]);

  // Numbers for the payment summary
  const taxPrice = 15;
  const shippingPrice = 3;
  const productPrice = useMemo(
    () =>
      carts
        .reduce((acc, item) => acc + Number(item?.qty) * Number(item?.price), 0)
        .toFixed(1),
    [carts]
  );

  const date = new Date();
  const dateFormat = new Intl.DateTimeFormat('en-kr', {
    dateStyle: 'full',
  });

  const paymentMethod = 'paypal';

  const totalPrice = useMemo(
    () => +productPrice - taxPrice - shippingPrice,
    [productPrice, taxPrice, shippingPrice]
  );

  /** Add to the order info via api call */
  const addToOrderHandler = useCallback(() => {
    const order = {
      email: userInfo?.email,
      name: userInfo?.name,
      carts,
      shippingAddress: {
        address: address?.address,
      },
      paymentMethod,
      itemsPrice: productPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      token: userInfo?.token,
    };

    addToOrder(order);
  }, [userInfo, address, addToOrder, productPrice, totalPrice]);

  // If Ordered, go order page
  useGoOrderPage(orderData, navigate);

  // Fetch Product if qty exists
  useFetchProduct(qty);

  return [
    userInfo,
    logOutHandler,
    carts,
    deletOnCart,
    taxPrice,
    shippingPrice,
    productPrice,
    totalPrice,
    paymentMethod,
    date,
    dateFormat,
    addToOrderHandler,
    address,
  ];
};

/** Go Order Page hook */
const useGoOrderPage = (
  orderData: IOrder | undefined,
  navigate: NavigateFunction
) => {
  // If Ordered, go order page
  useEffect(() => {
    if (orderData) {
      navigate(`/order/${orderData._id}`);
    }
  }, [orderData]);
};

/** Fetch Product hook */
const useFetchProduct = (qty: number) => {
  const { id } = useParams();
  // fetch chosen product
  const [addToCart] = useAddToCartMutation();

  useEffect(() => {
    if (id && qty) {
      addToCart({ id, qty });
    }
  }, [id, qty]);
};
