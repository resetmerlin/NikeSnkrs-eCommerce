/* eslint-disable react/jsx-props-no-spreading */
import { TNormalElementProps } from '../../../types';

interface IProps extends TNormalElementProps<HTMLSpanElement> {
  size?: 's' | 'm' | 'l' | 'xl';
}

export default function Subtitle({
  children,
  className = '',
  size,
  ...props
}: IProps) {
  return (
    <span {...props} className={`${className}  subtitle-${size}`}>
      {children}
    </span>
  );
}

Subtitle.defaultProps = {
  size: 'm',
};
