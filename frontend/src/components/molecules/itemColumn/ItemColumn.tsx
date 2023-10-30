import { Link } from 'react-router-dom';
import { IProduct } from '../../../types/dto';
import { AtomicItem } from '../../atoms';
import './ItemColumn.scss';

type IProps = {
  productId: string;
  product: IProduct;
};

export default function ItemColumn({ product, productId }: IProps) {
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
