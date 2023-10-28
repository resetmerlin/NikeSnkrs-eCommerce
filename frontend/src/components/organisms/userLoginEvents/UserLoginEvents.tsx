import { PropsWithChildren } from 'react';
import { AtomicLogo, AtomicSubtitle } from '../../atoms';
import { Form } from '../../molecules';
import './UserLoginEvents.scss';

export default function UserLoginEvents({ children }: PropsWithChildren) {
  return (
    <div className="userInfoEvents">
      <div className="userInfoEvents__logo">
        <AtomicLogo size="l" />
        <AtomicSubtitle size="xl">NikeSnkrs eCommerce</AtomicSubtitle>
      </div>

      <div className="userInfoEvents__form">
        <Form />
      </div>
    </div>
  );
}
