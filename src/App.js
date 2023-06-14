import { VStack, Flex, Heading, Spacer } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import {FaSun, FaMoon, AiOutlineCode, FaGithub, FaLinkedin} from "react-icons/fa"
import React, { useEffect } from "react";
import { Image, Text, Box } from '@chakra-ui/react'
import AqshalLight from "./assets/Aqshal-light.png"
import AqshalDark from "./assets/Aqshal-dark.png"
import Social from "./components/Social";
import Profile from "./components/Profile";
import Header from "./components/Header";


function App() {

  const {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === "dark";

  useEffect(() => {
    document.title = "Aqshal Website";
  }, []);

  return (
    
    <VStack p={5}>
      <Flex w="100%">
        { isDark ? (
          <Image src={AqshalDark} w="170px" h="80px" cursor="pointer" onClick={(e) => {e.preventDefault(); window.location.href='https://aqshaldev.my.id/';}}/> 
        ) : (
          <Image src={AqshalLight} w="170px" h="80px" cursor="pointer" onClick={(e) => {e.preventDefault(); window.location.href='https://aqshaldev.my.id/';}} /> 
        )
          }
        <Spacer></Spacer>
        <IconButton ml={2} icon={<FaGithub/>} isRound="true" onClick={(e) => {e.preventDefault(); window.location.href='https://github.com/aqshalprawira';}}></IconButton>
        <IconButton ml={2} icon={<FaLinkedin/>} isRound="true" onClick={(e) => {e.preventDefault(); window.location.href='https://www.linkedin.com/in/aqshalprawira/';}}></IconButton>
        <IconButton ml={10} icon={isDark ? <FaMoon /> : <FaSun />} isRound="true" onClick={toggleColorMode}></IconButton>
      </Flex>
      <div>
          Ntar malem dilanjutin, bobo dulu 	&#128564;
        </div>
      

      </VStack>
  );
}

export default App;
