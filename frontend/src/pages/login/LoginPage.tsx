import { useForm, FormProvider } from 'react-hook-form';
import { Layout } from '../../components/layouts/layout';
import { ChildTemplate, ParentTemplate } from '../../components/atoms';
import { Background, UserMemberEvents } from '../../components/organisms';
import { LoginForm } from '../../components/molecules';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export default function LoginPage() {
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

  const loginSubmit = (e) => {
    console.log(e);
  };
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
              />
            </FormProvider>
          </UserMemberEvents>
        </ChildTemplate>
      </ParentTemplate>
    </Layout>
  );
}
