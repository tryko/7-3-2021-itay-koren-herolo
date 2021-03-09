import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCurrencyRate = createAsyncThunk(
  "boughtRecivedItems/fetchCurrencyRate",
  async () => {
    try {
      const resp = await fetch(
        "https://api.exchangeratesapi.io/latest?base=USD"
      );
      const data = await resp.json();
      if (resp.status > 199 && resp.status < 300) {
        return data;
      }
      // reject if a reply from the api of a bad request
      return Promise.reject(new Error(data.error));
    } catch (error) {
      // reject if no reply at all (no internet)
      return Promise.reject(error);
    }
  }
);

export const extraReducers = {
  [fetchCurrencyRate.pending]: (state, action) => {
    state.fetchRateStatus = "loading";
    state.error = "";
  },
  [fetchCurrencyRate.fulfilled]: (state, action) => {
    state.fetchRateStatus = "success";
    state.currencies = action.payload;
    state.error = "";
  },
  [fetchCurrencyRate.rejected]: (state, error) => {
    state.fetchRateStatus = "failed";
    state.error = error.error.message;
    state.items = [];
    state.currencies.rates = { [state.selectedCurrency]: 1 };
  },
};
