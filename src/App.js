import { VStack, Flex, Heading, Spacer } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import {FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa"
import Social from "./components/Social";
import Profile from "./components/Profile";
import Header from "./components/Header";


function App() {

  const {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          Aqshal Prawira
        </Heading>
        <Spacer></Spacer>
        <IconButton ml={2} icon={<FaInstagram/>} isRound="true" onClick={(e) => {e.preventDefault(); window.location.href='https://www.instagram.com/aqshalprwira/';}}></IconButton>
        <IconButton ml={2} icon={<FaGithub/>} isRound="true" onClick={(e) => {e.preventDefault(); window.location.href='https://github.com/aqshalprawira';}}></IconButton>
        <IconButton ml={2} icon={<FaLinkedin/>} isRound="true" onClick={(e) => {e.preventDefault(); window.location.href='https://www.linkedin.com/in/aqshalprawira/';}}></IconButton>
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
      </Flex>
      <div>
          Ntar malem dilanjutin, bobo dulu 	&#128564;
        </div>
      

      </VStack>
  );
}

export default App;
