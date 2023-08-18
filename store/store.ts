'use client';
import { configureStore } from "@reduxjs/toolkit";
import { testSlice } from "./slices/testSlice";
import { useDispatch, useSelector  } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

export const store = configureStore({
  reducer: {
    [testSlice.name]: testSlice.reducer
  }
});

export type AppStoreState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppStoreState> = useSelector
