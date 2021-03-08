import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState } from "../../Data";

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
      return Promise.reject(new Error(data.error))
    } catch (error) {
      // reject if no reply at all (no internet)
      return Promise.reject(error)
    }
  }
);

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
    [fetchCurrencyRate.rejected]: (state, error) => {
      state.fetchRateStatus = "failed";
      state.error = error.error.message;
      state.items = [];
      state.currencies.rates = { [state.selectedCurrency]: 1 };
    },
  },
});

export const {
  changeItemToRecivedAction,
  changeCurrencyAction,
  AddNewItemAction,
} = boughtRecivedSlice.actions;

export const selectBought = (state) =>
  state.items.filter((item) => !item.isRecived);

export const selectRecived = (state) =>
  state.items.filter((item) => item.isRecived);

export const selectCurrencyRate = (state) => {
  const { currencies, selectedCurrency } = state;
  if (currencies.base === selectedCurrency) return 1;
  console.log(state);
  return currencies.rates[selectedCurrency];
};

export const selectByStore = (state) => {
  const stores = state.items.map((item) => item.onlineStore);
  const uniqStores = Array.from(new Set(stores));
  const storeItems = uniqStores.map((store) => {
    return {
      id: nanoid(),
      name: store,
      items: state.items.filter((item) => item.onlineStore === store),
    };
  });
  console.log(storeItems);
  return storeItems;
};

export const selectError = (state) => state.error;

export default boughtRecivedSlice.reducer;
