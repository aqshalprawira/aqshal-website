import { Flex } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode";
import { IconButton } from "@chakra-ui/button";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import React from "react";
import { Image, Text, Box, Button } from "@chakra-ui/react";
import ProfilePicture from "./assets/aqshal-pp.jpg";
import Typed from "react-typed";

export default function Profile() {
  const { colorMode} = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <>
      <Flex
        w="100%"
        mt={8}
        direction={["column", "row"]}
        justifyContent={["center", "space-evenly"]}
        alignItems={["center", "flex-start"]}
      >
        <Text fontSize={["xl", "4xl"]} fontWeight="bold" id="aboutme">
          About Me
        </Text>
      </Flex>

      <Flex
        w="100%"
        mt={10}
        direction={["column", "row"]}
        justifyContent={["center", "flex-start"]}
        alignItems={["center", "flex-start"]}
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
          <Box as="p" fontSize={["md", "2xl"]} fontWeight="bold">
            <Typed
              strings={[
                "My Name is Muhammad Aqshfj",
                "My Name is Muhammad Aqshal Prawira",
              ]}
              typeSpeed={100}
              backSpeed={100}
            />
          </Box>
          <Text fontSize={["sm", "md"]} mt={["5px", "10px"]}>
            I am a 7th-semester student at{" "}
            <Text as="strong" color={isDark ? "lightgreen" : "green"}>
              {" "}
              UPN "VETERAN" JAKARTA,
            </Text>{" "}
            majoring in Information Systems. I have a strong interest in{" "}
            <Text as="strong">front-end web development.</Text> Currently, I
            have been studying various programming languages relevant to
            front-end web development, such as{" "}
            <Text as="strong" color="orange">
              HTML,{" "}
            </Text>
            popular frameworks like{" "}
            <Text as="strong" color={isDark ? "lightblue" : "darkblue"}>
              Tailwind CSS
            </Text>{" "}
            and{" "}
            <Text as="strong" color={isDark ? "lightblue" : "darkblue"}>
              Chakra UI.
            </Text>{" "}
            Additionally, I have experience in using{" "}
            <Text as="strong" color={isDark ? "yellow" : "orange"}>
              JavaScript
            </Text>{" "}
            frameworks such as{" "}
            <Text as="strong" color={isDark ? "lightblue" : "darkblue"}>
              React JS.
            </Text>
            {"  "}I am highly enthusiastic about further developing my skills in
            this field and seeking more experiences in the IT industry.
          </Text>
          <IconButton
            mt={4}
            icon={<FaGithub />}
            isRound="true"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://github.com/aqshalprawira", "_blank");
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
              window.open(
                "https://www.linkedin.com/in/aqshalprawira/",
                "_blank"
              );
            }}
            _hover={{
              transform: "scale(1.5)",
              opacity: 1,
              color: isDark ? "lightblue" : "darkblue",
            }}
            transition="transform 0.3s"
            opacity={0.5}
          ></IconButton>
          <Button
            leftIcon={<SiGmail />}
            _hover={{
              transform: "scale(1.2)",
              opacity: 1,
              color: "tomato",
            }}
            mt={4}
            ml={3}
            opacity={0.5}
            size={["sm", "sm"]}
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=aqshal.map@gmail.com",
                "_blank"
              );
            }}
          >
            Contact Me!
          </Button>
          <Button
            leftIcon={<FaFileDownload />}
            _hover={{
              transform: "scale(1.2)",
              opacity: 1,
              color: isDark ? "lightgreen" : "darkgreen",
            }}
            mt={4}
            ml={["0", "3"]}
            opacity={0.5}
            size={["sm", "sm"]}
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "#",
                "_blank"
              );
            }}
          >
            Download CV
          </Button>
        </Box>
      </Flex>
    </>
  );
}
