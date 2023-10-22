import { TNormalElementProps } from '../../types';
import './style.scss';

interface IProps extends TNormalElementProps<HTMLDivElement> {}

export default function Parent({ children }: IProps) {
  return <div className="template__parent">{children}</div>;
}
