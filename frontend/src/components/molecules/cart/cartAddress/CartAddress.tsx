import { Link } from 'react-router-dom';
import './CartAddress.scss';
import { IAddress } from '../../../../types/dto';
import { AtomicButton, AtomicSubtitle, AtomicTitle } from '../../../atoms';

type IProps = {
  address: IAddress;
};
/**
 * Responsible for making cart address molecules
 *
 * - Responsible for creating functionalities by using atoms
 * - Responsible for creating functionalities via pure functions props
 */
export default function CartAddress({ address }: IProps) {
  return (
    <div className="cardAddress">
      <AtomicTitle size="xs">Address</AtomicTitle>

      <div>
        <AtomicSubtitle size="m">Address: {address?.address}</AtomicSubtitle>
      </div>
      <Link to="/profile">
        <AtomicButton size="m">Change Address</AtomicButton>
      </Link>
    </div>
  );
}
