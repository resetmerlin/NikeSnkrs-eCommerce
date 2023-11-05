import { Link } from 'react-router-dom';
import {
  AtomicButton,
  AtomicForm,
  AtomicInput,
  AtomicLabel,
  AtomicSubtitle,
} from '../../../atoms';
import './LoginForm.scss';
import { UseFormReturn } from 'react-hook-form';
import { FormData } from '../../../../pages/login/LoginPage';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

type IProps = {
  loginSubmit: (data: FormData) => void;
  loginError: FetchBaseQueryError | SerializedError | undefined;
  register: UseFormReturn<FormData>['register'];
  handleSubmit: UseFormReturn<FormData>['handleSubmit'];
  inputErrors: UseFormReturn<FormData>['formState']['errors'];
};
export default function LoginForm({
  inputErrors,
  loginSubmit,
  handleSubmit,
  register,
  loginError,
}: IProps) {
  return (
    <AtomicForm onSubmit={handleSubmit(loginSubmit)}>
      <div className="form__intro">
        <AtomicSubtitle size="xl">Sign in</AtomicSubtitle>
        <AtomicSubtitle size="m" color="secondary">
          Get tremendous nike Snkrs right now!
        </AtomicSubtitle>
        {loginError && 'data' in loginError && (
          <p>{(loginError as { data: { message: string } })?.data?.message}</p>
        )}
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

        {inputErrors?.['userEmail'] && (
          <p>{inputErrors?.['userEmail'].message}</p>
        )}

        <AtomicLabel htmlFor="userPassword">
          <AtomicSubtitle size="m">Password</AtomicSubtitle>
        </AtomicLabel>

        <AtomicInput
          type="password"
          id="userPassword"
          name="userPassword"
          register={register}
        />

        {inputErrors?.['userPassword'] && (
          <p>{inputErrors?.['userPassword'].message}</p>
        )}
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
