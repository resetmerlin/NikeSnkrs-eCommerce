import { AtomicTitle } from '../../atoms';
import './OrderColumn.scss';

type IProps = {
  title: string;
};

/**
 * Responsible for making order column molecules
 *
 * - Responsible for creating functionalities by using atoms
 * - Responsible for creating functionalities via pure functions props
 */
export default function OrderColumn({ title }: IProps) {
  return (
    <>
      <AtomicTitle>{title}</AtomicTitle>
      <div className="orderColumn"></div>
    </>
  );
}
