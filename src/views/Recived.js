import React from "react";
import Items from "../features/BoughtRecived/Items";
import { selectRecived } from "./../features/BoughtRecived/boughtRecivedSlice";

const Recived = () => {
  return (
    <div>
      this is recived
      <Items selectItems={selectRecived} />
    </div>
  );
};

export default Recived;
