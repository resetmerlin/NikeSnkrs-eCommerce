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
            <select id="product-select">
              <option value="dog">1</option>
              <option value="cat">2</option>
              <option value="hamster">3</option>
              <option value="parrot">4</option>
              <option value="spider">5</option>
              <option value="goldfish">6</option>
              <option value="goldfish">7</option>
            </select>
          </div>
        </div>

        <img src="../item-nike-logo.jpg" alt="item-nike-logo" />
      </div>
    </div>
  );
}
