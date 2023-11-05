/* eslint-disable react/jsx-props-no-spreading */
import { TNormalElementProps } from '../../../../types';
import './ParentTemplate.scss';

interface IProps extends TNormalElementProps<HTMLDivElement> {
  size: 's' | 'm' | 'full';
}

export default function ParentTemplate({
  children,
  className = '',
  size,
  ...props
}: IProps) {
  return (
    <div {...props} className={`${className}     template-${size} template`}>
      {children}
    </div>
  );
}
