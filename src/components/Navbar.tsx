import Image from "next/image";
import NextLink from "next/link";
import { Flex, Spacer, useColorModeValue } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { BsFacebook, BsWhatsapp, BsEnvelope } from "react-icons/bs";
import { useRouter } from "next/router";

const navLinks = [
  { href: "/", name: "Home" },
  { href: "/cursos", name: "Cursos" },
  { href: "/projetos", name: "Projetos" },
  { href: "/galeria", name: "Galeria" },
];

const socialMediaLinks = [
  { icon: <BsFacebook />, href: "https://facebook.com" },
  { icon: <BsWhatsapp />, href: "https://api.whatsapp.com" },
  { icon: <BsEnvelope />, href: "mailto:victor@gmail.com" },
];

export default function Navbar() {
  const { pathname } = useRouter();

  return (
    <Flex
      as="header"
      w="100%"
      h="68px"
      top={0}
      alignItems="center"
      px={6}
      position="fixed"
      zIndex={99}
      bg={useColorModeValue("#ffffff40", "#1a202c40")}
      css={{ backdropFilter: "blur(2px)" }}
    >
      {/* <Image src={} /> alt="Cacv logo" */}
      <span>Logo</span>
      <Spacer />
      <Flex as="ul" listStyleType="none" gap={6}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <NextLink href={link.href} passHref>
              <Link
                pb={2}
                borderColor="gray.600"
                borderBottom={pathname === link.href ? "2px" : "0px"}
                _hover={{ transition: 2, opacity: 0.7 }}
              >
                {link.name}
              </Link>
            </NextLink>
          </li>
        ))}
      </Flex>
      <Spacer />
      <Flex gap={6}>
        {socialMediaLinks.map((link) => (
          <Link href={link.href} key={link.href} isExternal>
            {link.icon}
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}
