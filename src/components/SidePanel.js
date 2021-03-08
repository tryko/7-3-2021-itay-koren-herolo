import { Button, Flex, Slide } from "@chakra-ui/react";

const SidePanel = ({ changeTab, isOpen, isShowAllItems }) => {
  return (
    <>
      <Slide direction="left" in={isOpen} style={{ width: "", top: "45px" }}>
        <Flex
          direction="column"
          w="200px"
          h="100vh"
          borderRight="1px solid gray"
          background="lightgray"
        >
          <Button
            onClick={() => changeTab(true)}
            borderRadius="0"
            mb="10px"
            mt="30px"
            isActive={isShowAllItems}
            _active={{ background: "facebook.300" }}
          >
            All Items{" "}
          </Button>

          <Button
            onClick={() => changeTab(false)}
            borderRadius="0"
            _active={{ background: "facebook.300" }}
            isActive={!isShowAllItems}
          >
            Items by Store{" "}
          </Button>
        </Flex>
      </Slide>
    </>
  );
};

export default SidePanel;
