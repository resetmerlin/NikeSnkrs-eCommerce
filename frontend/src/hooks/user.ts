import { userInfoDeleted } from '../features/user/userInfoSlice';
import { AppDispatch } from '../store';

/** Logout; Delete userInfo state  */
export function logOut(dispatch: AppDispatch) {
  dispatch(userInfoDeleted());
}
