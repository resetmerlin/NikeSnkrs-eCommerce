import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../types/dto';

const initialState = {};

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: initialState as IUser,
  reducers: {
    userInfoAdded(state, action) {
      if (state) {
        return Object.assign({}, state, action.payload);
      }
    },
    userInfoDeleted: (state) => {
      return delete state.userInfo;
    },
  },
});

export const { userInfoAdded, userInfoDeleted } = userInfoSlice.actions;
export const selectUser = (state) => state.userInfo;

export default userInfoSlice.reducer;
