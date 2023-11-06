import { SubmitHandler, useForm } from 'react-hook-form';
import { Layout } from '../../components/layouts/layout';
import { ChildTemplate, ParentTemplate } from '../../components/atoms';
import { Background, UserMemberEvents } from '../../components/organisms';
import { LoginForm } from '../../components/molecules';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUserAuthenticatedMutation } from '../../features/api/apiSlice';
import { useEffect } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { loginSchema } from '../../components/schema';
import { IUser } from '../../types/dto';

export type LoginData = {
  userEmail: string;
  userPassword: string;
};

export default function LoginPage() {
  const navigate = useNavigate();
  const userInfo: IUser = useAppSelector((state) => state.userInfo);

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
          <UserMemberEvents>
            <LoginForm
              inputErrors={inputErrors}
              handleSubmit={handleSubmit}
              loginSubmit={loginSubmit}
              register={register}
              loginError={loginError}
            />
          </UserMemberEvents>
        </ChildTemplate>
      </ParentTemplate>
    </Layout>
  );
}
