import { Layout } from '../../components/layouts/layout';
import { ChildTemplate, ParentTemplate } from '../../components/atoms';
import { Background, UserMemberEvents } from '../../components/organisms';
import { RegisterForm } from '../../components/molecules';
import * as yup from 'yup';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUserAuthorizedMutation } from '../../features/api/apiSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const navigate = useNavigate();
  const registerSchema = yup.object().shape({
    userEmail: yup
      .string()
      .required('Please write your email')
      .matches(/^[^\s@]+@example\.com$/, '@example.com required'),
    userPassword: yup.string().required('Please write your password'),
    userName: yup.string().required('Please write your name'),
    userConfirmPassword: yup
      .string()
      .required('Please write your confirm password')
      .oneOf([yup.ref('userPassword')], `Passwords won't match`),
  });
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

  const registerSubmit = (data) => {
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
