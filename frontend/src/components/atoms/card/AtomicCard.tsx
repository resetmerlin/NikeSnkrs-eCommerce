import { TNormalElementProps } from '../../../types';
import './AtomicCard.scss';

export default function AtomicCard({
  children,
  className = '',
}: TNormalElementProps<HTMLDivElement>) {
  return <div className={`${className}  card`}>{children}</div>;
}
