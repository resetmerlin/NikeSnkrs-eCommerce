import { AtomicTitle } from '../../atoms';
import './OrderColumn.scss';

export default function OrderColumn({ title }) {
  return (
    <>
      <AtomicTitle>{title}</AtomicTitle>
      <div className="orderColumn"></div>
    </>
  );
}
