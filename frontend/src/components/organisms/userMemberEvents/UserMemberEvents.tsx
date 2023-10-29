import { PropsWithChildren } from 'react';
import { AtomicLogo, AtomicSubtitle } from '../../atoms';
import './UserMemberEvents.scss';
import { Link } from 'react-router-dom';

export default function UserMemberEvents({ children }: PropsWithChildren) {
  return (
    <div className="userMemberEvents">
      <Link to="/" className="userMemberEvents__logo">
        <AtomicLogo size="l" />
        <AtomicSubtitle size="xl">NikeSnkrs eCommerce</AtomicSubtitle>
      </Link>

      <div className="userMemberEvents__form">{children}</div>
    </div>
  );
}
