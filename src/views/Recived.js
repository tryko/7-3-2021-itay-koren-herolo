import React from "react";
import { useSelector } from "react-redux";
import {Box,Flex} from '@chakra-ui/react';

import {
  selectRecived,
  selectCurrencyRate,
} from "./../features/BoughtRecived/boughtRecivedSlice";

import Items from "../features/BoughtRecived/Items";

const Recived = () => {
  const currencyRate = useSelector(selectCurrencyRate);
  const items = useSelector(selectRecived);

  return (
    <Flex justifyContent="center">
      {!items.length &&<Box fontWeight="600" > You haven't recived any items yet!</Box>}
      <Items items={items} currencyRate={currencyRate} />
    </Flex>
  );
};

export default Recived;
