import { TNormalElementProps } from '../../../types';
import './AtomicItem.scss';

interface IProps extends TNormalElementProps<HTMLDivElement> {
  size: 'xs' | 's' | 'm';
}

export default function AtomicItem({
  children,
  className = '',
  color,
  size,
  ...props
}: IProps) {
  return (
    <div {...props} className={`${className}  item item-${size}`}>
      {children}
    </div>
  );
}
