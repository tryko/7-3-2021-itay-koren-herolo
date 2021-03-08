import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Button, Flex } from "@chakra-ui/react";
import SwitchBtn from './SwitchBtn'

const NavBar = ({toggle}) => {
  return (
    <Flex
      justify="space-between"
      p="10px"
      position="fixed"
      w="100vw"
      background="teal.400"
      top="0"
    >
      <div>
        <Button fontSize="14px" h="20px" mr="10px">
          <Link to="/list">List</Link>
        </Button>
        <Button fontSize="14px" h="20px">
          <Link to="/recived">Recived</Link>
        </Button>
      </div>
      <SwitchBtn
        defaultValue="USD"
        switchValue="ILS"
        leftTxt="USD"
        rightTxt="ILS"
        toggle={toggle}
      />
    </Flex>
  );
};

export default NavBar;
