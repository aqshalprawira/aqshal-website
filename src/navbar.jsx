import { Flex, Spacer } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { FaSun, FaMoon, FaHome } from "react-icons/fa";
import React from "react";
import { Button } from "@chakra-ui/react";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <>
      <Flex
        w="100%"
        position="sticky"
        bgColor={isDark ? "#1a202c" : "white"}
        top={0}
        pt={2}
        pb={2}
        px={2}
        zIndex={1}
      >
        <IconButton
          ml={4}
          icon={<FaHome />}
          isRound="true"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://aqshaldev.my.id";
          }}
          _hover={{
            transform: "scale(1.5)",
            opacity: 1,
            color: isDark ? "cyan" : "darkblue",
          }}
          transition="transform 0.3s"
          opacity={0.5}
          size={["sm", "md"]}
        ></IconButton>

        <Spacer />

        <Button
          _hover={{
            transform: "scale(1.2)",
            opacity: 1,
            color: isDark ? "cyan" : "darkblue",
          }}
          mt={1}
          ml={2}
          opacity={0.5}
          size={["xs", "sm"]}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "#aboutme";
          }}
        >
          About Me
        </Button>

        <Button
          _hover={{
            transform: "scale(1.2)",
            opacity: 1,
            color: isDark ? "cyan" : "darkblue",
          }}
          mt={1}
          ml={2}
          opacity={0.5}
          size={["xs", "sm"]}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "#myprojects";
          }}
        >
          My Projects
        </Button>

        <Button
          _hover={{
            transform: "scale(1.2)",
            opacity: 1,
            color: isDark ? "cyan" : "darkblue",
          }}
          mt={1}
          ml={2}
          opacity={0.5}
          size={["xs", "sm"]}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "#skills";
          }}
        >
          Skills
        </Button>
        <Spacer />
        <IconButton
          ml={4}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
          _hover={{
            transform: "scale(1.5)",
            opacity: 1,
            color: isDark ? "tomato" : "darkblue",
          }}
          transition="transform 0.3s"
          opacity={0.5}
          size={["sm", "md"]}
        ></IconButton>
      </Flex>
    </>
  );
}
