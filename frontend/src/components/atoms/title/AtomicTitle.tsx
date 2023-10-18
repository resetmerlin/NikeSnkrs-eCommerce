/* eslint-disable react/jsx-props-no-spreading */
import { TNormalElementProps } from '../../../types';
import './AtomicTitle.scss';

interface IProps extends TNormalElementProps<HTMLSpanElement> {
  size?: 'xs' | 's' | 'm' | 'l' | 'max';
  color?: 'primary' | 'secondary';
  strength?: '400' | '500' | '600' | '700';
}

export default function AtomicTitle({
  children,
  className = '',
  size,
  strength,
  color,
  ...props
}: IProps) {
  return (
    <span
      {...props}
      className={`${className}  title-${size}   title-${color} title-${strength} title`}
    >
      {children}
    </span>
  );
}

AtomicTitle.defaultProps = {
  size: 'm',
  color: 'primary',
  strength: '400',
};
