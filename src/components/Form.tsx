import {
  Flex,
  FormControl,
  Textarea,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FormEvent } from "react";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineMessage,
} from "react-icons/ai";

export default function Form() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <Flex
      as="section"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      w="100%"
      minH="70vh"
      bgColor="gray.900"
      gap={2}
      px={6}
    >
      <Heading mb={[2, 0]}>Nos envie uma mensagem</Heading>
      <Text my={1}>Em caso de dúvidas ou sugestões</Text>
      <Flex
        as="form"
        onSubmit={handleSubmit}
        flexDir={["column", "row"]}
        w={["80vw", "80vw", "80vw", "35vw"]}
        justifyContent="center"
      >
        <FormControl display="flex" flexDir="column" gap={4}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <AiOutlineUser />
            </InputLeftElement>
            <Input placeholder="Nome" />
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <AiOutlineMail />
            </InputLeftElement>
            <Input placeholder="E-mail" />
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <AiOutlinePhone style={{ transform: "rotate(90deg)" }} />
            </InputLeftElement>
            <Input placeholder="Telefone" />
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <AiOutlineMessage />
            </InputLeftElement>
            <Textarea resize="none" placeholder="Mensagem" pl={10} pr={4} />
          </InputGroup>
          <Button
            type="submit"
            py={6}
            bgColor="blue.400"
            color="#fff"
            _hover={{ bgColor: "blue.500" }}
          >
            Enviar
          </Button>
        </FormControl>
      </Flex>
    </Flex>
  );
}
