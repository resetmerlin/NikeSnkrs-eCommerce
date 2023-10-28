import { AtomicButton, AtomicLogo, AtomicSubtitle } from '../../atoms';
import './UserInfoEvents.scss';

export default function UserInfoEvents() {
  return (
    <div className="userInfoEvents">
      <div className="userInfoEvents__logo">
        <AtomicLogo size="l" />
        <AtomicSubtitle size="xl">NikeSnkrs eCommerce</AtomicSubtitle>
      </div>

      <div className="userInfoEvents__form">
        <form>
          <div className="userInfoEvents__intro">
            <AtomicSubtitle size="xl">Sign in</AtomicSubtitle>
            <AtomicSubtitle size="m" color="secondary">
              Get tremendous nike Snkrs right now!
            </AtomicSubtitle>
          </div>
          <div className="userInfoEvents__inputs-wrap">
            <label htmlFor="user-email">
              <AtomicSubtitle size="m">Email</AtomicSubtitle>
            </label>
            <input type="email" id="user-email" name="user-email" />

            <label htmlFor="user-password">
              <AtomicSubtitle size="m">Password</AtomicSubtitle>
            </label>
            <input type="password" id="user-password" name="user-password" />
          </div>
          <AtomicButton size="m" type="submit">
            <AtomicSubtitle size="m" color="tertiary" strength="600">
              Submit
            </AtomicSubtitle>
          </AtomicButton>
        </form>{' '}
        <AtomicSubtitle
          size="s"
          color="secondary"
          className="margin__top-small"
        >
          New Customer? Register Now!
        </AtomicSubtitle>
      </div>
    </div>
  );
}
