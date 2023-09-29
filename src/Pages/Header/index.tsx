import { Flex, Img } from "@chakra-ui/react";
import teste from "../../assets/tarefa.png";

export const Header = () => {
  return (
    <Flex h={"200px"} bgColor={"#0D0D0D"} justifyContent={"center"}>
      <Img w={"180px"} h={"180px"} src={teste} />
    </Flex>
  );
};
