// node modules
import { useState } from "react";
import Items from "../features/BoughtRecived/Items";
import { useSelector, useDispatch } from "react-redux";
import { Button, Flex, useDisclosure } from "@chakra-ui/react";

// store
import {
  AddNewItemAction,
  changeItemToRecivedAction,
  selectBought,
  selectCurrencyRate,
  selectByStore,
  selectStores
} from "./../features/BoughtRecived/boughtRecivedSlice";

// components
import AddItem from "./../features/BoughtRecived/AddItem";
import BasicModal from "./../components/BasicModal";
import SidePanel from "./../components/SidePanel";
import StoreCard from "./../components/StoreCard";

const List = () => {
  const currencyRate = useSelector(selectCurrencyRate);
  const items = useSelector(selectBought);
  const uniqStores = useSelector(selectByStore);
  const stores = useSelector(selectStores);
  const dispatch = useDispatch();
  const [isShowAllItems, setIsShowAllItems] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <SidePanel
        isOpen={true}
        changeTab={setIsShowAllItems}
        isShowAllItems={isShowAllItems}
      />
      {isShowAllItems && (
        <Flex wrap="wrap" ml="200px">
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
              onClose();
            }}
          >
            <AddItem
              onSubmit={(newItem) => {
                dispatch(AddNewItemAction(newItem));
                onClose();
              }}
              selectItems={stores}
            />
          </BasicModal>
        </Flex>
      )}
      {!isShowAllItems && (
        <Flex ml="200px">
          {uniqStores.map((store) => {
            return <StoreCard key={store.id} store={store} />;
          })}
        </Flex>
      )}
    </div>
  );
};

export default List;
