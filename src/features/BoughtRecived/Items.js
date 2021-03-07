import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeItemToRecived } from "./boughtRecivedSlice";
import Card from "./../../components/Card";
import { sortByDate } from "../../util";

const Items = ({ selectItems }) => {
  // items gets different selector acording to view
  const items = useSelector(selectItems);
  const dispatch = useDispatch();

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
          price={item.price}
          isRecived={item.isRecived}
          handleClick={() => dispatch(changeItemToRecived(item.id))}
          onlineStore={item.onlineStore}
        />
      ))}
    </>
  );
};

export default Items;
