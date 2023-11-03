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
import { cartDeleted, selectCart } from '../../features/cart/cartSlice';
import { ICart, ICarts } from '../../types/dto';
import { useEffect } from 'react';
import { goToLogin, localCartToState, logOut } from '../../hooks';
import { selectUser } from '../../features/user/userInfoSlice';

function CartPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation().search;

  const qty = Number(new URLSearchParams(location).get('qty'));

  /** fetch chosen product */
  const [addToCart] = useAddToCartMutation();

  const cart: ICarts = useAppSelector(selectCart);
  const userInfo = useAppSelector(selectUser);

  /** Delete product on cart */
  const deletOnCart = (product: ICart['product']) =>
    dispatch(cartDeleted(product));

  /** Fetch if id, qty exists */
  useEffect(() => {
    if (id && qty) {
      addToCart({ id, qty });
    }
  }, [id, qty]);

  /** Check user auth, if no auth go to login page */
  goToLogin(userInfo, navigate);

  /**  Put into cart if no product in cart but in localStorage, */
  localCartToState(cart, dispatch);

  const taxPrice = 150;

  const shippingPrice = 3000;

  const productPrice = cart
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
    qty: cart.length,
  };

  return (
    <LayoutHeader userInfo={userInfo} logOut={logOut}>
      <ParentTemplate size="m">
        <ChildTemplate position="topLeft" size="m">
          <AtomicTitle size="xs">Cart</AtomicTitle>
        </ChildTemplate>
        <ChildTemplate position="centerLeft" size="m">
          <Cart cartProducts={cart} deletOnCart={deletOnCart} />
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
