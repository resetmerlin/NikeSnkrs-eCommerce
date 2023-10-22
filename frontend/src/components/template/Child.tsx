import { PropsWithChildren } from 'react';

export function ChildBig({ children }: PropsWithChildren) {
  return <div className="template__child-big">{children}</div>;
}
export function ChildSmall({ children }: PropsWithChildren) {
  return <div className="template__child-small">{children}</div>;
}

export function ChildCenter({ children }: PropsWithChildren) {
  return <div className="template__child-center">{children}</div>;
}

export function ChildTopLeft({ children }: PropsWithChildren) {
  return <div className="template__child-top-left">{children}</div>;
}
