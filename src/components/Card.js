import { Flex, Button } from "@chakra-ui/react";

const Card = ({
  name,
  price,
  onlineStore,
  deliveryDate,
  isRecived,
  handleClick,
}) => {
  return (
    <Flex
      p="5px"
      m="5px"
      borderRadius="3px"
      w="100px"
      h="150px"
      border="1px solid lightgray"
      alignItems="left"
      direction="column"
    >
      <div> {name}</div>
      <div>{deliveryDate}</div>
      {price} <span></span>
      {onlineStore}
      {!isRecived && (
        <Button
          onClick={handleClick}
          fontSize="14px"
          h="25px"
          mt="10px"
          background="telegram.100"
          _hover={{ background: "telegram.400" }}
        >
          Recived
        </Button>
      )}
    </Flex>
  );
};

export default Card;
