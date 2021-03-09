import React from "react";
import { useHistory  } from "react-router-dom";
import { Button, Flex } from "@chakra-ui/react";
import SwitchBtn from './SwitchBtn'

const NavBar = ({toggle}) => {
  const history = useHistory()
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
        <Button fontSize="14px" h="20px" mr="10px" onClick={() => history.push("/list")}>
          List
        </Button>
        <Button fontSize="14px" h="20px" onClick={() => history.push("/recived")}>
          Recived
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
