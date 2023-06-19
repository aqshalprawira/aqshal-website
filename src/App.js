import { VStack, Flex, Heading, Spacer } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { FaSun, FaMoon, FaHome, FaGithub, FaLinkedin } from "react-icons/fa";
import React, { useEffect } from "react";
import {
  Image,
  Text,
  Box,
  Button,
  Card,
  CardBody,
  Stack,
} from "@chakra-ui/react";
import ProfilePicture from "./assets/aqshal-pp.jpg";
import Social from "./components/Social";
import Profile from "./components/Profile";
import Header from "./components/Header";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%" position="fixed" bgColor={isDark ? "#1a202c" : "white"} top={0} pt={2}
          pb={2}>
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

        <IconButton
          ml={5}
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
      <Flex
        w="100%"
        mt={10}
        direction={["column", "row"]}
        justifyContent={["center", "flex-start"]}
        alignItems={["center", "flex-start"]}
        id="aboutme"
      >
        <Image
          borderRadius="full"
          src={ProfilePicture}
          alt="Aqshal PP"
          boxSize={["150px", "300px"]}
          mr={["10px", "20px"]}
        />

        <Box mt={5}>
          <Text fontSize={["md", "2xl"]} fontWeight="bold">
            Hello There &#x1F44B;
          </Text>
          <Text fontSize={["md", "2xl"]} fontWeight="bold">
            I am Muhammad Aqshal Prawira
          </Text>
          <Text fontSize={["sm", "md"]} mt={["5px", "10px"]}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
            ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
            nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
            nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
            condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem
            neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
            hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
            Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
            Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
            fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed
            consequat, leo eget bibendum sodales, augue velit cursus nunc
          </Text>
          <IconButton
            mt={4}
            icon={<FaGithub />}
            isRound="true"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://github.com/aqshalprawira";
            }}
            _hover={{
              transform: "scale(1.5)",
              opacity: 1,
              color: isDark ? "white" : "black",
            }}
            transition="transform 0.3s"
            opacity={0.5}
          ></IconButton>
          <IconButton
            mt={4}
            ml={4}
            icon={<FaLinkedin />}
            isRound="true"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://www.linkedin.com/in/aqshalprawira/";
            }}
            _hover={{
              transform: "scale(1.5)",
              opacity: 1,
              color: isDark ? "blue" : "darkblue",
            }}
            transition="transform 0.3s"
            opacity={0.5}
          ></IconButton>
        </Box>
      </Flex>
      <Flex
        w="100%"
        mt={5}
        direction={["column", "row"]}
        justifyContent={["center", "space-evenly"]}
        alignItems={["center", "flex-start"]}
      >
        <Text fontSize={["xl", "4xl"]} fontWeight="bold">
          My Projects
        </Text>
      </Flex>
      <Flex
        w="100%"
        mt={5}
        direction={["column", "row"]}
        justifyContent={["center", "space-evenly"]}
        alignItems={["center", "flex-start"]}
        id="myprojects"
      >
        <Card maxW="sm" mt={5}>
          <CardBody>
            <Image
              src="https://dummyimage.com/334x223/000/fff"
              alt="Dummy Image"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Project 1</Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </Text>
              <Text color="blue.600" fontSize="2xl">
                Lorem ipsum dolor sit amet
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW="sm" mt={5}>
          <CardBody>
            <Image
              src="https://dummyimage.com/334x223/000/fff"
              alt="Dummy Image"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Project 2</Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </Text>
              <Text color="blue.600" fontSize="2xl">
                Lorem ipsum dolor sit amet
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
      <Box mt={10} fontWeight="bold"> Ntar dilanjutin mau bobo dulu &#x1F634;</Box>
    </VStack>
  );
}

export default App;
