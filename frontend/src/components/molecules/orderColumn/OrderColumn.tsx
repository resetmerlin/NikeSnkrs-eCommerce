import { AtomicTitle } from '../../atoms';
import './OrderColumn.scss';

type IProps = {
  title: string;
};

export default function OrderColumn({ title }: IProps) {
  return (
    <>
      <AtomicTitle>{title}</AtomicTitle>
      <div className="orderColumn"></div>
    </>
  );
}
