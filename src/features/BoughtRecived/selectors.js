import { v4 as uuidv4 } from "uuid";

export const selectBought = (state) =>
  state.items.filter((item) => !item.isRecived);

export const selectRecived = (state) =>
  state.items.filter((item) => item.isRecived);

export const selectCurrencyRate = (state) => {
  const { currencies, selectedCurrency } = state;
  if (currencies.base === selectedCurrency) return 1;
  return currencies.rates[selectedCurrency];
};

export const selectByStore = (state) => {
    // have data of stores in initialData but was requested to aggregate from stores
    // from items
    const stores = state.items.map((item) => item.onlineStore);
    const uniqStores = Array.from(new Set(stores));
    const storeItems = uniqStores.map((store) => {
      return {
        id: uuidv4(),
        name: store,
        items: state.items.filter((item) => item.onlineStore === store),
      };
    });
    return storeItems;
  };

export const selectError = (state) => state.error;
export const selectStores = (state) => state.stores;
