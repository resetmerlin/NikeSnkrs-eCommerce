import { AtomicButton, SvgUserCircle } from '../../../atoms';
import './UserButton.scss';

export default function UserButton({ deleteUserInfo }) {
  return (
    <>
      <input type="checkbox" name="userCheck" id="userCheck" />
      <label htmlFor="userCheck" className="userCheck">
        <SvgUserCircle size="3rem" color="white" />
      </label>
      <div className="userCheck-popup">
        <AtomicButton shape="rect" size="xs" color="secondary">
          Profile
        </AtomicButton>

        <AtomicButton
          shape="rect"
          size="xs"
          color="secondary"
          onClick={deleteUserInfo}
        >
          Log Out
        </AtomicButton>
      </div>
    </>
  );
}
