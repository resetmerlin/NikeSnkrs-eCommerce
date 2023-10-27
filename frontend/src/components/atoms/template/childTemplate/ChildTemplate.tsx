/* eslint-disable react/jsx-props-no-spreading */
import { TNormalElementProps } from '../../../../types';
import './ChildTemplate.scss';

interface IProps extends TNormalElementProps<HTMLDivElement> {
  position:
    | 'center'
    | 'bottomRight'
    | 'topLeft'
    | 'bottomCenter'
    | 'left'
    | 'right';

  size: 's' | 'm' | 'full';
}

export default function ChildTemplate({
  children,
  className = '',
  position,
  size,
  ...props
}: IProps) {
  return (
    <div
      {...props}
      className={`${className} child-template-w-${size}-${position}`}
    >
      {children}
    </div>
  );
}
