import { Flex, Heading } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { FaGithub, FaHtml5 } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiChakraui,
  SiCss3,
  SiBootstrap,
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
} from "@chakra-ui/react";
import Project1 from "./assets/project-1.png";
import Project2 from "./assets/project-2.png";
import Project3 from "./assets/project-3.png";
import Fade from "react-reveal/Fade";

export default function Projects() {
  const { colorMode} = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <>
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
          <Card
            border="2px"
            borderColor="lightblue"
            maxW="sm"
            mt={5}
            onClick={(e) => {
              e.preventDefault();
              window.open("https://ruang-perpus-aqshal.netlify.app/", "_blank");
            }}
            _hover={{
              transform: "scale(1.1)",
              opacity: 1,
              color: isDark ? "white" : "black",
              transition: "transform ease 0.3s",
              cursor: "pointer",
            }}
          >
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

          <Card
            border="2px"
            borderColor="lightblue"
            maxW="sm"
            mt={5}
            onClick={(e) => {
              e.preventDefault();
              window.open("https://final-project-2e2c0.web.app/", "_blank");
            }}
            _hover={{
              transform: "scale(1.1)",
              opacity: 1,
              color: isDark ? "white" : "black",
              transition: "transform ease 0.3s",
              cursor: "pointer",
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
              <Box
                mt={2}
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://final-project-2e2c0.firebaseapp.com/",
                    "_blank"
                  );
                }}
              >
                <IconButton
                  icon={<FaHtml5 />}
                  isRound="true"
                  mb={2}
                ></IconButton>
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
                    window.open(
                      "https://github.com/aqshalprawira/student-portal",
                      "_blank"
                    );
                  }}
                >
                  Source Code
                </Button>
              </Box>
            </CardBody>
          </Card>

          <Card
            border="2px"
            borderColor="lightblue"
            maxW="sm"
            mt={5}
            onClick={(e) => {
              e.preventDefault();
              window.open("https://memasak.netlify.app/", "_blank");
            }}
            _hover={{
              transform: "scale(1.1)",
              opacity: 1,
              color: isDark ? "white" : "black",
              transition: "transform ease 0.3s",
              cursor: "pointer",
            }}
          >
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
                <IconButton
                  icon={<FaHtml5 />}
                  isRound="true"
                  mb={2}
                ></IconButton>
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
                    window.open(
                      "https://github.com/aqshalprawira/MeMasak",
                      "_blank"
                    );
                  }}
                >
                  Source Code
                </Button>
              </Box>
            </CardBody>
          </Card>
        </Flex>
      </Fade>
    </>
  );
}
