import { createSlice, current } from '@reduxjs/toolkit';

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: [],
  reducers: {
    userInfoAdded(state, action) {
      const data = action.payload;
      state.push(data);
      localStorage.setItem('userInfo', JSON.stringify(current(state)));
    },
  },
});

export const { userInfoAdded } = userInfoSlice.actions;

export default userInfoSlice.reducer;
