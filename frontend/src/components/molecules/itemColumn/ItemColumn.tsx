import { Link } from 'react-router-dom';
import { IProduct } from '../../../types/dto';
import { AtomicItem } from '../../atoms';
import './ItemColumn.scss';

export default function ItemColumn({ product, productId }: IProduct) {
  return (
    <Link to={`/product/${product._id}`}>
      <AtomicItem
        size="xs"
        className={productId == product?._id ? `box-border` : ''}
      >
        <img src={`../products/${product?._id}.png`} alt="card-jordan" />
      </AtomicItem>
    </Link>
  );
}
