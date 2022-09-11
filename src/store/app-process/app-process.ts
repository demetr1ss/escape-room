import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_FILTER, NameSpace } from 'const/const';

export type AppProcessType = {
  activeGenre: string;
}

const initialState: AppProcessType = {
  activeGenre: DEFAULT_FILTER
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.activeGenre = action.payload;
    }}
});

export const {changeGenre} = appProcess.actions;
