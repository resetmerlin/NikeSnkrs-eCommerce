import LayoutHeader from '../../components/layouts/layoutHeader/LayoutHeader';
import { ChildTemplate, ParentTemplate } from '../../components/atoms';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectUser } from '../../features/user/userInfoSlice';
import { goToLogin, logOut } from '../../hooks';
import { UserAddress, UserInfo } from '../../components/organisms';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../components/schema';
import {
  useGetUserMutation,
  useUserChangedMutation,
} from '../../features/api/apiSlice';
import { useEffect } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import {
  addressAdded,
  selectAddress,
} from '../../features/address/addressSlice';
import { useNavigate } from 'react-router-dom';

export type ProfileData = {
  userEmail: string;
  userPassword: string;
  userName: string;
  userConfirmPassword: string;
};
export type AddressData = {
  address: string;
};

export default function ProfilePage() {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selectUser);
  const addressInfo = useAppSelector(selectAddress);

  const navigate = useNavigate();

  const logOutHandler = () => {
    logOut(dispatch);
  };

  // Check user login else go login page
  goToLogin(userInfo, navigate);

  // Change profile via api
  const [userChange, { error: profileError, data: profileSuccess }] =
    useUserChangedMutation();

  // Get user profile via api
  const [getUser, { data: getUserData }] = useGetUserMutation();

  // Submit profile
  const profileSubmit: SubmitHandler<ProfileData> = (data: ProfileData) => {
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

  const {
    register,
    handleSubmit,
    formState: { errors: inputErrors },
  } = useForm<ProfileData>({
    mode: 'onChange',
    resolver: yupResolver(registerSchema),
  });

  // Submit address
  const addressSubmit: SubmitHandler<AddressData> = (data: AddressData) => {
    if (data) {
      const address = {
        address: data.address,
      };
      dispatch(addressAdded(address));
    }
  };

  const {
    register: addressRegister,
    handleSubmit: handleSubmit2,
    setValue,
  } = useForm<AddressData>();

  // Daumn Popup
  const open = useDaumPostcodePopup();

  const addressPopup = (data: {
    address: string;
    bname: string;
    buildingName: string;
    addressType: string;
  }) => {
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

  // Open address popup
  const addressHandler = () => {
    open({ onComplete: addressPopup });
  };

  // Fetch user profile
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
            profileSuccess={profileSuccess}
            profileError={profileError}
            userInfo={getUserData}
            inputErrors={inputErrors}
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
