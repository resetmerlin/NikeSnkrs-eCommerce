import { useNavigate } from 'react-router-dom';
import {
  addressAdded,
  selectAddress,
  selectUser,
  useGetUserMutation,
  useUserChangedMutation,
} from '../../features';
import { goToLogin, logOut, useAppDispatch, useAppSelector } from '../../hooks';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../components';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { useEffect } from 'react';
import { IUser } from '../../types';

export type ProfileData = {
  userEmail: string;
  userPassword: string;
  userName: string;
  userConfirmPassword: string;
};
export type AddressData = {
  address: string;
};

export const useProfilePage = () => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selectUser);
  const addressInfo = useAppSelector(selectAddress);

  const navigate = useNavigate();

  const logOutHandler = () => {
    logOut(dispatch);
  };

  // Check user login else go login page
  goToLogin(userInfo, navigate);

  const [getUserData] = useGetUser(userInfo);

  // Change profile via api
  const [userChange, { error: profileError, data: profileSuccess }] =
    useUserChangedMutation();

  // Get user profile via api

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

  return [
    userInfo,
    logOutHandler,
    profileSubmit,
    profileError,
    getUserData,
    inputErrors,
    register,
    handleSubmit,
    profileSuccess,
    addressInfo,
    addressHandler,
    addressRegister,
    handleSubmit2,
    addressSubmit,
  ];
};

const useGetUser = (userInfo: IUser): [userInfo: IUser | undefined] => {
  const [getUser, { data: getUserData }] = useGetUserMutation();

  // Fetch user profile
  useEffect(() => {
    if (userInfo?._id) {
      const user = {
        token: userInfo.token,
      };
      getUser(user);
    }
  }, [userInfo]);

  return [getUserData];
};
