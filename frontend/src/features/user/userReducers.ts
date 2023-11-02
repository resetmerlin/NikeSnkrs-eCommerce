import { createSlice, current } from '@reduxjs/toolkit';
import { IUser } from '../../types/dto';

const initialState: any[] = [];

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: initialState as IUser[],
  reducers: {
    userInfoAdded(state, action) {
      const data = action.payload;
      state.push(data);
      localStorage.setItem('userInfo', JSON.stringify(current(state)));
    },
    userInfoDeleted: () => {
      localStorage.removeItem('userInfo');

      return initialState;
    },
  },
});

export const { userInfoAdded, userInfoDeleted } = userInfoSlice.actions;

export default userInfoSlice.reducer;
