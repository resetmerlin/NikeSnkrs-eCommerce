import { Link } from 'react-router-dom';
import { AtomicButton, AtomicSubtitle, AtomicTitle } from '../../atoms';
import './CartAddress.scss';

export default function CartAddress({ address }) {
  return (
    <div className="cardAddress">
      <AtomicTitle size="xs">Address</AtomicTitle>

      <div>
        <AtomicSubtitle size="m">Address: {address?.address}</AtomicSubtitle>
      </div>
      <Link to="/profile">
        <AtomicButton size="m">Change Address</AtomicButton>{' '}
      </Link>
    </div>
  );
}
