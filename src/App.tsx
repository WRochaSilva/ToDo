import { Flex } from "@chakra-ui/react";
// import { Content } from "./Pages/Content";
import { Create } from "./Pages/Create";
import { Header } from "./Pages/Header";

function App() {
  return (
    <Flex bgColor={"#1A1A1A"} flexDir={"column"}>
      <Header />
      <Create />
      {/* <Content /> */}
    </Flex>
  );
}

export default App;
