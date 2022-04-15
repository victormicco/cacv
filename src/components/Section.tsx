import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionContainer = motion(Flex);
const variants = {
  visible: { opacity: 1, transition: { duration: 0.8 } },
  hidden: { opacity: 0 },
};

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
  const [ref, inView] = useInView();
  const controls = useAnimation();
  if (inView) {
    controls.start("visible");
  }

  if (position === "left") {
    return (
      <MotionContainer
        as="section"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        w="100%"
        minH="65vh"
        bgColor="blue.200"
        gap={2}
        px={6}
        animate={controls}
        initial="hidden"
        variants={variants}
        ref={ref}
      >
        <Flex
          flexDir={["column", "row"]}
          w="80vw"
          gap={12}
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
      </MotionContainer>
    );
  } else {
    return (
      <MotionContainer
        as="section"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        w="100%"
        minH="65vh"
        gap={2}
        px={6}
        bgColor="#bf40bf"
        animate={controls}
        initial="hidden"
        variants={variants}
        ref={ref}
      >
        <Flex
          flexDir={["column", "row"]}
          w="80vw"
          gap={12}
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
      </MotionContainer>
    );
  }
}
