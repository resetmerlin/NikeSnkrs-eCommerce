import LayoutHeader from '../../components/layouts/layoutHeader/LayoutHeader';
import { ChildTemplate, ParentTemplate } from '../../components/atoms';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { logOut } from '../../hooks';
import { selectUser } from '../../features/user/userInfoSlice';
import { Cart } from '../../components/organisms';
import { ICart, ICarts } from '../../types/dto';
import { cartDeleted, selectCart } from '../../features/cart/cartSlice';

export default function OrderPage() {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selectUser);
  const cart: ICarts = useAppSelector(selectCart);
  /** Delete product on cart */
  const deletOnCart = (product: ICart['product']) =>
    dispatch(cartDeleted(product));

  const logOutHandler = () => {
    logOut(dispatch);
  };

  return (
    <LayoutHeader userInfo={userInfo} logOut={logOutHandler}>
      <ParentTemplate size="s">
        <ChildTemplate position="centerLeft" size="m">
          <Cart cartProducts={cart} deletOnCart={deletOnCart} />
        </ChildTemplate>
      </ParentTemplate>
    </LayoutHeader>
  );
}
