import LayoutHeader from '../../components/layouts/layoutHeader/LayoutHeader';
import { ChildTemplate, ParentTemplate } from '../../components/atoms';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectUser } from '../../features/user/userInfoSlice';
import { localUserToState, logOut } from '../../hooks';
import { UserAddress, UserInfo } from '../../components/organisms';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../components/schema';
import { useUserChangedMutation } from '../../features/api/apiSlice';

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

  const [userChange, { error, data }] = useUserChangedMutation();

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(registerSchema),
  });

  const profileSubmit = (data: ProfileData) => {
    if (userInfo[0]._id) {
      const user = {
        _id: userInfo[0]._id,
        name: data.userName,
        email: data.userEmail,
        password: data.userPassword,
        token: userInfo[0].token,
      };
      userChange(user);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  localUserToState(userInfo, dispatch);

  return (
    <LayoutHeader userInfo={userInfo} logOut={logOutHandler}>
      <ParentTemplate size="s">
        <ChildTemplate position="centerLeft" size="s">
          <FormProvider>
            <UserInfo
              data={data}
              error={error}
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
