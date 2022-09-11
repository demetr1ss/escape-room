import { createSlice } from '@reduxjs/toolkit';
import { LoadingStatus, NameSpace } from 'const/const';
import { fetchQuestsAction } from 'store/api-actions';
import { QuestType } from 'types/types';

export type QuestsDataType = {
  quests: QuestType[];
  questsLoadingStatus: LoadingStatus;
};

const initialState: QuestsDataType = {
  quests: [],
  questsLoadingStatus: LoadingStatus.Idle,
};

export const questsData = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.pending, (state) => {
        state.questsLoadingStatus = LoadingStatus.Pending;
      })
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.quests = action.payload;
        state.questsLoadingStatus = LoadingStatus.Fulfilled;
      })
      .addCase(fetchQuestsAction.rejected, (state) => {
        state.quests = [];
        state.questsLoadingStatus = LoadingStatus.Rejected;
      });
  }});
