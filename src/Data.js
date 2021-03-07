import { v4 as uuidv4 } from "uuid";
export const initialState = {
  fetchRateStatus: "idle",
  rateUSD: 0,
  error: "",
  items: [
    {
      id: uuidv4(),
      name: "AA",
      onlineStore: "amazon",
      price: {
        currency: "USD",
        cost: 20.2,
      },
      deliveryDate: new Date("August 19, 1975").valueOf(),
      isRecived: false,
    },
    {
      id: uuidv4(),
      name: "BB",
      onlineStore: "ali-baba",
      price: {
        currency: "SH",
        cost: 11.2,
      },
      deliveryDate: new Date("July 1, 2020").valueOf(),
      isRecived: false,
    },
    {
      id: uuidv4(),
      name: "BB",
      onlineStore: "ali-baba",
      price: {
        currency: "SH",
        cost: 11.2,
      },
      deliveryDate: new Date("July 1, 2020").valueOf(),
      isRecived: false,
    },
    {
      id: uuidv4(),
      name: "BB",
      onlineStore: "ali-baba",
      price: {
        currency: "SH",
        cost: 11.2,
      },
      deliveryDate: new Date("July 1, 2020").valueOf(),
      isRecived: false,
    },
    {
      id: uuidv4(),
      name: "BB",
      onlineStore: "ali-baba",
      price: {
        currency: "SH",
        cost: 11.2,
      },
      deliveryDate: new Date("July 1, 2020").valueOf(),
      isRecived: false,
    },
    {
      id: uuidv4(),
      name: "BB",
      onlineStore: "ali-baba",
      price: {
        currency: "SH",
        cost: 11.2,
      },
      deliveryDate: new Date("July 1, 2020").valueOf(),
      isRecived: false,
    },
    {
      id: uuidv4(),
      name: "BB",
      onlineStore: "ali-baba",
      price: {
        currency: "SH",
        cost: 11.2,
      },
      deliveryDate: new Date("July 1, 2020").valueOf(),
      isRecived: false,
    },
    {
      id: uuidv4(),
      name: "BB",
      onlineStore: "ali-baba",
      price: {
        currency: "SH",
        cost: 11.2,
      },
      deliveryDate: new Date("July 1, 2020").valueOf(),
      isRecived: false,
    },
  ],
};
