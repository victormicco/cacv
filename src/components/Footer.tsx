import { Flex, Link, Text } from "@chakra-ui/react";

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
      <Text>
        Developed by{" "}
        <Link href="https://github.com/fellipeutaka" isExternal>
          Fellipe Utaka
        </Link>{" "}
        and{" "}
        <Link href="https://github.com/victormicco" isExternal>
          Victor Araujo
        </Link>
      </Text>
    </Flex>
  );
}
