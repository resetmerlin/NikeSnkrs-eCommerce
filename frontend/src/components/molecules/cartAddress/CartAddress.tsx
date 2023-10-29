import { AtomicButton, AtomicSubtitle, AtomicTitle } from '../../atoms';
import './CartAddress.scss';

export default function CartAddress() {
  return (
    <div className="cardAddress">
      <AtomicTitle size="xs">Address</AtomicTitle>
      <div>
        <AtomicSubtitle size="m">Postal Address:</AtomicSubtitle>
      </div>
      <div>
        <AtomicSubtitle size="m">Address:</AtomicSubtitle>
      </div>
      <div>
        <AtomicSubtitle size="m">Specific Address:</AtomicSubtitle>
      </div>
      <div>
        <AtomicSubtitle size="m">Referenc Item:</AtomicSubtitle>
      </div>
      <AtomicButton size="m">Change Address</AtomicButton>
    </div>
  );
}
