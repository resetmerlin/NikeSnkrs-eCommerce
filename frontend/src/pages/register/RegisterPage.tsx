import { Layout } from '../../components/layouts/layout';
import { ChildTemplate, ParentTemplate } from '../../components/atoms';
import { Background, UserMemberEvents } from '../../components/organisms';
import { Form } from '../../components/molecules';

export default function RegisterPage() {
  return (
    <Layout>
      <ParentTemplate size="full">
        <ChildTemplate size="full" position="leftRight">
          <Background />
        </ChildTemplate>
        <ChildTemplate size="full" position="right">
          <UserMemberEvents>
            <Form />
          </UserMemberEvents>
        </ChildTemplate>
      </ParentTemplate>
    </Layout>
  );
}
