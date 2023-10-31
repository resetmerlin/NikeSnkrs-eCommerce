import { useLocation, useParams } from 'react-router-dom';
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
import { cartDeleted } from '../../features/cart/cartReducers';
import { IProduct } from '../../types/dto';

function CartPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const location = useLocation().search;

  const qty = Number(new URLSearchParams(location).get('qty'));
  useAddToCartQuery({ id, qty });

  const cartProducts = useAppSelector((state) => state.carts);
  const deletOnCart = (product: IProduct) => dispatch(cartDeleted(product));

  const taxPrice = 150;
  const shippingPrice = 3000;
  const productPrice = cartProducts
    .reduce((acc, item) => acc + Number(item.qty) * Number(item.price), 0)
    .toFixed(1);

  const totalPrice = +productPrice - taxPrice - shippingPrice;

  const paymentMethod = 'paypal';

  const date = new Date();

  const dateFormat = new Intl.DateTimeFormat('en-kr', {
    dateStyle: 'full',
  });

  const currentDate = dateFormat.format(date);

  return (
    <LayoutHeader>
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
