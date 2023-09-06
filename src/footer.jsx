import { Flex } from "@chakra-ui/layout";
import React from "react";
import { Box } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Flex w="100%" justifyContent={"center"} mt={5}>
        <Box>© 2023 | Muhammad Aqshal Prawira</Box>
      </Flex>
    </>
  );
}
