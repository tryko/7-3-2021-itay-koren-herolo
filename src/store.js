import { configureStore } from "@reduxjs/toolkit";
import boughtItemsReducer from "./features/BoughtRecived/boughtRecivedSlice";

const store = configureStore({ reducer: boughtItemsReducer });

export default store;
