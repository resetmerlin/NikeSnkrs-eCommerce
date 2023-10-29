import { IProduct } from '../../../types/dto';
import { AtomicButton, AtomicSubtitle, SvgX } from '../../atoms';
import './CartColumn.scss';

export default function CartColumn({ cartProduct }: IProduct) {
  return (
    <div className="cartColumn">
      <div>
        <img src={`./products/${cartProduct?._id}.png`} alt="cart-product" />
      </div>
      <div>
        <AtomicSubtitle size="m">{cartProduct?.name}</AtomicSubtitle>
      </div>
      <div>
        <AtomicSubtitle size="m">$ {cartProduct?.price}</AtomicSubtitle>
      </div>
      <div>
        <select name="cart-qty" id="cart-qty">
          <option value="1">1</option>
        </select>
      </div>
      <div>
        <AtomicButton shape="none">
          <SvgX size="3rem" color="black" />
        </AtomicButton>
      </div>
    </div>
  );
}
