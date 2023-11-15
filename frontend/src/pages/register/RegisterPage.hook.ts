import { useEffect } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { SubmitHandler, UseFormReturn, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../components';
import { useUserAuthorizedMutation } from '../../features';
import { IUser } from '../../types';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

export type RegisterData = {
  userEmail: string;
  userPassword: string;
  userName: string;
  userConfirmPassword: string;
};

export const useRegisterPage = (): [
  register: UseFormReturn<RegisterData>['register'],
  handleSubmit: UseFormReturn<RegisterData>['handleSubmit'],
  inputErrors: UseFormReturn<RegisterData>['formState']['errors'],
  registerSubmit: (data: RegisterData) => void,
  registerError: FetchBaseQueryError | SerializedError | undefined,
] => {
  const navigate = useNavigate();

  // Register via api
  const [userAuthorize, { error: registerError, data: registerData }] =
    useUserAuthorizedMutation();

  // Submit register
  const registerSubmit: SubmitHandler<RegisterData> = (data: RegisterData) => {
    const user = {
      name: data.userName,
      email: data.userEmail,
      password: data.userPassword,
    };
    userAuthorize(user);
  };

  const {
    register,
    handleSubmit,
    formState: { errors: inputErrors },
  } = useForm<RegisterData>({
    mode: 'onChange',
    resolver: yupResolver(registerSchema),
  });

  // Go home after register
  useGoHome(registerData, navigate);

  return [register, handleSubmit, inputErrors, registerSubmit, registerError];
};

const useGoHome = (
  registerData: IUser | undefined,
  navigate: NavigateFunction
) => {
  // Go home after register
  useEffect(() => {
    if (registerData) {
      navigate('/');
    }
  }, [registerData]);
};
