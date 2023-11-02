import { Link } from 'react-router-dom';
import {
  AtomicButton,
  AtomicForm,
  AtomicInput,
  AtomicLabel,
  AtomicSubtitle,
} from '../../../atoms';
import './RegisterForm.scss';

export default function RegisterForm({
  register,
  handleSubmit,
  errors,
  registerSubmit,
  errorMessage,
}) {
  return (
    <AtomicForm onSubmit={handleSubmit(registerSubmit)}>
      <div className="form__intro">
        <AtomicSubtitle size="xl">Register</AtomicSubtitle>
        <AtomicSubtitle size="m" color="secondary">
          Get tremendous nike Snkrs right now!
        </AtomicSubtitle>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
      <div className="form__inputs-wrap">
        {/* Email label & input */}
        <AtomicLabel htmlFor="userEmail">
          <AtomicSubtitle size="m">Email</AtomicSubtitle>
        </AtomicLabel>
        <AtomicInput
          type="email"
          id="email"
          name="userEmail"
          register={register}
        />
        {errors?.['userEmail'] && <p>{errors?.['userEmail'].message}</p>}

        {/* Name label & input */}
        <AtomicLabel htmlFor="userName">
          <AtomicSubtitle size="m">Name</AtomicSubtitle>
        </AtomicLabel>
        <AtomicInput
          type="name"
          id="userName"
          name="userName"
          register={register}
        />
        {errors?.['userName'] && <p>{errors?.['userName'].message}</p>}

        {/* Password label & input */}
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

        {/* Confirm Password label & input */}
        <AtomicLabel htmlFor="userConfirmPassword">
          <AtomicSubtitle size="m">Confirm Password</AtomicSubtitle>
        </AtomicLabel>
        <AtomicInput
          type="password"
          id="userConfirmPassword"
          name="userConfirmPassword"
          register={register}
        />

        {errors?.['userConfirmPassword'] && (
          <p>{errors?.['userConfirmPassword'].message}</p>
        )}
      </div>
      <AtomicButton size="m" type="submit">
        <AtomicSubtitle size="m" color="tertiary" strength="600">
          Submit
        </AtomicSubtitle>
      </AtomicButton>

      <Link to="/login" className="margin__top-small">
        <AtomicSubtitle size="s" color="secondary">
          Have an account? Sign in right now
        </AtomicSubtitle>
      </Link>
    </AtomicForm>
  );
}
