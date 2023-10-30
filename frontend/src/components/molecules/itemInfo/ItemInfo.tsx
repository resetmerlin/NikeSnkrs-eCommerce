import { IProduct } from '../../../types/dto';
import { AtomicSubtitle, AtomicTitle } from '../../atoms';
import SvgStar from '../../atoms/icons/SvgStar';
import './ItemInfo.scss';

type IProps = {
  product: IProduct;
};

export default function ItemInfo({ product }: IProps) {
  return (
    <div className="item-info">
      <AtomicTitle size="m" strength="600">
        {product?.name}
      </AtomicTitle>
      <div className="item-info__bottom">
        <div className="item-info__bottom-info">
          <AtomicTitle size="s">$ {product?.price}</AtomicTitle>
          <AtomicSubtitle size="l">
            CURRENT STOCKS: {product?.countInStock}
          </AtomicSubtitle>
          <div className="card__stars">
            <SvgStar color="black" />
            <SvgStar color="black" />
            <SvgStar color="black" />
            <SvgStar color="black" />
            <SvgStar color="black" />
          </div>
          <div className="item-info__bottom-info__select">
            <AtomicSubtitle size="l">SELECT:</AtomicSubtitle>
            <select id="productSelect">
              {Array.from({ length: product?.countInStock }).map((_, num) => {
                return <option value={num + 1}>{num + 1}</option>;
              })}
            </select>
          </div>
        </div>

        <img src="../item-nike-logo.jpg" alt="item-nike-logo" />
      </div>
    </div>
  );
}

ItemInfo.defaultProps = {
  product: [],
};
