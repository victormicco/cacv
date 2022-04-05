import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import Card from "components/Card";
import Layout from "components/Layout";

export default function Courses() {
  return (
    <Layout>
      <Heading as="h1" size="lg" fontWeight="semibold" px={6}>
        Nossos cursos
      </Heading>
      <Heading as="h2" size="sm" fontWeight="normal" px={6}>
        Abaixo, está listado todos os nossos cursos disponíveis
      </Heading>
      <Grid
        as="main"
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={12}
        my={8}
        w="100%"
        justifyItems="center"
      >
        <Card
          title="Informática"
          description="Nosso curso destina-se a tornar uma pessoa funcional na questão da informática. Ministrando informações básicas e operacionais de hardware e software. inclui o ensinamento para tornar o aluno um usuário operacional do Windows e Pacote Office."
        />
        <Card
          title="Informática"
          description="Nosso curso destina-se a tornar uma pessoa funcional na questão da informática. Ministrando informações básicas e operacionais de hardware e software. inclui o ensinamento para tornar o aluno um usuário operacional do Windows e Pacote Office."
        />
        <Card
          title="Informática"
          description="Nosso curso destina-se a tornar uma pessoa funcional na questão da informática. Ministrando informações básicas e operacionais de hardware e software. inclui o ensinamento para tornar o aluno um usuário operacional do Windows e Pacote Office."
        />
        <Card
          title="Informática"
          description="Nosso curso destina-se a tornar uma pessoa funcional na questão da informática. Ministrando informações básicas e operacionais de hardware e software. inclui o ensinamento para tornar o aluno um usuário operacional do Windows e Pacote Office."
        />
        <Card
          title="Informática"
          description="Nosso curso destina-se a tornar uma pessoa funcional na questão da informática. Ministrando informações básicas e operacionais de hardware e software. inclui o ensinamento para tornar o aluno um usuário operacional do Windows e Pacote Office."
        />
        <Card
          title="Informática"
          description="Nosso curso destina-se a tornar uma pessoa funcional na questão da informática. Ministrando informações básicas e operacionais de hardware e software. inclui o ensinamento para tornar o aluno um usuário operacional do Windows e Pacote Office."
        />
        <Card
          title="Informática"
          description="Nosso curso destina-se a tornar uma pessoa funcional na questão da informática. Ministrando informações básicas e operacionais de hardware e software. inclui o ensinamento para tornar o aluno um usuário operacional do Windows e Pacote Office."
        />
        <Card
          title="Informática"
          description="Nosso curso destina-se a tornar uma pessoa funcional na questão da informática. Ministrando informações básicas e operacionais de hardware e software. inclui o ensinamento para tornar o aluno um usuário operacional do Windows e Pacote Office."
        />
        <Card
          title="Informática"
          description="Nosso curso destina-se a tornar uma pessoa funcional na questão da informática. Ministrando informações básicas e operacionais de hardware e software. inclui o ensinamento para tornar o aluno um usuário operacional do Windows e Pacote Office."
        />
      </Grid>
    </Layout>
  );
}
