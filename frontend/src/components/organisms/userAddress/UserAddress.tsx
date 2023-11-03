import {
  AtomicButton,
  AtomicInput,
  AtomicLabel,
  AtomicTitle,
} from '../../atoms';
import './UserAddress.scss';

export default function UserAddress() {
  return (
    <form className="userAddress">
      <div>
        <AtomicTitle size="xs">User address:</AtomicTitle>
      </div>
      <AtomicLabel htmlFor="postalCode">Postal Code</AtomicLabel>
      <AtomicInput type="name" name="postalCode" />

      <AtomicLabel htmlFor="address">Address</AtomicLabel>
      <AtomicInput type="name" name="address" />

      <AtomicLabel htmlFor="specificAddress">Enter password</AtomicLabel>
      <AtomicInput type="name" name="specificAddress" />

      <AtomicLabel htmlFor="referenceItem">Confirm password</AtomicLabel>
      <AtomicInput type="name" name="referenceItem" />

      <AtomicButton type="submit" size="m" shape="normal">
        Update Address
      </AtomicButton>
    </form>
  );
}
