'use client';
import { createSlice} from '@reduxjs/toolkit';
// import {HYDRATE} from 'next-redux-wrapper';
import {AppStoreState} from '@/store/store';

// interface SideNavState {
//   active: string;
// }

const initialState = {
  active: 'users'
};

export const testSlice = createSlice({
  name: 'sideNav',
  initialState,
  reducers: {
    setActive: (state, action) => {
      state.active = action.payload;
    }
  }
})

export const {setActive} = testSlice.actions;

export const selectSideNav = (state: AppStoreState) => state.sideNav;

export default testSlice.reducer;