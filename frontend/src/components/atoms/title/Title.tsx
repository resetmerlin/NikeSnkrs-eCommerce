/* eslint-disable react/jsx-props-no-spreading */
import { TNormalElementProps } from '../../../types';

interface IProps extends TNormalElementProps<HTMLSpanElement> {
  size?: 's' | 'm' | 'l' | 'max';
  font?: 'goldman' | 'oswald' | 'archivo';
}

export default function Title({
  children,
  className = '',
  size,
  font,
  ...props
}: IProps) {
  return (
    <span
      {...props}
      className={`${className}  title-${size} title-${font} title`}
    >
      {children}
    </span>
  );
}

Title.defaultProps = {
  size: 'm',
  font: 'Oswald',
};
