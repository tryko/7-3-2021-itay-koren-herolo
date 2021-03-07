import { Flex } from "@chakra-ui/react";

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
      <br />
      {price} <span></span>
      {!isRecived && <button onClick={handleClick}>Recived</button>}
      <br />
      {onlineStore}
      <br />
    </Flex>
  );
};

export default Card;
