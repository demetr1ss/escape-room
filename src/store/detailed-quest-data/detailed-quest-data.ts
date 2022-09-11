import { createSlice } from '@reduxjs/toolkit';
import { LoadingStatus, NameSpace } from 'const/const';
import { fetchDetailedQuestAction } from 'store/api-actions';
import { QuestType } from 'types/types';

export type DetailedQuestDataType = {
  quest: QuestType;
  questLoadingStatus: LoadingStatus;
};

const initialState: DetailedQuestDataType = {
  quest: {} as QuestType,
  questLoadingStatus: LoadingStatus.Idle,
};

export const detailedQuestData = createSlice({
  name: NameSpace.DetailedQuest,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDetailedQuestAction.pending, (state) => {
        state.questLoadingStatus = LoadingStatus.Pending;
      })
      .addCase(fetchDetailedQuestAction.fulfilled, (state, action) => {
        state.quest = action.payload;
        state.questLoadingStatus = LoadingStatus.Fulfilled;
      })
      .addCase(fetchDetailedQuestAction.rejected, (state) => {
        state.questLoadingStatus = LoadingStatus.Rejected;
      });
  }});

