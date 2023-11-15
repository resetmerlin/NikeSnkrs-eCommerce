import {
  AtomicTitle,
  Cart,
  CartAddress,
  CartSummary,
  ChildTemplate,
  HeaderLayout,
  ParentTemplate,
} from '../../components';
import { useCartPage } from './CartPage.hook';

function CartPage() {
  const [
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
  ] = useCartPage();

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
