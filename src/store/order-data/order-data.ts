import { createSlice } from '@reduxjs/toolkit';
import { LoadingStatus, NameSpace } from 'const/const';
import { sendOrderPostAction } from 'store/api-actions';

export type OrderPostDataType = {
  orderPostSendingStatus: LoadingStatus;
};

const initialState: OrderPostDataType = {
  orderPostSendingStatus: LoadingStatus.Idle,
};

export const orderData = createSlice({
  name: NameSpace.Orders,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(sendOrderPostAction.pending, (state) => {
        state.orderPostSendingStatus = LoadingStatus.Pending;
      })
      .addCase(sendOrderPostAction.fulfilled, (state, action) => {
        state.orderPostSendingStatus = LoadingStatus.Fulfilled;
      })
      .addCase(sendOrderPostAction.rejected, (state) => {
        state.orderPostSendingStatus = LoadingStatus.Rejected;
      });
  }});
