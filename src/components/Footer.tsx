import { Flex, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      as="footer"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      flexDir="column"
      py={8}
    >
      <Text>Copyright ©2022 | Todos os direitos reservados</Text>
      <Text>Developed by Fellipe Utaka and Victor Araujo</Text>
    </Flex>
  );
}
