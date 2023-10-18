/* eslint-disable react/jsx-props-no-spreading */
import { TNormalElementProps } from '../../../types';
import './AtomicSubtitle.scss';

interface IProps extends TNormalElementProps<HTMLSpanElement> {
  size?: 's' | 'm' | 'l' | 'xl';
  color?: 'primary' | 'secondary';
}

export default function AtomicSubtitle({
  children,
  className = '',
  size,
  color,
  ...props
}: IProps) {
  return (
    <span
      {...props}
      className={`${className}  subtitle-${size}  subtitle-${color}`}
    >
      {children}
    </span>
  );
}

AtomicSubtitle.defaultProps = {
  size: 'm',
  color: 'primary',
};
