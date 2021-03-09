import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../Data";
import {extraReducers} from './boughtRecivedMiddleWear'

export const boughtRecivedSlice = createSlice({
  name: "boughtRecivedItems",
  initialState: initialState,
  reducers: {
    changeItemToRecivedAction: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.map((item) => {
        if (item.id === itemId) {
          item.isRecived = true;
        }
        return item;
      });
    },
    changeCurrencyAction: (state, action) => {
      state.selectedCurrency = action.payload;
    },
    AddNewItemAction: (state, action) => {
      const newItem = {
        ...action.payload,
        deliveryDate: new Date(action.payload.deliveryDate).valueOf(),
      };
      state.items = [...state.items, newItem];
    },
  },
  extraReducers: extraReducers,
});

export const {
  changeItemToRecivedAction,
  changeCurrencyAction,
  AddNewItemAction,
} = boughtRecivedSlice.actions;

export default boughtRecivedSlice.reducer;
