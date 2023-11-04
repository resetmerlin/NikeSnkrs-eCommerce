import LayoutHeader from '../../components/layouts/layoutHeader/LayoutHeader';
import { ChildTemplate, ParentTemplate } from '../../components/atoms';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectUser } from '../../features/user/userInfoSlice';
import { localUserToState, logOut } from '../../hooks';
import { UserAddress, UserInfo } from '../../components/organisms';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../components/schema';
import {
  useGetUserMutation,
  useUserChangedMutation,
} from '../../features/api/apiSlice';
import { useEffect } from 'react';

export type ProfileData = {
  userEmail: string;
  userPassword: string;
  userName: string;
  userConfirmPassword: string;
};
export default function ProfilePage() {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selectUser);

  const logOutHandler = () => {
    logOut(dispatch);
  };

  const [userChange, { error, data }] = useUserChangedMutation();
  const [getUser, { data: getUserData }] = useGetUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(registerSchema),
  });

  const profileSubmit = (data: ProfileData) => {
    if (userInfo._id) {
      const user = {
        _id: userInfo._id,
        name: data.userName,
        email: data.userEmail,
        password: data.userPassword,
        token: userInfo.token,
      };
      userChange(user);
    }
  };

  localUserToState(userInfo, dispatch);

  useEffect(() => {
    if (userInfo?._id) {
      const user = {
        token: userInfo.token,
      };
      getUser(user);
    }
  }, [userInfo]);

  return (
    <LayoutHeader userInfo={userInfo} logOut={logOutHandler}>
      <ParentTemplate size="s">
        <ChildTemplate position="centerLeft" size="s">
          <UserInfo
            data={data}
            error={error}
            userInfo={getUserData}
            errors={errors}
            register={register}
            handleSubmit={handleSubmit}
            profileSubmit={profileSubmit}
          />
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
