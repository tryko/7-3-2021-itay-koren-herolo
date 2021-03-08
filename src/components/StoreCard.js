import React from "react";
import { Flex } from "@chakra-ui/react";

const StoreCard = ({ store }) => {
  return (
    <div>
      <Flex
        p="5px"
        m="5px"
        borderRadius="3px"
        w="100px"
        h="fit-content"
        border="1px solid lightgray"
        alignItems="left"
        direction="column"
      >
        <div>{store.name}</div>
        <div>
          {store.items.map((item) => (
            <div key={item.id}>
              {item.name} <span> </span> {item.price}
            </div>
          ))}
        </div>
        <div>Sum: {store.items.reduce((a, b) => a + b.price, 0)}</div>
      </Flex>
    </div>
  );
};

export default StoreCard;
