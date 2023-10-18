import { AtomicCard, AtomicSubtitle } from '../../atoms';
import SvgStar from '../../atoms/icons/SvgStar';
import './Card.scss';

interface IProps {
  product: { price: string; name: string };
}

export default function Card({ product }: IProps) {
  return (
    <AtomicCard>
      <img src="./card/Card-jordan.png" alt="card-jordan" />
      <div className="card__content">
        <AtomicSubtitle size="m">
          Nike Jordan 1 Retro {product?.name}
        </AtomicSubtitle>

        <div className="card__stars">
          <SvgStar color="black" />
          <SvgStar color="black" />
          <SvgStar color="black" />
          <SvgStar color="black" />
          <SvgStar color="black" />
        </div>
        <AtomicSubtitle size="m">$ 300{product?.price}</AtomicSubtitle>
      </div>
    </AtomicCard>
  );
}
