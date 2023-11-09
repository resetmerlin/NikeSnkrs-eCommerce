import { Link } from 'react-router-dom';
import { AtomicButton, SvgUserCircle } from '../../../atoms';
import './UserButton.scss';

type IProps = {
  logOut: () => void;
};

/**
 * Responsible for rendering a user button
 *
 * - Responsible for the styling of the user button
 * - Responsible for creating functionalities by using atoms
 * - Responsible for creating functionalities via pure functions props
 */
export default function UserButton({ logOut }: IProps) {
  return (
    <>
      <input type="checkbox" name="userCheck" id="userCheck" />
      <label htmlFor="userCheck" className="userCheck">
        <SvgUserCircle size="3rem" color="white" />
      </label>
      <div className="userCheck-popup">
        <Link to="/profile">
          <AtomicButton shape="rect" size="xs" color="secondary">
            Profile
          </AtomicButton>
        </Link>

        <AtomicButton shape="rect" size="xs" color="secondary" onClick={logOut}>
          Log Out
        </AtomicButton>
      </div>
    </>
  );
}
