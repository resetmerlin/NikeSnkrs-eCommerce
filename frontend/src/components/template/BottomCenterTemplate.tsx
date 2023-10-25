import { PropsWithChildren } from 'react';
import './template.scss';

export default function BottomCenterTemplate({ children }: PropsWithChildren) {
  return <div className="template__bottom-center">{children}</div>;
}
