import { Link } from 'react-router-dom';
import { IProduct } from '../../../types/dto';
import { AtomicItem } from '../../atoms';
import './ItemColumn.scss';
import { forwardRef } from 'react';
import { ItemColRef } from '../../../pages/product/ProductPage';

type IProps = {
  productId?: string;
  product: IProduct;
};

export default forwardRef<ItemColRef, IProps>(function ItemColumn(
  { product, productId },
  ref
) {
  return (
    <Link to={`/product/${product._id}`} ref={ref}>
      <AtomicItem
        size="xs"
        className={productId == product?._id ? `box-border` : ''}
      >
        <img src={`../products/${product?._id}.png`} alt="card-jordan" />
      </AtomicItem>
    </Link>
  );
});
