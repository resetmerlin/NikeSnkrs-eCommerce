import LayoutHeader from '../../components/layouts/layoutHeader/LayoutHeader';
import { ChildTemplate, ParentTemplate } from '../../components/atoms';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectUser } from '../../features/user/userInfoSlice';
import { logOut } from '../../hooks';
import { UserAddress, UserInfo } from '../../components/organisms';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../components/schema';

export type ProfileData = {
  userEmail: string;
  userPassword: string;
  userName: string;
};
export default function ProfilePage() {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selectUser);

  const logOutHandler = () => {
    logOut(dispatch);
  };

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(registerSchema),
  });

  const profileSubmit = (data: ProfileData) => {
    const user = {
      name: data.userName,
      email: data.userEmail,
      password: data.userPassword,
    };
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <LayoutHeader userInfo={userInfo} logOut={logOutHandler}>
      <ParentTemplate size="s">
        <ChildTemplate position="centerLeft" size="s">
          <FormProvider>
            <UserInfo
              errors={errors}
              register={register}
              handleSubmit={handleSubmit}
              profileSubmit={profileSubmit}
            />
          </FormProvider>
        </ChildTemplate>
        <ChildTemplate position="centerRight" size="s">
          <FormProvider>
            <UserAddress />
          </FormProvider>
        </ChildTemplate>
      </ParentTemplate>
    </LayoutHeader>
  );
}
