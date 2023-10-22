import { Link } from 'react-router-dom';
import { Item } from '../../molecules';
import './ItemLists.scss';
export default function ItemLists() {
  return (
    <div className="item-lists">
      <Link to="/product">
        <Item />
      </Link>
      <Link to="/product">
        <Item />
      </Link>
      <Link to="/product">
        <Item />
      </Link>
      <Link to="/product">
        <Item />
      </Link>
      <Link to="/product">
        <Item />
      </Link>
      <Link to="/product">
        <Item />
      </Link>
      <Link to="/product">
        <Item />
      </Link>
      <Link to="/product">
        <Item />
      </Link>
    </div>
  );
}
