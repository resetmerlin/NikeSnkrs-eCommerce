import { Link } from 'react-router-dom';
import {
  AtomicButton,
  AtomicForm,
  AtomicInput,
  AtomicLabel,
  AtomicSubtitle,
} from '../../../atoms';
import './RegisterForm.scss';

export default function RegisterForm() {
  return (
    <AtomicForm>
      <div className="form__intro">
        <AtomicSubtitle size="xl">Sign in</AtomicSubtitle>
        <AtomicSubtitle size="m" color="secondary">
          Get tremendous nike Snkrs right now!
        </AtomicSubtitle>
      </div>
      <div className="form__inputs-wrap">
        <AtomicLabel htmlFor="userEmail">
          <AtomicSubtitle size="m">Email</AtomicSubtitle>
        </AtomicLabel>

        <AtomicInput type="email" id="email" name="userEmail" />

        <AtomicLabel htmlFor="userPassword">
          <AtomicSubtitle size="m">Password</AtomicSubtitle>
        </AtomicLabel>

        <AtomicInput type="password" id="user-password" name="userPassword" />
      </div>
      <AtomicButton size="m" type="submit">
        <AtomicSubtitle size="m" color="tertiary" strength="600">
          Submit
        </AtomicSubtitle>
      </AtomicButton>

      <Link to="/register" className="margin__top-small">
        <AtomicSubtitle size="s" color="secondary">
          New Customer? Register Now!
        </AtomicSubtitle>
      </Link>
    </AtomicForm>
  );
}
