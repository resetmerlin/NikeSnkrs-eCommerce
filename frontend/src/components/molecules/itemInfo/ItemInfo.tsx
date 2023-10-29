import { IProduct } from '../../../types/dto';
import { AtomicSubtitle, AtomicTitle } from '../../atoms';
import SvgStar from '../../atoms/icons/SvgStar';
import './ItemInfo.scss';

export default function ItemInfo({ product }: IProduct) {
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
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
            </select>
          </div>
        </div>

        <img src="../item-nike-logo.jpg" alt="item-nike-logo" />
      </div>
    </div>
  );
}
