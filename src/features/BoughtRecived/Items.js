import React from "react";
import Card from "./../../components/Card";
import { sortByDate } from "../../util";

const Items = ({ items, selectItem, currencyRate = 1 }) => {
  // items gets different selector acording to view
  const getDate = (epochTime) => {
    const newDate = new Date(epochTime);
    return newDate.toLocaleDateString();
  };

  return (
    <>
      {items.sort(sortByDate).map((item) => (
        <Card
          key={item.id}
          name={item.name}
          deliveryDate={getDate(item.deliveryDate)}
          price={(item.price * currencyRate).toFixed(2)}
          isRecived={item.isRecived}
          handleClick={() => selectItem(item.id)}
          onlineStore={item.onlineStore}
        />
      ))}
    </>
  );
};

export default Items;
