import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState } from "../../Data";

export const fetchCurrencyRate = createAsyncThunk(
  "boughtRecivedItems/fetchCurrencyRate",
  async () => {
    try {
      const resp = await fetch(
        "https://api.exchangeratesapi.io/latest?base=USD",
      );
      const data = await resp.json();
      console.log("try data: ", data);
      return data.rates;
    } catch (error) {
      console.log("catch error: ", error);
      return error;
    }
  },
);

export const boughtRecivedSlice = createSlice({
  name: "boughtRecivedItems",
  initialState: initialState,
  reducers: {
    changeItemToRecived: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.map((item) => {
        if (item.id === itemId) {
          item.isRecived = true;
        }
        return item;
      });
    },
  },
  extraReducers: {
    [fetchCurrencyRate.pending]: (state, action) => {
      state.fetchRateStatus = "loading";
      state.error = "";
    },
    [fetchCurrencyRate.fulfilled]: (state, action) => {
      state.fetchRateStatus = "success";
      state.rateUSD = action.payload.ILS;
      state.error = "";
    },
    [fetchCurrencyRate.rejected]: (state, action) => {
      state.fetchRateStatus = "failed";
      state.error = action.error.message;
    },
  },
});

export const { changeItemToRecived } = boughtRecivedSlice.actions;

export const selectBought = (state) =>
  state.items.filter((item) => !item.isRecived);

export const selectRecived = (state) =>
  state.items.filter((item) => item.isRecived);

export default boughtRecivedSlice.reducer;
