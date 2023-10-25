import { TNormalElementProps } from '../../types';
import './template.scss';

interface IProps extends TNormalElementProps<HTMLDivElement> {}

export default function DefaultTemplate({ children }: IProps) {
  return <div className="template__default">{children}</div>;
}
