import { IProduct } from '../../../types/dto';
import { AtomicItem, AtomicItemImage, AtomicSubtitle } from '../../atoms';
import SvgStar from '../../atoms/icons/SvgStar';
import './Item.scss';

type IProps = {
  product: IProduct;
};

export default function Item({ product }: IProps) {
  return (
    <AtomicItem size="m">
      <AtomicItemImage path="short" size="l" productId={product._id} />
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
