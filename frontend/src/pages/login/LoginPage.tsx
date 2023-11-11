import {
  Background,
  ChildTemplate,
  Layout,
  LoginForm,
  ParentTemplate,
  UserForm,
  loginSchema,
} from '../../components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../../types/dto';
import { selectUser } from '../../features/user/userInfoSlice';
import { useUserAuthenticatedMutation } from '../../features/api/apiSlice';

export type LoginData = {
  userEmail: string;
  userPassword: string;
};

export default function LoginPage() {
  const navigate = useNavigate();
  const userInfo: IUser = useAppSelector(selectUser);

  // Login via api
  const [userAuthenticate, { error: loginError }] =
    useUserAuthenticatedMutation();

  // Submit login
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
  useEffect(() => {
    if (userInfo.token && userInfo._id) {
      navigate('/');
    }
  }, [userInfo]);

  return (
    <Layout>
      <ParentTemplate size="full">
        <ChildTemplate size="full" position="leftRight">
          <Background />
        </ChildTemplate>
        <ChildTemplate size="full" position="right">
          <UserForm>
            <LoginForm
              inputErrors={inputErrors}
              handleSubmit={handleSubmit}
              loginSubmit={loginSubmit}
              register={register}
              loginError={loginError}
            />
          </UserForm>
        </ChildTemplate>
      </ParentTemplate>
    </Layout>
  );
}
