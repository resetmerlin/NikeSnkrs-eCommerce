/* eslint-disable react/jsx-props-no-spreading */
import { TButtonElementProps } from '../../../types';
import './AtomicButton.scss';
interface IProps extends TButtonElementProps {
  type?: 'submit' | 'button';
  color?: 'primary' | 'secondary';
  shape?: 'normal' | 'round';
}

export default function AtomicButton({
  children,
  className = '',
  color,
  shape,
  type,
  ...props
}: IProps) {
  return (
    <button
      {...props}
      type={type}
      className={`${className}   button-${color}   button-${shape} button`}
    >
      {children}
    </button>
  );
}

AtomicButton.defaultProps = {
  type: 'button',
  color: 'primary',
  shape: 'normal',
};
