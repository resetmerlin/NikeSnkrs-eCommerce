import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  AtomicTitle,
  ChildTemplate,
  ParentTemplate,
} from '../../components/atoms';
import LayoutHeader from '../../components/layouts/layoutHeader/LayoutHeader';
import { CartAddress, CartSummary } from '../../components/molecules';
import { Cart } from '../../components/organisms';
import { useAddToCartMutation } from '../../features/api/apiSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { cartAdded, cartDeleted } from '../../features/cart/cartReducers';
import { ICart, ICarts } from '../../types/dto';
import { useEffect } from 'react';
import { userInfoDeleted } from '../../features/user/userReducers';

function CartPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation().search;

  const qty = Number(new URLSearchParams(location).get('qty'));

  /** fetch chosen product */
  const [addToCart] = useAddToCartMutation();

  const cartProducts: ICarts = useAppSelector((state) => state.carts);
  const userInfo = useAppSelector((state) => state.userInfo);

  /** Delete product on cart */
  const deletOnCart = (product: ICart['product']) =>
    dispatch(cartDeleted(product));

  const logOut = () => {
    dispatch(userInfoDeleted());
  };

  /** Fetch if id, qty exists */
  useEffect(() => {
    if (id && qty) {
      addToCart({ id, qty });
    }
  }, [id, qty]);

  /** Check user Login else go to login page */
  useEffect(() => {
    if (!localStorage.getItem('userInfo') && userInfo.length == 0) {
      navigate('/login');
    }
  }, [userInfo]);

  /**  Put into cart if no product in cart but in localStorage, */
  useEffect(() => {
    if (cartProducts.length == 0 && localStorage.getItem('cartItems')) {
      const cartItems = localStorage.getItem('cartItems');

      if (cartItems) {
        const parsedItems = JSON.parse(cartItems);
        if (parsedItems[0]) {
          dispatch(cartAdded(parsedItems[0]));
        }
      }
    }
  }, [cartProducts]);

  const taxPrice = 150;

  const shippingPrice = 3000;

  const productPrice = cartProducts
    .reduce((acc, item) => acc + Number(item?.qty) * Number(item?.price), 0)
    .toFixed(1);

  const date = new Date();

  const dateFormat = new Intl.DateTimeFormat('en-kr', {
    dateStyle: 'full',
  });

  const prices = {
    taxPrice,
    shippingPrice,
    productPrice,
    totalPrice: +productPrice - taxPrice - shippingPrice,
    paymentMethod: 'paypal',
    currentDate: dateFormat.format(date),
    qty: cartProducts.length,
  };

  return (
    <LayoutHeader userInfo={userInfo} logOut={logOut}>
      <ParentTemplate size="m">
        <ChildTemplate position="topLeft" size="m">
          <AtomicTitle size="xs">Cart</AtomicTitle>
        </ChildTemplate>
        <ChildTemplate position="centerLeft" size="m">
          <Cart cartProducts={cartProducts} deletOnCart={deletOnCart} />
        </ChildTemplate>

        <ChildTemplate position="right" size="m">
          <CartSummary {...prices} />
        </ChildTemplate>

        <ChildTemplate position="bottomLeft" size="m">
          <CartAddress />
        </ChildTemplate>
      </ParentTemplate>
    </LayoutHeader>
  );
}

export default CartPage;
