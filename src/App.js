import { VStack, Flex, Heading, Spacer } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { FaSun, FaMoon, FaHome, FaGithub, FaLinkedin } from "react-icons/fa";
import React, { useEffect } from "react";
import { Image, Text, Box } from "@chakra-ui/react";
import LogoHome from "./assets/LogoHome.png";
import Social from "./components/Social";
import Profile from "./components/Profile";
import Header from "./components/Header";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  useEffect(() => {
    document.title = "Aqshal Website";
  }, []);

  return (
    <VStack p={5}>
      <Flex w="100%">
        <IconButton
          ml={4}
          mr={8}
          icon={<FaHome />}
          isRound="true"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://aqshaldev.my.id";
          }}
          _hover={{
            transform: "scale(1.5)",
            opacity: 1,
            color: isDark ? "cyan" : "darkblue"
          }}
          transition="transform 0.3s"
          opacity={0.5}
          
        ></IconButton>

        <IconButton
          ml={4}
          icon={<FaGithub />}
          isRound="true"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://github.com/aqshalprawira";
          }}
          _hover={{
            transform: "scale(1.5)",
            opacity: 1,
            color: isDark ? "white" : "black"
          }}
          transition="transform 0.3s"
          opacity={0.5}
        ></IconButton>
        <IconButton
          ml={4}
          icon={<FaLinkedin />}
          isRound="true"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://www.linkedin.com/in/aqshalprawira/";
          }}
          _hover={{
            transform: "scale(1.5)",
            opacity: 1,
            color: isDark ? "blue" : "darkblue"
          }}
          transition="transform 0.3s"
          opacity={0.5}
        ></IconButton>
        <Spacer></Spacer>
        <IconButton
          ml={10}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
          _hover={{
            transform: "scale(1.5)",
            opacity: 1,
            color: isDark ? "tomato" : "darkblue"
          }}
          transition="transform 0.3s"
          opacity={0.5}
        ></IconButton>
      </Flex>
      <Box mt={10}>Ntar malem dilanjutin, bobo dulu &#128564;</Box>
    </VStack>
  );
}

export default App;
