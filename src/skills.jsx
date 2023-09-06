import { Flex } from "@chakra-ui/layout";

import React from "react";
import { Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import reactLogo from "../src/assets/reactLogo.png";
import cssLogo from "../src/assets/cssLogo.png";
import htmlLogo from "../src/assets/htmlLogo.png";
import jsLogo from "../src/assets/jsLogo.png";
import tailwindLogo from "../src/assets/tailwindLogo.svg";
import bootstrapLogo from "../src/assets/Bootstrap_logo.png";

export default function Skills() {
  return (
    <>
      <Fade top>
        <Flex
          w="100%"
          mt={5}
          direction={["column", "column"]}
          justifyContent={["center", "center"]}
          alignItems={["center", "center"]}
          gap={6}
          id="skills"
        >
          <Text fontSize={["xl", "4xl"]} fontWeight="bold">
            Skills
          </Text>
          <Wrap w={["75%", "100%"]} >
            <WrapItem
              _hover={{
                transform: "scale(1.2)",
                opacity: 1,
              }}
              transition="transform 0.3s"
              opacity={0.5}
            >
              <Image src={reactLogo} />{" "}
            </WrapItem>
            <WrapItem
              _hover={{
                transform: "scale(1.2)",
                opacity: 1,
              }}
              transition="transform 0.3s"
              opacity={0.5}
            >
              <Image src={cssLogo} />{" "}
            </WrapItem>
            <WrapItem
              _hover={{
                transform: "scale(1.2)",
                opacity: 1,
              }}
              transition="transform 0.3s"
              opacity={0.5}
            >
              {" "}
              <Image src={htmlLogo} />{" "}
            </WrapItem>
            <WrapItem
              _hover={{
                transform: "scale(1.2)",
                opacity: 1,
              }}
              transition="transform 0.3s"
              opacity={0.5}
            >
              {" "}
              <Image src={jsLogo} />{" "}
            </WrapItem>
            <WrapItem
              _hover={{
                transform: "scale(1.2)",
                opacity: 1,
              }}
              transition="transform 0.3s"
              opacity={0.5}
            >
              <Image src={tailwindLogo} boxSize="48px" />{" "}
            </WrapItem>
            <WrapItem
              _hover={{
                transform: "scale(1.2)",
                opacity: 1,
              }}
              transition="transform 0.3s"
              opacity={0.5}
            >
              {" "}
              <Image boxSize="48px" src={bootstrapLogo} />{" "}
            </WrapItem>
          </Wrap>
        </Flex>
      </Fade>
    </>
  );
}
