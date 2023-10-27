import { IProduct } from '../../../types/dto';
import { AtomicItem, AtomicSubtitle } from '../../atoms';
import SvgStar from '../../atoms/icons/SvgStar';
import './Item.scss';

export default function Item({ product }: IProduct) {
  return (
    <AtomicItem size="m">
      <img src={`./products/${product._id}.png`} alt="card-jordan" />
      <AtomicSubtitle size="l">{product?.name}</AtomicSubtitle>
      <div className="card__stars">
        <SvgStar color="black" />
        <SvgStar color="black" />
        <SvgStar color="black" />
        <SvgStar color="black" />
        <SvgStar color="black" />
      </div>
      <AtomicSubtitle size="l">$ {product?.price}</AtomicSubtitle>
    </AtomicItem>
  );
}
