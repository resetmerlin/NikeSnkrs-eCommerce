import LayoutHeader from '../../components/layouts/layoutHeader/LayoutHeader';
import { ChildTemplate, ParentTemplate } from '../../components/atoms';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectUser } from '../../features/user/userInfoSlice';
import { goToLogin, localUserToState, logOut } from '../../hooks';
import { UserAddress, UserInfo } from '../../components/organisms';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../components/schema';
import {
  useGetUserMutation,
  useUserChangedMutation,
} from '../../features/api/apiSlice';
import { useEffect } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { addressAdded } from '../../features/address/addressSlice';
import { useNavigate } from 'react-router-dom';

export type ProfileData = {
  userEmail: string;
  userPassword: string;
  userName: string;
  userConfirmPassword: string;
};
export default function ProfilePage() {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selectUser);
  const addressInfo = useAppSelector((state) => state.addresss);
  const navigate = useNavigate();

  const logOutHandler = () => {
    logOut(dispatch);
  };

  goToLogin(userInfo, navigate);

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

  const {
    register: addressRegister,
    handleSubmit: handleSubmit2,
    setValue,
  } = useForm();

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

  const addressSubmit = (data) => {
    if (data) {
      const address = {
        address: data.address,
      };
      dispatch(addressAdded(address));
    }
  };

  localUserToState(userInfo, dispatch);

  const open = useDaumPostcodePopup();
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }

      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setValue('address', fullAddress);
  };

  const getAddress = () => {
    open({ onComplete: handleComplete });
  };

  const addressHandler = (e) => {
    e.preventDefault();
    getAddress();
  };
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
          <UserAddress
            addressInfo={addressInfo}
            addressHandler={addressHandler}
            register={addressRegister}
            handleSubmit={handleSubmit2}
            addressSubmit={addressSubmit}
          />
        </ChildTemplate>
      </ParentTemplate>
    </LayoutHeader>
  );
}
