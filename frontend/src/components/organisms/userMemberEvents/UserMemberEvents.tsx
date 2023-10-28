import { PropsWithChildren } from 'react';
import { AtomicLogo, AtomicSubtitle } from '../../atoms';
import { Form } from '../../molecules';
import './UserMemberEvents.scss';

export default function UserMemberEvents({ children }: PropsWithChildren) {
  return (
    <div className="userMemberEvents">
      <div className="userMemberEvents__logo">
        <AtomicLogo size="l" />
        <AtomicSubtitle size="xl">NikeSnkrs eCommerce</AtomicSubtitle>
      </div>
      <div className="userMemberEvents__form">{children}</div>
    </div>
  );
}
