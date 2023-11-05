import { IProduct } from '../../../types/dto';
import { AtomicCard, AtomicSubtitle } from '../../atoms';
import SvgStar from '../../atoms/icons/SvgStar';
import './Card.scss';

type IProps = {
  product: IProduct;
};
export default function Card({ product }: IProps) {
  return (
    <AtomicCard>
      <img src={`./products/${product?._id}.png`} alt="card-jordan" />
      <div className="card__content">
        <AtomicSubtitle size="m">{product?.name}</AtomicSubtitle>

        <div className="card__stars">
          <SvgStar color="black" />
          <SvgStar color="black" />
          <SvgStar color="black" />
          <SvgStar color="black" />
          <SvgStar color="black" />
        </div>
        <AtomicSubtitle size="m">$ {product?.price}</AtomicSubtitle>
      </div>
    </AtomicCard>
  );
}
