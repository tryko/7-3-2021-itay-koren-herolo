import { useState } from "react";
import Items from "../features/BoughtRecived/Items";
import { useSelector, useDispatch } from "react-redux";
import { Flex, Button, useDisclosure } from "@chakra-ui/react";

import {
  AddNewItemAction,
  changeItemToRecivedAction,
  selectBought,
  selectCurrencyRate,
} from "./../features/BoughtRecived/boughtRecivedSlice";
import AddItem from "./../features/BoughtRecived/AddItem";
import BasicModal from "./../components/BasicModal";

const List = () => {
  const currencyRate = useSelector(selectCurrencyRate);
  const items = useSelector(selectBought);
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState({});
  const [isListTab, setIsListTab] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChangeTab = (isShowListTab) => {
    setIsListTab(isShowListTab);
  };

  return (
    <div>
      this is list
      <div>
        <button onClick={() => handleChangeTab(true)}>List </button>
        <span> </span>
        <button onClick={() => handleChangeTab(false)}>Store </button>
      </div>
      {newItem.name}
      {isListTab && (
        <Flex wrap="wrap">
          <Items
            items={items}
            selectItem={(id) => dispatch(changeItemToRecivedAction(id))}
            currencyRate={currencyRate}
          />
          <Button alignSelf="center" onClick={onOpen}>
            Add Item
          </Button>
          <BasicModal
            isOpen={isOpen}
            onClose={() => {
              dispatch(AddNewItemAction(newItem));
              onClose();
            }}
          >
            <AddItem setFormData={setNewItem} />
          </BasicModal>
        </Flex>
      )}
      {!isListTab && <div>Store tab</div>}
    </div>
  );
};

export default List;
