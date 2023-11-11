import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import LayoutHeader from '../../components/layouts/layoutHeader/LayoutHeader';
import {
  AtomicTitle,
  Cart,
  CartAddress,
  CartSummary,
  ChildTemplate,
  HeaderLayout,
  ParentTemplate,
} from '../../components';
import {
  cartDeleted,
  selectAddress,
  selectCart,
  selectUser,
  useAddToCartMutation,
  useAddToOrderMutation,
} from '../../features';
import { goToLogin, logOut, useAppDispatch, useAppSelector } from '../../hooks';
import { IAddress, ICart, ICarts, IUser } from '../../types';

function CartPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation().search;

  const qty = Number(new URLSearchParams(location).get('qty'));

  /** fetch chosen product */
  const [addToCart] = useAddToCartMutation();
  const [addToOrder, { data: orderData }] = useAddToOrderMutation();

  const carts: ICarts = useAppSelector(selectCart);
  const userInfo: IUser = useAppSelector(selectUser);
  const address: IAddress = useAppSelector(selectAddress);

  /** Check user auth, if no auth go to login page */
  goToLogin(userInfo, navigate);

  /** Delete product on cart */
  const deletOnCart = (product: ICart['product']) =>
    dispatch(cartDeleted(product));

  const logOutHandler = () => {
    logOut(dispatch);
  };

  // Numbers for the payment summary
  const taxPrice = 15;
  const shippingPrice = 3;
  const productPrice = carts
    .reduce((acc, item) => acc + Number(item?.qty) * Number(item?.price), 0)
    .toFixed(1);
  const date = new Date();
  const dateFormat = new Intl.DateTimeFormat('en-kr', {
    dateStyle: 'full',
  });
  const paymentMethod = 'paypal';
  const totalPrice = +productPrice - taxPrice - shippingPrice;

  // Add to Order
  const addToOrderHandler = () => {
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
  };

  /** If Ordered, go order page */
  useEffect(() => {
    if (orderData) {
      navigate(`/order/${orderData._id}`);
    }
  }, [orderData]);

  /** Fetch Product if id, qty exists */
  useEffect(() => {
    if (id && qty) {
      addToCart({ id, qty });
    }
  }, [id, qty]);

  return (
    <HeaderLayout userInfo={userInfo} logOut={logOutHandler}>
      <ParentTemplate size="m">
        <ChildTemplate position="topLeft" size="m">
          <AtomicTitle size="xs">Cart</AtomicTitle>
        </ChildTemplate>
        <ChildTemplate position="centerLeft" size="m">
          <Cart cartProducts={carts} deletOnCart={deletOnCart} />
        </ChildTemplate>

        <ChildTemplate position="right" size="m">
          <CartSummary
            taxPrice={taxPrice}
            shippingPrice={shippingPrice}
            productPrice={productPrice}
            totalPrice={totalPrice}
            paymentMethod={paymentMethod}
            qty={carts.length}
            currentDate={dateFormat.format(date)}
            addToOrderHandler={addToOrderHandler}
          />
        </ChildTemplate>

        <ChildTemplate position="bottomLeft" size="m">
          <CartAddress address={address} />
        </ChildTemplate>
      </ParentTemplate>
    </HeaderLayout>
  );
}

export default CartPage;
