import { userInfoDeleted } from '../features/user/userInfoSlice';
import { useAppDispatch } from './hooks';

/** Logout; Delete userInfo state  */
export function logOut() {
  const dispatch = useAppDispatch();

  dispatch(userInfoDeleted());
}
