import {
  Background,
  ChildTemplate,
  Layout,
  LoginForm,
  ParentTemplate,
  UserForm,
} from '../../components';
import { useLoginPage } from './LoginPage.hook';

export type LoginData = {
  userEmail: string;
  userPassword: string;
};

export default function LoginPage() {
  const [inputErrors, handleSubmit, loginSubmit, register, loginError] =
    useLoginPage();

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
