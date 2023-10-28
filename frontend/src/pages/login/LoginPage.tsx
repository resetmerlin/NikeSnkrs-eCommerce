import { Layout } from '../../components/layouts/layout';
import { ChildTemplate, ParentTemplate } from '../../components/atoms';
import { Background, UserLoginEvents } from '../../components/organisms';

export default function LoginPage() {
  return (
    <Layout>
      <ParentTemplate size="full">
        <ChildTemplate size="full" position="leftRight">
          <Background />
        </ChildTemplate>
        <ChildTemplate size="full" position="right">
          <UserLoginEvents />
        </ChildTemplate>
      </ParentTemplate>
    </Layout>
  );
}
