import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useUserAuthorizedMutation } from '../../features/api/apiSlice';
import {
  Background,
  ChildTemplate,
  Layout,
  ParentTemplate,
  RegisterForm,
  UserForm,
  registerSchema,
} from '../../components';

export type RegisterData = {
  userEmail: string;
  userPassword: string;
  userName: string;
  userConfirmPassword: string;
};

export default function RegisterPage() {
  const navigate = useNavigate();

  // Register via api
  const [userAuthorize, { error: registerError, data }] =
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
          <UserForm>
            <RegisterForm
              register={register}
              handleSubmit={handleSubmit}
              inputErrors={inputErrors}
              registerSubmit={registerSubmit}
              registerError={registerError}
            />
          </UserForm>
        </ChildTemplate>
      </ParentTemplate>
    </Layout>
  );
}
