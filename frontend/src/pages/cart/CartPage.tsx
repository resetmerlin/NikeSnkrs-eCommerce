import {
  AtomicTitle,
  ChildTemplate,
  ParentTemplate,
} from '../../components/atoms';
import LayoutHeader from '../../components/layouts/layoutHeader/LayoutHeader';
import { CartAddress, OrderSummary } from '../../components/molecules';
import { Cart } from '../../components/organisms';
import { useGetProductsQuery } from '../../features/api/apiSlice';

function CartPage() {
  const { data } = useGetProductsQuery();
  const cartProducts = data && [...data]?.slice(0, 3);
  return (
    <LayoutHeader>
      <ParentTemplate size="m">
        <ChildTemplate position="topLeft" size="m">
          <AtomicTitle size="xs">Cart</AtomicTitle>
        </ChildTemplate>
        <ChildTemplate position="centerLeft" size="m">
          <Cart cartProducts={cartProducts} />
        </ChildTemplate>

        <ChildTemplate position="right" size="m">
          <OrderSummary />
        </ChildTemplate>

        <ChildTemplate position="bottomLeft" size="m">
          <CartAddress />
        </ChildTemplate>
      </ParentTemplate>
    </LayoutHeader>
  );
}

export default CartPage;
