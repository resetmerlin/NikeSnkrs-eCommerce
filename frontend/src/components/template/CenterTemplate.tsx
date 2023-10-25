import { PropsWithChildren } from 'react';
import './template.scss';

export default function CenterTemplate({ children }: PropsWithChildren) {
  return <div className="template__center">{children}</div>;
}
