/* eslint-disable react/jsx-props-no-spreading */
import { TNormalElementProps } from '../../../types';
import './AtomicSubtitle.scss';

interface IProps extends TNormalElementProps<HTMLSpanElement> {
  size?: 's' | 'm' | 'l' | 'xl';
  color?: 'primary' | 'secondary';
  strength?: '400' | '500' | '600' | '700';
}

export default function AtomicSubtitle({
  children,
  className = '',
  size,
  color,
  strength,

  ...props
}: IProps) {
  return (
    <span
      {...props}
      className={`${className}  subtitle-${size} subtitle-${strength} subtitle-${color}`}
    >
      {children}
    </span>
  );
}

AtomicSubtitle.defaultProps = {
  size: 'm',
  color: 'primary',
  strength: '400',
};
