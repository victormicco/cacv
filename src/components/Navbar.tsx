import Image from "next/image";
import NextLink from "next/link";
import { Flex, Spacer } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { BsFacebook, BsWhatsapp, BsEnvelope } from "react-icons/bs";

const navLinks = [
  { href: "/", name: "Home" },
  { href: "/cursos", name: "Cursos" },
  { href: "/projetos", name: "Projetos" },
  { href: "/galeria", name: "Galeria" },
];

export default function Navbar() {
  return (
    <Flex as="header" h="68px" alignItems="center" px={6}>
      {/* <Image src={} /> alt="Cacv logo" */}
      <span>Logo</span>
      <Spacer />
      <Flex as="ul" listStyleType="none" gap={6}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <NextLink href={link.href} passHref>
              <Link>{link.name}</Link>
            </NextLink>
          </li>
        ))}
      </Flex>
      <Spacer />
      <Flex gap={6}>
        <BsFacebook />
        <BsWhatsapp />
        <BsEnvelope />
      </Flex>
    </Flex>
  );
}
