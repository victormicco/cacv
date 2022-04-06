import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

type SectionProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageAltText: string;
  position: "left" | "right";
  button?: JSX.Element;
};

export default function Section({
  title,
  description,
  imageUrl,
  imageAltText,
  position,
  button,
}: SectionProps) {
  if (position === "left") {
    return (
      <Flex
        as="section"
        flexDir="column"
        alignItems="center"
        w="100%"
        gap={2}
        px={6}
        my={12}
      >
        <Flex
          flexDir={["column", "row"]}
          w="80vw"
          gap={4}
          justifyContent="center"
        >
          <Box maxW={["100%", "30%"]}>
            <Heading size="lg">{title}</Heading>
            <Text my={2}>{description}</Text>
            {button}
          </Box>
          <Image
            src={imageUrl}
            width={495.04}
            height={278.46}
            quality={100}
            style={{ borderRadius: 8 }}
            alt={imageAltText}
          />
        </Flex>
      </Flex>
    );
  } else {
    return (
      <Flex
        as="section"
        flexDir="column"
        alignItems="center"
        w="100%"
        gap={2}
        px={6}
        my={12}
      >
        <Flex
          flexDir={["column", "row"]}
          w="80vw"
          gap={4}
          justifyContent="center"
        >
          <Image
            src={imageUrl}
            width={495.04}
            height={278.46}
            quality={100}
            style={{ borderRadius: 8 }}
            alt={imageAltText}
          />
          <Box maxW={["100%", "30%"]}>
            <Heading size="lg">{title}</Heading>
            <Text my={2}>{description}</Text>
            {button}
          </Box>
        </Flex>
      </Flex>
    );
  }
}