import { ICart } from '../../../../types/dto';
import {
  AtomicButton,
  AtomicItemImage,
  AtomicSubtitle,
  SvgX,
} from '../../../atoms';
import './CartColumn.scss';

type IProps = {
  cartProduct: ICart;
  deletOnCart: (product: ICart['product']) => void;
};

export default function CartColumn({ cartProduct, deletOnCart }: IProps) {
  return (
    <div className="cartColumn">
      <div>
        <AtomicItemImage
          path="long"
          size="s"
          productId={cartProduct?.product}
        />
      </div>
      <div>
        <AtomicSubtitle size="m">{cartProduct?.name}</AtomicSubtitle>
      </div>
      <div>
        <AtomicSubtitle size="m">$ {cartProduct?.price}</AtomicSubtitle>
      </div>
      <div>
        <select name="cartQty" id="cartQty" defaultValue={cartProduct?.qty}>
          {Array.from({ length: cartProduct?.countInStock }).map((_, num) => {
            return (
              <option value={num + 1} key={num + 1}>
                {num + 1}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <AtomicButton
          shape="none"
          onClick={() => deletOnCart(cartProduct?.product)}
        >
          <SvgX size="3rem" color="black" />
        </AtomicButton>
      </div>
    </div>
  );
}
