import { PropsWithChildren } from 'react';
import './template.scss';

export default function TopLeftTemplate({ children }: PropsWithChildren) {
  return <div className="template__top-left">{children}</div>;
}
