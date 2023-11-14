import {
  ChildTemplate,
  HeaderLayout,
  ParentTemplate,
  UserAddress,
  UserInfo,
} from '../../components';
import { useProfilePage } from './ProfilePage.hook';

export default function ProfilePage() {
  const [
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
  ] = useProfilePage();

  return (
    <HeaderLayout userInfo={userInfo} logOut={logOutHandler}>
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
    </HeaderLayout>
  );
}
