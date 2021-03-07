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
      return data;
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
    changeCurrency: (state, action) => {
      state.selectedCurrency = action.payload;
    },
  },
  extraReducers: {
    [fetchCurrencyRate.pending]: (state, action) => {
      state.fetchRateStatus = "loading";
      state.error = "";
    },
    [fetchCurrencyRate.fulfilled]: (state, action) => {
      state.fetchRateStatus = "success";
      state.currencies = action.payload;
      state.error = "";
    },
    [fetchCurrencyRate.rejected]: (state, action) => {
      state.fetchRateStatus = "failed";
      state.error = action.error.message;
    },
  },
});

export const {
  changeItemToRecived,
  changeCurrency,
} = boughtRecivedSlice.actions;

export const selectBought = (state) =>
  state.items.filter((item) => !item.isRecived);

export const selectRecived = (state) =>
  state.items.filter((item) => item.isRecived);

export const selectCurrencyRate = (state) => {
  const { currencies, selectedCurrency } = state;
  if (currencies.base === selectedCurrency) return 1;
  return currencies.rates[selectedCurrency];
};

export default boughtRecivedSlice.reducer;
