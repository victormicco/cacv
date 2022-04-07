import Card from "components/Card";
import Layout from "components/Layout";
import { Grid, Heading, HeadingProps } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";

export default function Courses() {
  const courses = [
    {
      title: "Informática",
      description:
        "Nosso curso destina-se a tornar uma pessoa funcional na questão da informática. Ministrando informações básicas e operacionais de hardware e software. inclui o ensinamento para tornar o aluno um usuário operacional do Windows e Pacote Office.",
    },
    {
      title: "Informática",
      description:
        "Nosso curso destina-se a tornar uma pessoa funcional na questão da informática. Ministrando informações básicas e operacionais de hardware e software. inclui o ensinamento para tornar o aluno um usuário operacional do Windows e Pacote Office.",
    },
    {
      title: "Informática",
      description:
        "Nosso curso destina-se a tornar uma pessoa funcional na questão da informática. Ministrando informações básicas e operacionais de hardware e software. inclui o ensinamento para tornar o aluno um usuário operacional do Windows e Pacote Office.",
    },
    {
      title: "Informática",
      description:
        "Nosso curso destina-se a tornar uma pessoa funcional na questão da informática. Ministrando informações básicas e operacionais de hardware e software. inclui o ensinamento para tornar o aluno um usuário operacional do Windows e Pacote Office.",
    },
    {
      title: "Informática",
      description:
        "Nosso curso destina-se a tornar uma pessoa funcional na questão da informática. Ministrando informações básicas e operacionais de hardware e software. inclui o ensinamento para tornar o aluno um usuário operacional do Windows e Pacote Office.",
    },
    {
      title: "Informática",
      description:
        "Nosso curso destina-se a tornar uma pessoa funcional na questão da informática. Ministrando informações básicas e operacionais de hardware e software. inclui o ensinamento para tornar o aluno um usuário operacional do Windows e Pacote Office.",
    },
    {
      title: "Informática",
      description:
        "Nosso curso destina-se a tornar uma pessoa funcional na questão da informática. Ministrando informações básicas e operacionais de hardware e software. inclui o ensinamento para tornar o aluno um usuário operacional do Windows e Pacote Office.",
    },
    {
      title: "Informática",
      description:
        "Nosso curso destina-se a tornar uma pessoa funcional na questão da informática. Ministrando informações básicas e operacionais de hardware e software. inclui o ensinamento para tornar o aluno um usuário operacional do Windows e Pacote Office.",
    },
    {
      title: "Informática",
      description:
        "Nosso curso destina-se a tornar uma pessoa funcional na questão da informática. Ministrando informações básicas e operacionais de hardware e software. inclui o ensinamento para tornar o aluno um usuário operacional do Windows e Pacote Office.",
    },
  ];

  const MotionHeading = motion<HeadingProps>(Heading);
  const controls = useAnimation();
  controls.start("visible");

  const headingVariants = {
    visible: { opacity: 1, transition: { duration: 0.8, delay: 0 } },
    hidden: { opacity: 0 },
  };

  return (
    <Layout seo={{ title: "Cursos", desc: "CACV - Cursos" }}>
      <MotionHeading
        as="h1"
        size="lg"
        fontWeight="semibold"
        px={6}
        animate={controls}
        variants={headingVariants}
        initial="hidden"
      >
        Nossos cursos
      </MotionHeading>
      <MotionHeading
        as="h2"
        size="sm"
        fontWeight="normal"
        px={6}
        animate={controls}
        variants={headingVariants}
        initial="hidden"
      >
        Abaixo, está listado todos os nossos cursos disponíveis
      </MotionHeading>
      <Grid
        as="main"
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={12}
        my={8}
        px={6}
        w="100%"
        justifyItems="center"
      >
        {courses.map((course) => (
          <Card
            key={course.title}
            title={course.title}
            description={course.description}
            imageUrl="https://www.cacv.org.br/assets/img/informatica.jpg"
          />
        ))}
      </Grid>
    </Layout>
  );
}
