import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

const NavBar = ({ children }) => {
  return (
    <Flex justify="space-between" p="10px">
      {children}
    </Flex>
  );
};

export default NavBar;
