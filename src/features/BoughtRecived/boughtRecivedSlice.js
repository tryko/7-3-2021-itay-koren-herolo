import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState } from "../../Data";

export const fetchCurrencyRate = createAsyncThunk(
  "boughtRecivedItems/fetchCurrencyRate",
  async () => {
    try {
      const resp = await fetch(
        "https://api.exchangeratesapi.io/latest?base=USssD"
      );
      const data = await resp.json();
      if (resp.status > 199 && resp.status < 300) {
        return data;
      }
      throw data
    } catch (error) {
      console.log("catch error: ", error);
      return error;
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
      console.log("success");
      state.fetchRateStatus = "success";
      state.currencies = action.payload;
      state.error = "";
    },
    [fetchCurrencyRate.rejected]: (state, action) => {
      console.log("failed");
      state.fetchRateStatus = "failed";
      state.error = action.error.message;
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
