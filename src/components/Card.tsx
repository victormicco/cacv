import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
};

export default function Card({ title, description }: CardProps) {
  return (
    <Box w="286px" bgColor="gray.600" borderRadius="3xl" p={5}>
      <Image
        src="/informatica.jpg"
        width="286px"
        height="214.5px"
        alt={title}
        style={{ borderRadius: 12 }}
      />
      <Heading size="md">{title}</Heading>
      <Text>{description}</Text>
    </Box>
  );
}
