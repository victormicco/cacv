import { Box, Flex, Heading, Text, Link } from "@chakra-ui/react";
import Section from "components/Section";
import Image from "next/image";
import NextLink from "next/link";
import Layout from "./../components/Layout";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import Form from "components/Form";

export default function Home() {
  return (
    <Layout seo={{ title: "Home", desc: "CACV - Home" }}>
      <Flex
        as="main"
        flexDir="column"
        alignItems="center"
        w="100%"
        gap={2}
        px={6}
        my={[12, 24]}
      >
        <Heading as="h1" alignSelf={["flex-start", "center"]}>
          Qual o nosso intuito?
        </Heading>
        <Text>
          Fundada em 2010, a ONG CACV tem o intuito de incentivar os jovens a
          ter uma profissão.
        </Text>
        <Image
          src="https://www.cacv.org.br/assets/img/img7.jpeg"
          width={1040}
          height={585}
          quality={100}
          style={{ borderRadius: 8 }}
          alt="Jovens"
          priority
        />
      </Flex>
      <Flex
        as="section"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        w="100%"
        minH="60vh"
        gap={2}
        px={6}
        bgColor="blue.300"
      >
        <Heading as="h1" alignSelf={["flex-start", "center"]} pb={[6, 32]}>
          Sobre nós
        </Heading>
        <Flex
          flexDir={["column", "row"]}
          w="80vw"
          gap={4}
          justifyContent="center"
        >
          <Box maxW={["100%", "30%"]}>
            <Heading size="lg">Onde tudo começou...</Heading>
            <Text>
              Começamos com o projeto nos anos 2000, com o apoio da Phibro e da
              Pfizer, fazendo doações de mantimentos e visitando asilos,
              conforme os anos passaram, decidimos criar um espaço físico para
              oferecermos cursos e apoio às pessoas da região, esses são alguns
              dos incríveis momentos que vivemos em nossa ONG.
            </Text>
          </Box>
          <Image
            src="https://www.cacv.org.br/assets/img/rapazeada.jpg"
            width={495.04}
            height={278.46}
            quality={100}
            style={{ borderRadius: 8 }}
            alt="Jovens"
          />
        </Flex>
      </Flex>
      <Section
        position="right"
        title="Cursos com qualidade e 100% grátis"
        description="Oferecemos diversos cursos totalmente grátis, dentre eles são:
              Elétrica, Autocad, Hardware, Informática, Dança, Costureira,
              Inglês, Esperanto e Japonês."
        imageUrl="https://www.cacv.org.br/assets/img/eletrica.jpg"
        imageAltText="Jovens fazendo curso"
        button={
          <NextLink href="/cursos" passHref>
            <Link
              px={4}
              py={3}
              bgColor="blue.300"
              color="#fff"
              borderRadius={6}
              display="inline-block"
              _hover={{
                bgColor: "blue.400",
                textDecor: "none",
                transition: "0.2s",
              }}
            >
              Ver todos os cursos
            </Link>
          </NextLink>
        }
      />
      <Flex
        as="section"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        minH="65vh"
        w="100%"
        bgColor="blue.300"
        gap={2}
        px={6}
      >
        <Flex
          flexDir={["column", "row"]}
          w="80vw"
          gap={4}
          justifyContent="center"
        >
          <Box maxW={["100%", "30%"]}>
            <Heading size="lg">Ajude sem tirar 1 real do bolso</Heading>
            <Text my={2}>
              Uma contribuição é muito necessária para que possamos continuar a
              mudar histórias de vida. Você pode nos ajudar apenas com suas
              notas fiscais, sem tirar nenhum valor do seu bolso. Ao lado tem um
              tutorial de como se cadastrar para ajudar nossa ONG. O cadastro
              para a doação pode ser via aplicativo ou pelo site:{" "}
              <Link
                href="https://portal.fazenda.sp.gov.br/servicos/nfp"
                isExternal
              >
                https://portal.fazenda.sp.gov.br/servicos/nfp
              </Link>
            </Text>
          </Box>
          <Box w="100%" maxW="495.04px" h="100%" maxH="278.46px">
            <LiteYouTubeEmbed id="RDKe9ODRt4E" title="Nota fiscal paulista" />
          </Box>
        </Flex>
      </Flex>
      <Section
        position="right"
        title="O que fazemos com as doações?"
        description="Nós principalmente usamos para oferecer uma refeição aos alunos
        por dia, comprar materiais necessários dos cursos, reformar o
        espaço, entregar cestas básicas e fazer passeios e festas para a
        população local."
        imageUrl="https://www.cacv.org.br/assets/img/doacao.jpg"
        imageAltText="Doação"
      />
      <Form />
    </Layout>
  );
}
