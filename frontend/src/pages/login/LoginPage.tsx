import { useForm, FormProvider, UseFormReturn } from 'react-hook-form';
import { Layout } from '../../components/layouts/layout';
import { ChildTemplate, ParentTemplate } from '../../components/atoms';
import { Background, UserMemberEvents } from '../../components/organisms';
import { LoginForm } from '../../components/molecules';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUserAuthenticatedMutation } from '../../features/api/apiSlice';
import { useEffect } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { useNavigate } from 'react-router-dom';

export type FormData = {
  userEmail: string;
  userPassword: string;
};

export default function LoginPage() {
  const [
    userAuthenticate, // This is the mutation trigger
    { error }, // This is the destructured mutation result
  ] = useUserAuthenticatedMutation();

  const navigate = useNavigate();

  const errorMessage = error?.data?.message;

  const userInfo = useAppSelector((state) => state.userInfo);

  const loginSubmit = (data: { userEmail: string; userPassword: string }) => {
    userAuthenticate({
      email: data.userEmail,
      password: data.userPassword,
    });
  };

  const loginSchema = yup.object().shape({
    userEmail: yup
      .string()
      .required('Please write your email')
      .matches(/^[^\s@]+@example\.com$/, '@example.com required'),
    userPassword: yup.string().required('Please write your password'),
  });

  const methods: UseFormReturn<FormData> = useForm({
    mode: 'onChange',
    resolver: yupResolver(loginSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  useEffect(() => {
    if (userInfo.length !== 0 || localStorage.getItem('userInfo')) {
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
            <FormProvider {...methods}>
              <LoginForm
                errors={errors}
                handleSubmit={handleSubmit}
                loginSubmit={loginSubmit}
                register={register}
                LoginError={errorMessage}
              />
            </FormProvider>
          </UserMemberEvents>
        </ChildTemplate>
      </ParentTemplate>
    </Layout>
  );
}
