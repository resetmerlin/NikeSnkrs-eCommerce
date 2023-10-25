import { Link } from 'react-router-dom';
import { Item } from '../../molecules';
import './ItemLists.scss';
export default function ItemLists({ products }) {
  return (
    <div className="item-lists">
      {products?.map((product) => {
        return (
          <Link to={`/product/${product._id}`} key={product._id}>
            <Item product={product} />
          </Link>
        );
      })}
    </div>
  );
}
