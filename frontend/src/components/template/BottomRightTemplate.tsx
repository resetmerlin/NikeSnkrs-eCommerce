import { PropsWithChildren } from 'react';
import './template.scss';

export default function BottomRightTemplate({ children }: PropsWithChildren) {
  return <div className="template__bottom-right">{children}</div>;
}
