import { Link } from 'react-router-dom';
import {
  AtomicButton,
  AtomicForm,
  AtomicInput,
  AtomicLabel,
  AtomicSubtitle,
} from '../../../atoms';
import './LoginForm.scss';

export default function LoginForm({
  errors,
  loginSubmit,
  handleSubmit,
  register,
  LoginError,
}) {
  return (
    <AtomicForm onSubmit={handleSubmit(loginSubmit)}>
      <div className="form__intro">
        <AtomicSubtitle size="xl">Sign in</AtomicSubtitle>
        <AtomicSubtitle size="m" color="secondary">
          Get tremendous nike Snkrs right now!
        </AtomicSubtitle>
        {LoginError && <p>{LoginError}</p>}
      </div>
      <div className="form__inputs-wrap">
        <AtomicLabel htmlFor="userEmail">
          <AtomicSubtitle size="m">Email</AtomicSubtitle>
        </AtomicLabel>

        <AtomicInput
          type="email"
          id="userEmail"
          name="userEmail"
          register={register}
        />

        {errors?.['userEmail'] && <p>{errors?.['userEmail'].message}</p>}

        <AtomicLabel htmlFor="userPassword">
          <AtomicSubtitle size="m">Password</AtomicSubtitle>
        </AtomicLabel>

        <AtomicInput
          type="password"
          id="userPassword"
          name="userPassword"
          register={register}
        />

        {errors?.['userPassword'] && <p>{errors?.['userPassword'].message}</p>}
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
