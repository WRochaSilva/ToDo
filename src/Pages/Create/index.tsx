import { Button, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Content } from "../Content";
import { IoMdAddCircleOutline } from "react-icons/io";

type TypeTask = {
  id: number;
  description: string;
  status: boolean;
};

export const Create = () => {
  const [descriptionTask, setDescriptionTask] = useState("");
  const [task, setTask] = useState<TypeTask[]>([]);

  const handleDescription = (event: any) => {
    setDescriptionTask(event.target.value);
  };

  const newTask = () => {
    const newId = task.length + 1;
    const newItem = {
      id: newId,
      description: descriptionTask,
      status: false,
    };

    // Atualiza o estado com uma nova lista de tarefas que inclui o novo item usando o operador spread
    setTask((prevTask) => [...prevTask, newItem]);
    setDescriptionTask("");
  };
  return (
    <>
      <Flex justifyContent={"center"} gap={"20px"} margin={"-22px"}>
        <Input
          w={"638px"}
          h={"54px"}
          bgColor={"#1A1A1A"}
          textColor={"white"}
          value={descriptionTask}
          onChange={handleDescription}
        ></Input>
        <Button
          bgColor={"blue.500"}
          textColor={"white"}
          w={"90px"}
          h={"54px"}
          justifyContent={"space-between"}
          onClick={() => newTask()}
        >
          Criar <IoMdAddCircleOutline size={20} />
        </Button>
      </Flex>
      <Content list={task} setList={setTask} />
    </>
  );
};
