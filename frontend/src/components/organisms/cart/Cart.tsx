import './Cart.scss';
import { AtomicSubtitle } from '../../atoms';
import { CartColumn } from '../../molecules';
import { ICart, ICarts } from '../../../types/dto';

type IProps = {
  cartProducts: ICarts;
  deletOnCart: (product: ICart['product']) => void;
};
export default function Cart({ cartProducts, deletOnCart }: IProps) {
  return (
    <div className="cart">
      <div className="cart__row">
        <AtomicSubtitle size="l" color="secondary">
          Product
        </AtomicSubtitle>
        <AtomicSubtitle size="l" color="secondary">
          Name
        </AtomicSubtitle>
        <AtomicSubtitle size="l" color="secondary">
          Price
        </AtomicSubtitle>
        <AtomicSubtitle size="l" color="secondary">
          Quantity
        </AtomicSubtitle>
        <AtomicSubtitle size="l" color="secondary">
          Delete
        </AtomicSubtitle>
      </div>
      {cartProducts &&
        cartProducts?.map((cartProduct: ICart) => (
          <CartColumn
            cartProduct={cartProduct}
            key={cartProduct?.product}
            deletOnCart={deletOnCart}
          />
        ))}
    </div>
  );
}
