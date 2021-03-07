import { useState } from "react";
import Items from "../features/BoughtRecived/Items";
import { useSelector, useDispatch } from "react-redux";

import {
  selectBought,
  selectCurrencyRate,
  changeItemToRecived,
} from "./../features/BoughtRecived/boughtRecivedSlice";
import { Flex } from "@chakra-ui/react";

const List = () => {
  const currencyRate = useSelector(selectCurrencyRate);
  const items = useSelector(selectBought);
  const dispatch = useDispatch();
  const [isListTab, setIsListTab] = useState(true);

  const handleChangeTab = (isShowListTab) => {
    setIsListTab(isShowListTab);
  };

  return (
    <div>
      this is list
      <div>
        <button onClick={() => handleChangeTab(true)}>List </button>
        <button onClick={() => handleChangeTab(false)}>Store </button>
      </div>
      {currencyRate}
      {isListTab && (
        <Flex wrap="wrap">
          <Items
            items={items}
            selectItem={(id) => dispatch(changeItemToRecived(id))}
            currencyRate={currencyRate}
          />
        </Flex>
      )}
      {!isListTab && <div>Store tab</div>}
    </div>
  );
};

export default List;
