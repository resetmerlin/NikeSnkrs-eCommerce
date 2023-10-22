import { TNormalElementProps } from '../../../types';
import './AtomicItem.scss';

export default function AtomicItem({
  children,
  className = '',
}: TNormalElementProps<HTMLDivElement>) {
  return <div className={`${className}  item`}>{children}</div>;
}
