import { IProduct } from '../../../types/dto';
import { AtomicButton, AtomicSubtitle, SvgLeftArrowAlt } from '../../atoms';
import { ItemInfo } from '../../molecules';
import './ItemInfoEvents.scss';

export default function ItemInfoEvents({ product, goPrevPage }: IProduct) {
  return (
    <div className="itemInfoEvents">
      <AtomicButton
        type="button"
        shape="none"
        className="arrow-button"
        onClick={goPrevPage}
      >
        <SvgLeftArrowAlt size="8rem" color="black" />
      </AtomicButton>
      <ItemInfo product={product} />

      <div className="itemInfoEvents__btn-wrap">
        <AtomicButton shape="rect" type="submit" size="xl">
          <AtomicSubtitle color="tertiary" size="xl" strength="600">
            Order Now
          </AtomicSubtitle>
        </AtomicButton>

        <AtomicButton shape="rect" type="submit" color="secondary" size="xl">
          <AtomicSubtitle size="xl" strength="600">
            Favorite
          </AtomicSubtitle>
        </AtomicButton>
      </div>
    </div>
  );
}
