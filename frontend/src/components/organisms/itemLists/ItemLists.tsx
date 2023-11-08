import { Link } from 'react-router-dom';
import { Item } from '../../molecules';
import './ItemLists.scss';
import { IProduct, IProducts } from '../../../types/dto';

type IProps = {
  products: IProducts | undefined;
};

/**
 * Responsible for making item lists organisms
 *
 * - Responsible for components begin to have the final shape
 * - Responsible for combination of molecules that work together or atoms that compose more elaborate interfaces
 */
export default function ItemLists({ products }: IProps) {
  return (
    <div className="item-lists">
      {products?.map((product: IProduct) => {
        return (
          <Link to={`/product/${product._id}`} key={product._id}>
            <Item product={product} />
          </Link>
        );
      })}
    </div>
  );
}
