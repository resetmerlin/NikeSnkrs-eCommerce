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
}

export default function ChildTemplate({
  children,
  className = '',
  position,
  ...props
}: IProps) {
  return (
    <div {...props} className={`${className}  child-template-${position}`}>
      {children}
    </div>
  );
}
