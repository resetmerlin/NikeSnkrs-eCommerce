import { AtomicItem, AtomicSubtitle } from '../../atoms';
import SvgStar from '../../atoms/icons/SvgStar';
import './Item.scss';

interface IProps {
  product: { price: string; name: string };
}

export default function Item({ product }: IProps) {
  return (
    <AtomicItem>
      <img src="./card/Card-jordan.png" alt="card-jordan" />
      <AtomicSubtitle size="l">
        Nike Jordan 1 Retro {product?.name}
      </AtomicSubtitle>
      <div className="card__stars">
        <SvgStar color="black" />
        <SvgStar color="black" />
        <SvgStar color="black" />
        <SvgStar color="black" />
        <SvgStar color="black" />
      </div>
      <AtomicSubtitle size="l">$ 300{product?.price}</AtomicSubtitle>
    </AtomicItem>
  );
}
