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
  useToast,
} from "@chakra-ui/react";
import { FormEvent, useRef, useState } from "react";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineMessage,
} from "react-icons/ai";

import ReactInputMask from "react-input-mask";
import validateForm from "services/validateForm";

export default function Form() {
  const toast = useToast({
    position: "top-right",
    duration: 4500,
  });
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const data = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      phone: phoneRef.current?.value,
      message: messageRef.current?.value,
    };

    const refs = {
      nameRef,
      emailRef,
      phoneRef,
      messageRef,
    };

    const formErrors = validateForm(refs, toast);
    if (!formErrors) {
      setLoading(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast({
          title: "Sucesso",
          description: "Sua mensagem foi enviada com sucesso!",
          status: "success",
        });
      } else {
        toast({
          title: "Erro",
          description: "Ocorreu um erro. Tente novamente mais tarde!",
          status: "error",
        });
      }
      setLoading(false);
    }
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
            <Input placeholder="Nome" ref={nameRef} />
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <AiOutlineMail />
            </InputLeftElement>
            <Input placeholder="E-mail" ref={emailRef} />
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <AiOutlinePhone style={{ transform: "rotate(90deg)" }} />
            </InputLeftElement>
            <Input
              placeholder="Telefone"
              as={ReactInputMask}
              mask="(99) 99999-9999"
              ref={phoneRef}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <AiOutlineMessage />
            </InputLeftElement>
            <Textarea
              resize="none"
              placeholder="Mensagem"
              pl={10}
              pr={4}
              ref={messageRef}
            />
          </InputGroup>
          <Button
            type="submit"
            py={6}
            bgColor="blue.400"
            color="#fff"
            _hover={{ bgColor: "blue.500" }}
            isLoading={loading}
          >
            Enviar
          </Button>
        </FormControl>
      </Flex>
    </Flex>
  );
}
