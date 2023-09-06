import { VStack } from "@chakra-ui/layout";
import Navbar from "./navbar";
import Profile from "./profile";
import Projects from "./projects";
import Skills from "./skills";
import Footer from "./footer";

function App() {
  return (
    <VStack p={5}>
      <Navbar />
      <Profile />
      <Projects />
      <Skills />
      <Footer />
    </VStack>
  );
}

export default App;
