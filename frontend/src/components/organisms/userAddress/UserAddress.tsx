import {
  AtomicButton,
  AtomicInput,
  AtomicLabel,
  AtomicTitle,
} from '../../atoms';
import './UserAddress.scss';

export default function UserAddress({
  addressHandler,
  register,
  handleSubmit,
  addressSubmit,
  addressInfo,
}) {
  return (
    <form className="userAddress" onSubmit={handleSubmit(addressSubmit)}>
      <div>
        <AtomicTitle size="xs">User address:</AtomicTitle>
        <AtomicButton
          type="button"
          size="m"
          shape="normal"
          color="secondary"
          onClick={addressHandler}
        >
          Get Location
        </AtomicButton>
      </div>

      <AtomicLabel htmlFor="address">Address</AtomicLabel>
      <AtomicInput
        type="name"
        name="address"
        register={register}
        placeholder={addressInfo?.address}
      />

      <AtomicButton type="submit" size="m" shape="normal">
        Update Address
      </AtomicButton>
    </form>
  );
}
