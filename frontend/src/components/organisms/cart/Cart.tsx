import './Cart.scss';
import { AtomicSubtitle } from '../../atoms';
import { CartColumn } from '../../molecules';

export default function Cart({ cartProducts }) {
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
      {cartProducts?.map((cartProduct) => (
        <CartColumn cartProduct={cartProduct} />
      ))}
    </div>
  );
}
