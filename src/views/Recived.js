import React from "react";
import { useSelector } from "react-redux";
import Items from "../features/BoughtRecived/Items";
import {
  selectRecived,
  selectCurrencyRate,
} from "./../features/BoughtRecived/boughtRecivedSlice";

const Recived = () => {
  const currencyRate = useSelector(selectCurrencyRate);
  const items = useSelector(selectRecived);

  return (
    <div>
      this is recived
      <Items items={items} currencyRate={currencyRate} />
    </div>
  );
};

export default Recived;
