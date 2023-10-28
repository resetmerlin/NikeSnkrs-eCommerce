import { Link } from 'react-router-dom';
import { AtomicLogo, AtomicSubtitle } from '../../atoms';
import { Form } from '../../molecules';
import './UserInfoEvents.scss';

export default function UserInfoEvents() {
  return (
    <div className="userInfoEvents">
      <div className="userInfoEvents__logo">
        <AtomicLogo size="l" />
        <AtomicSubtitle size="xl">NikeSnkrs eCommerce</AtomicSubtitle>
      </div>

      <div className="userInfoEvents__form">
        <Form />
        <Link to="/register" className="margin__top-small">
          <AtomicSubtitle size="s" color="secondary">
            New Customer? Register Now!
          </AtomicSubtitle>
        </Link>
      </div>
    </div>
  );
}
