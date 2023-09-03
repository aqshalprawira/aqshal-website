import { VStack, Flex, Heading, Spacer } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import {
  FaSun,
  FaMoon,
  FaHome,
  FaGithub,
  FaLinkedin,
  FaHtml5,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiChakraui,
  SiCss3,
  SiBootstrap,
  SiGmail
} from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import React from "react";
import {
  Image,
  Text,
  Box,
  Button,
  Card,
  CardBody,
  Stack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import ProfilePicture from "./assets/aqshal-pp.jpg";
import Project1 from "./assets/project-1.png";
import Project2 from "./assets/project-2.png";
import Project3 from "./assets/project-3.png";
import Typed from "react-typed";
import Fade from "react-reveal/Fade";
import reactLogo from "../src/assets/reactLogo.png";
import cssLogo from "../src/assets/cssLogo.png";
import htmlLogo from "../src/assets/htmlLogo.png";
import jsLogo from "../src/assets/jsLogo.png";
import tailwindLogo from "../src/assets/tailwindLogo.svg";
import bootstrapLogo from "../src/assets/Bootstrap_logo.png";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex
        w="100%"
        position="sticky"
        bgColor={isDark ? "#1a202c" : "white"}
        top={0}
        pt={2}
        pb={2}
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
              color: isDark ? "blue" : "darkblue",
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
              window.open("https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=aqshal.map@gmail.com", "_blank");
          }}
        >
          Contact Me!
        </Button>
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

      <Fade top>
        <Flex
          w="100%"
          mt={5}
          direction={["column", "row"]}
          justifyContent={["center", "space-evenly"]}
          alignItems={["center", "flex-start"]}
          id="myprojects"
          gap={6}
        >
          <Card border='2px' borderColor='lightblue' maxW="sm" mt={5} onClick={(e) => {
              e.preventDefault();
              window.open("https://ruang-perpus-aqshal.netlify.app/", "_blank");
            }}
            _hover={{
              transform: "scale(1.1)",
              opacity: 1,
              color: isDark ? "white" : "black",
              transition: "transform ease 0.3s",
              cursor: "pointer"
            }}>
          
            <CardBody>
              <Image src={Project1} alt="Dummy Image" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">RuangPerpus</Heading>
                <Text>
                  RuangPerpus is a library website that utilizes the Create,
                  Read, Update, and Delete (CRUD) functions to manage books
                </Text>
              </Stack>
              <Box mt={2}>
                <IconButton icon={<FaHtml5 />} isRound="true"></IconButton>
                <IconButton
                  icon={<SiTailwindcss />}
                  isRound="true"
                  ml={2}
                ></IconButton>
                <IconButton
                  icon={<SiJavascript />}
                  isRound="true"
                  ml={2}
                ></IconButton>
              </Box>
            </CardBody>
          </Card>

          <Card border='2px' borderColor='lightblue' maxW="sm" mt={5} onClick={(e) => {
              e.preventDefault();
              window.open("https://final-project-2e2c0.web.app/", "_blank");
            }}
            _hover={{
              transform: "scale(1.1)",
              opacity: 1,
              color: isDark ? "white" : "black",
              transition: "transform ease 0.3s",
              cursor: "pointer"
            }}
            >
            <CardBody>
              <Image src={Project2} alt="Student Portal" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">Student Portal</Heading>
                <Text>
                  Student Portal is a website with Create, Read, Update, and
                  Delete (CRUD) functionality specifically designed to manage
                  and organize student data.
                </Text>
              </Stack>
              <Box mt={2} onClick={(e) => {
              e.preventDefault();
              window.open("https://final-project-2e2c0.firebaseapp.com/", "_blank");
            }}>
                <IconButton icon={<FaHtml5 />} isRound="true" mb={2}></IconButton>
                <IconButton
                  icon={<SiChakraui />}
                  isRound="true"
                  ml={2}
                  mb={2}
                ></IconButton>
                <IconButton
                  icon={<GrReactjs />}
                  isRound="true"
                  ml={2}
                  mb={2}
                  mr={2}
                ></IconButton>
                     <Button
          leftIcon={<FaGithub />}
          _hover={{
            transform: "scale(1.2)",
            opacity: 1,
            color: isDark ? "cyan" : "darkblue",
          }}
          
          mb={2}
          opacity={0.5}
          size={["sm", "md"]}
          onClick={(e) => {
            e.preventDefault();
              window.open("https://github.com/aqshalprawira/student-portal", "_blank");
          }}
        >
          Source Code
        </Button>
              </Box>
            </CardBody>
          </Card>

          <Card border='2px' borderColor='lightblue' maxW="sm" mt={5} onClick={(e) => {
              e.preventDefault();
              window.open("https://memasak.netlify.app/", "_blank");
            }}
            _hover={{
              transform: "scale(1.1)",
              opacity: 1,
              color: isDark ? "white" : "black",
              transition: "transform ease 0.3s",
              cursor: "pointer"
            }} >
            <CardBody>
              <Image src={Project3} alt="Personal Website" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">MeMasak</Heading>
                <Text>
                  MeMasak is a website that provides a wide range of food
                  recipes for users to learn and explore their culinary skills.
                </Text>
              </Stack>
              <Box mt={2}>
                <IconButton icon={<FaHtml5 />} isRound="true" mb={2}></IconButton>
                <IconButton
                  icon={<SiCss3 />}
                  isRound="true"
                  ml={2}
                  mb={2}
                ></IconButton>
                <IconButton
                  icon={<SiBootstrap />}
                  isRound="true"
                  ml={2}
                  mb={2}
                  mr={2}
                ></IconButton>
                <Button
          leftIcon={<FaGithub />}
          _hover={{
            transform: "scale(1.2)",
            opacity: 1,
            color: isDark ? "cyan" : "darkblue",
          }}
          
          mb={2}
          opacity={0.5}
          size={["sm", "md"]}
          onClick={(e) => {
            e.preventDefault();
              window.open("https://github.com/aqshalprawira/MeMasak", "_blank");
          }}
        >
          Source Code
        </Button>
              </Box>
            </CardBody>
          </Card>
        </Flex>
      </Fade>

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
          <Wrap w={["50%", "100%"]}>
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
      {/* Footer */}
      <Flex w="100%" justifyContent={"center"} mt={5}>
        <Box>© 2023 | Muhammad Aqshal Prawira</Box>
      </Flex>

    </VStack>

  );
}

export default App;
