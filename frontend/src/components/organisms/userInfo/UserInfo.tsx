import { UseFormReturn } from 'react-hook-form';
import { ProfileData } from '../../../pages/profile/ProfilePage';
import {
  AtomicButton,
  AtomicInput,
  AtomicLabel,
  AtomicTitle,
} from '../../atoms';
import './UserInfo.scss';

type IProps = {
  profileSubmit: (data: ProfileData) => void;
  errorMessage: string;
  register: UseFormReturn<ProfileData>['register'];
  handleSubmit: UseFormReturn<ProfileData>['handleSubmit'];
  errors: UseFormReturn<ProfileData>['formState']['errors'];
};

export default function UserInfo({
  register,
  handleSubmit,
  profileSubmit,
  errors,
  data,
  error,
}: IProps) {
  return (
    <form className="userInfo" onSubmit={handleSubmit(profileSubmit)}>
      <div>
        <AtomicTitle size="xs">User Info:</AtomicTitle>
        {data && <p className="userInfo__success">Updated Successfully!</p>}
        {error && <p>{error?.data?.message}</p>}
      </div>
      <AtomicLabel htmlFor="userEmail">Enter Email</AtomicLabel>
      <AtomicInput type="email" name="userEmail" register={register} />

      {errors?.['userEmail'] && <p>{errors?.['userEmail'].message}</p>}

      <AtomicLabel htmlFor="userName">Enter name</AtomicLabel>

      <AtomicInput type="name" name="userName" register={register} />

      {errors?.['userName'] && <p>{errors?.['userName'].message}</p>}

      <AtomicLabel htmlFor="userPassword">Enter password</AtomicLabel>
      <AtomicInput type="password" name="userPassword" register={register} />

      {errors?.['userPassword'] && <p>{errors?.['userPassword'].message}</p>}

      <AtomicLabel htmlFor="userConfirmPassword">Confirm password</AtomicLabel>
      <AtomicInput
        type="password"
        name="userConfirmPassword"
        register={register}
      />
      {errors?.['userConfirmPassword'] && (
        <p>{errors?.['userConfirmPassword'].message}</p>
      )}
      <AtomicButton type="submit" size="m" shape="normal">
        Update
      </AtomicButton>
    </form>
  );
}
