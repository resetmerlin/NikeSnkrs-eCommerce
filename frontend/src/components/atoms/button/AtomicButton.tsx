/* eslint-disable react/jsx-props-no-spreading */
import { TButtonElementProps } from '../../../types';

interface IProps extends TButtonElementProps {
  type?: 'submit' | 'button';
  color?: 'primary' | 'secondary';
  appearance?: 'normal' | 'round';
}

export default function AtomicButton({
  children,
  className = '',
  color,
  appearance,
  ...props
}: IProps) {
  return (
    <button
      {...props}
      className={`${className}   button-${color}   button-${appearance} button`}
    >
      {children}
    </button>
  );
}

AtomicButton.defaultProps = {
  size: 'm',
  color: 'primary',
  appearance: 'normal',
};
