import Image from "next/image";
import { Box, BoxProps, Heading, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionSection = motion<BoxProps>(Box);

type CardProps = {
  title: string;
  description: string;
};

export default function Card({ title, description }: CardProps) {
  const [ref, inView] = useInView();
  const controls = useAnimation();
  if (inView) {
    controls.start("visible");
  }

  const sectionVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
    hidden: { y: 10, opacity: 0 },
  };

  return (
    <MotionSection
      as="section"
      w="286px"
      bgColor="gray.600"
      borderRadius="3xl"
      p={5}
      animate={controls}
      initial="hidden"
      variants={sectionVariants}
      ref={ref}
    >
      <Image
        src="/informatica.jpg"
        width="286px"
        height="214.5px"
        alt={title}
        style={{ borderRadius: 12 }}
      />
      <Heading size="md" lineHeight="8">
        {title}
      </Heading>
      <Text lineHeight="5">{description}</Text>
    </MotionSection>
  );
}
