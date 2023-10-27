/* eslint-disable react/jsx-props-no-spreading */
import { TNormalElementProps } from '../../../types';
import './AtomicLogo.scss';

interface IProps extends TNormalElementProps<HTMLImageElement> {
  size?: 's' | 'm' | 'l' | 'xl';
}
export default function AtomicLogo({
  children,
  className = '',
  size,
  ...props
}: IProps) {
  return (
    <img
      {...props}
      src={'./nike-logo-black.png'}
      alt="nike-logo-black"
      id="nike-logo"
      onError={(e) => {
        e.target.src = '../nike-logo-black.png';
      }}
      className={`nike-${size}  nike`}
    />
  );
}

AtomicLogo.defaultProps = {
  size: 'm',
};
