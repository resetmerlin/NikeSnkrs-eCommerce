import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  AtomicTitle,
  ChildTemplate,
  ParentTemplate,
} from '../../components/atoms';
import LayoutHeader from '../../components/layouts/layoutHeader/LayoutHeader';
import { CartAddress, CartSummary } from '../../components/molecules';
import { Cart } from '../../components/organisms';
import { useAddToCartQuery } from '../../features/api/apiSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { cartAdded, cartDeleted } from '../../features/cart/cartReducers';
import { IProduct } from '../../types/dto';
import { useEffect } from 'react';
import {
  userInfoAdded,
  userInfoDeleted,
} from '../../features/user/userReducers';

function CartPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation().search;

  const qty = Number(new URLSearchParams(location).get('qty'));
  const { data, error } = useAddToCartQuery({ id, qty });

  const cartProducts = useAppSelector((state) => state.carts);
  const deletOnCart = (product: IProduct) => dispatch(cartDeleted(product));
  const userInfo = useAppSelector((state) => state.userInfo);

  const taxPrice = 150;
  const shippingPrice = 3000;
  const productPrice = cartProducts
    .reduce((acc, item) => acc + Number(item?.qty) * Number(item?.price), 0)
    .toFixed(1);

  const totalPrice = +productPrice - taxPrice - shippingPrice;

  const paymentMethod = 'paypal';

  const date = new Date();

  const dateFormat = new Intl.DateTimeFormat('en-kr', {
    dateStyle: 'full',
  });

  const currentDate = dateFormat.format(date);

  useEffect(() => {
    if (userInfo.length == 0 || !localStorage.getItem('userInfo')) {
      navigate('/login');
    }
  }, [userInfo]);

  useEffect(() => {
    if (cartProducts.length == 0 && localStorage.getItem('cartItems')) {
      const cartItems = localStorage.getItem('cartItems');
      const parsedItems = JSON.parse(cartItems);

      if (parsedItems[0]) {
        dispatch(cartAdded(parsedItems[0]));
      }
    }
  }, [cartProducts]);

  const deleteUserInfo = () => {
    dispatch(userInfoDeleted());
  };

  return (
    <LayoutHeader userInfo={userInfo} deleteUserInfo={deleteUserInfo}>
      <ParentTemplate size="m">
        <ChildTemplate position="topLeft" size="m">
          <AtomicTitle size="xs">Cart</AtomicTitle>
        </ChildTemplate>
        <ChildTemplate position="centerLeft" size="m">
          <Cart
            cartProducts={cartProducts}
            deletOnCart={deletOnCart}
            qty={qty}
          />
        </ChildTemplate>

        <ChildTemplate position="right" size="m">
          <CartSummary
            cartProducts={cartProducts}
            totalPrice={totalPrice}
            paymentMethod={paymentMethod}
            productPrice={productPrice}
            shippingPrice={shippingPrice}
            taxPrice={taxPrice}
            currentDate={currentDate}
          />
        </ChildTemplate>

        <ChildTemplate position="bottomLeft" size="m">
          <CartAddress />
        </ChildTemplate>
      </ParentTemplate>
    </LayoutHeader>
  );
}

export default CartPage;
