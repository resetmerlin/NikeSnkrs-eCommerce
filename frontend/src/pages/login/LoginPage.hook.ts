import { useEffect } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { SubmitHandler, UseFormReturn, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { selectUser, useUserAuthenticatedMutation } from '../../features';
import { loginSchema } from '../../components';
import { useAppSelector } from '../../hooks';
import { LoginData } from './LoginPage';
import { IUser } from '../../types';

/**
 * ### Responsible for Conducting Business Logic of Login Page
 *
 * - Responsible for authenticate via login submit handler
 * - Responsible for go home page if authenticated
 */
export const useLoginPage = (): [
  inputErrors: UseFormReturn<LoginData>['formState']['errors'],
  handleSubmit: UseFormReturn<LoginData>['handleSubmit'],
  loginSubmit: (data: LoginData) => void,
  register: UseFormReturn<LoginData>['register'],
  loginError: FetchBaseQueryError | SerializedError | undefined,
] => {
  const navigate = useNavigate();
  const userInfo: IUser = useAppSelector(selectUser);

  // Login via api
  const [userAuthenticate, { error: loginError }] =
    useUserAuthenticatedMutation();

  /** Submit Handler for Login */
  const loginSubmit: SubmitHandler<LoginData> = (data: LoginData) => {
    userAuthenticate({
      email: data.userEmail,
      password: data.userPassword,
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors: inputErrors },
  } = useForm<LoginData>({
    mode: 'onChange',
    resolver: yupResolver(loginSchema),
  });

  // Go to home page after login
  useCheckAuth(userInfo, navigate);

  return [inputErrors, handleSubmit, loginSubmit, register, loginError];
};

/** Checking authentication hooks */
const useCheckAuth = (userInfo: IUser, navigate: NavigateFunction) => {
  useEffect(() => {
    if (userInfo.token && userInfo._id) {
      navigate('/');
    }
  }, [userInfo]);
};
