import { Layout } from '../../components/layouts/layout';
import { ChildTemplate, ParentTemplate } from '../../components/atoms';
import { Background, UserMemberEvents } from '../../components/organisms';
import { RegisterForm } from '../../components/molecules';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUserAuthorizedMutation } from '../../features/api/apiSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerSchema } from '../../components/schema';

export type RegisterData = {
  userEmail: string;
  userPassword: string;
  userName: string;
};

export default function RegisterPage() {
  const navigate = useNavigate();

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(registerSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const [userAuthorize, { error, data }] = useUserAuthorizedMutation();

  const errorMessage = error?.data?.message;

  const registerSubmit = (data: RegisterData) => {
    const user = {
      name: data.userName,
      email: data.userEmail,
      password: data.userPassword,
    };
    userAuthorize(user);
  };

  useEffect(() => {
    if (data) {
      navigate('/');
    }
  }, [data]);

  return (
    <Layout>
      <ParentTemplate size="full">
        <ChildTemplate size="full" position="leftRight">
          <Background />
        </ChildTemplate>
        <ChildTemplate size="full" position="right">
          <UserMemberEvents>
            <FormProvider {...methods}>
              <RegisterForm
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                registerSubmit={registerSubmit}
                errorMessage={errorMessage}
              />
            </FormProvider>
          </UserMemberEvents>
        </ChildTemplate>
      </ParentTemplate>
    </Layout>
  );
}
