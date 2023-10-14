import { TNormalElementProps } from '../../../types';

export default function Card({
  children,
  className = '',
}: TNormalElementProps<HTMLDivElement>) {
  return <div className={`${className}  card`}>{children}</div>;
}
