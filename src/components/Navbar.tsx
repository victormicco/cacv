import Image from "next/image";
import NextLink from "next/link";
import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { BsFacebook, BsWhatsapp, BsEnvelope } from "react-icons/bs";
import { CgMenu } from "react-icons/cg";
import { useRouter } from "next/router";

const navLinks = [
  { href: "/", name: "Home" },
  { href: "/cursos", name: "Cursos" },
  { href: "/projetos", name: "Projetos" },
  { href: "/galeria", name: "Galeria" },
];

const socialMediaLinks = [
  {
    icon: <BsFacebook />,
    href: "https://www.facebook.com/cacv.cultivandoamor",
    text: "Facebook",
  },
  { icon: <BsWhatsapp />, href: "https://api.whatsapp.com", text: "Whatsapp" },
  { icon: <BsEnvelope />, href: "mailto:cacv@cacv.org.br", text: "E-mail" },
];

export default function Navbar() {
  const { pathname } = useRouter();

  return (
    <Flex
      as="header"
      w="100%"
      h="68px"
      top={0}
      justifyContent="space-between"
      alignItems="center"
      px={6}
      position="fixed"
      zIndex={99}
      bg={useColorModeValue("#ffffff40", "#1a202c40")}
      css={{ backdropFilter: "blur(2px)" }}
    >
      {/* <Image src={} /> alt="Cacv logo" */}
      <span>Logo</span>
      <Stack
        as="ul"
        listStyleType="none"
        gap={6}
        display={{ base: "none", md: "flex" }}
        direction={{ base: "column", md: "row" }}
      >
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
      </Stack>
      <Stack
        as="ul"
        listStyleType="none"
        display={{ base: "none", md: "flex" }}
        direction={{ base: "column", md: "row" }}
        gap={6}
      >
        {socialMediaLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} key={link.href} isExternal>
              {link.icon}
            </Link>
          </li>
        ))}
      </Stack>
      <Box ml={2} display={{ base: "inline-block", md: "none" }}>
        <Menu isLazy autoSelect={false}>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<CgMenu />}
            variant="outline"
          />
          <MenuList>
            <MenuGroup title="Páginas">
              {navLinks.map((link) => (
                <NextLink key={link.href} href={link.href} passHref>
                  <MenuItem as={Link}>{link.name}</MenuItem>
                </NextLink>
              ))}
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Redes sociais">
              {socialMediaLinks.map((link) => (
                <MenuItem
                  as={Link}
                  key={link.href}
                  href={link.href}
                  _hover={{ textDecor: "none" }}
                >
                  {link.icon}
                  <Text ml={1}>{link.text}</Text>
                </MenuItem>
              ))}
            </MenuGroup>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
}
