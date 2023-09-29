import { Button, Checkbox, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsTrash3 } from "react-icons/bs";
import { ImFileEmpty } from "react-icons/im";

export const Content = ({ list, setList }: any) => {
  const [countTaskDone, setCountTaskDone] = useState(0);

  const deleteTask = (id: number) => {
    const newArrayTask = list.filter((item: any) => item.id !== id);
    setList(newArrayTask);

    const taskDeleted = list.filter((item: any) => item.id === id);
    if (taskDeleted[0].status === true) {
      setCountTaskDone((countTaskDone) => countTaskDone - 1);
    }
  };

  const updateTask = (id: number) => {
    list.map((item: any) => {
      if (item.id === id && item.status === false) {
        item.status = true;
        setCountTaskDone((countTaskDone) => countTaskDone + 1);
      } else if (item.id === id && item.status === true) {
        item.status = false;
        setCountTaskDone((countTaskDone) => countTaskDone - 1);
      }
    });
  };
  return (
    <Flex justifyContent={"center"}>
      <Flex flexDir={"column"} w={"748px"} mt={"60px"}>
        <Flex justifyContent={"space-between"}>
          <Flex>
            <Text color={"blue"} mr={"5px"}>
              Tarefas Criadas
            </Text>
            <Flex bgColor={"#D9D9D9"} p={"2px"} borderRadius={"5px"}>
              <Text>{list.length}</Text>
            </Flex>
          </Flex>
          <Flex>
            <Text color={"blueviolet"} mr={"5px"}>
              Concluidas
            </Text>
            <Flex bgColor={"#D9D9D9"} p={"2px"} borderRadius={"5px"}>
              <Text>
                {countTaskDone} de {list.length}
              </Text>
            </Flex>
          </Flex>
        </Flex>
        {list.length < 1 ? (
          <Flex
            flexDir={"column"}
            color={"#808080"}
            m={"20px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <ImFileEmpty size={100} />
            <Text as={"b"}>Você ainda não tem tarefas cadastradas</Text>
            <Text>Crie tarefas e organize seus itens a fazer</Text>
          </Flex>
        ) : (
          list.map((item: any) => (
            <Flex
              key={item.id}
              border={"1px solid black"}
              borderRadius={"5px"}
              bgColor={"#262626"}
              mt={"10px"}
              p={"5px"}
              justifyContent={"space-between"}
            >
              <Checkbox
                textColor={"white"}
                onChange={() => updateTask(item.id)}
              >
                {item.description}
              </Checkbox>
              <Button
                bgColor={"transparent"}
                color={"red"}
                onClick={() => deleteTask(item.id)}
              >
                <BsTrash3 size={20} />
              </Button>
            </Flex>
          ))
        )}
      </Flex>
    </Flex>
  );
};
