import { useState } from "react";
import Items from "../features/BoughtRecived/Items";
import { selectBought } from "./../features/BoughtRecived/boughtRecivedSlice";
import { Flex } from "@chakra-ui/react";

const List = () => {
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
      {isListTab && (
        <Flex wrap="wrap">
          <Items selectItems={selectBought} />
        </Flex>
      )}
      {!isListTab && <div>Store tab</div>}
    </div>
  );
};

export default List;
