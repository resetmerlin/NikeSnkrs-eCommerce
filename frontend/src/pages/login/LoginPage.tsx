import { useForm, FormProvider } from 'react-hook-form';
import { Layout } from '../../components/layouts/layout';
import { ChildTemplate, ParentTemplate } from '../../components/atoms';
import { Background, UserMemberEvents } from '../../components/organisms';
import { LoginForm } from '../../components/molecules';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUserAuthenticatedMutation } from '../../features/api/apiSlice';

export default function LoginPage() {
  const [
    userAuthenticate, // This is the mutation trigger
    { error }, // This is the destructured mutation result
  ] = useUserAuthenticatedMutation();

  const errorMessage = error?.data?.message;

  const loginSubmit = (data) => {
    userAuthenticate(data.userEmail, data.userPassword);
  };

  const loginSchema = yup.object().shape({
    userEmail: yup
      .string()
      .required('Please write your email')
      .matches(/^[^\s@]+@example\.com$/, '@example.com required'),
    userPassword: yup.string().required('Please write your password'),
  });

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(loginSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

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
