import Card from "components/Card";
import Layout from "components/Layout";
import { Grid, Heading, HeadingProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import { client, ssrCache } from "lib/urql";
import { ProjectsDocument, useProjectsQuery } from "generated/graphql";

export default function Projects() {
  const [{ data }] = useProjectsQuery();

  const MotionHeading = motion<HeadingProps>(Heading);

  const headingVariants = {
    visible: { opacity: 1, transition: { duration: 0.8, delay: 0 } },
    hidden: { opacity: 0 },
  };

  return (
    <Layout seo={{ title: "Projetos", desc: "CACV - Projetos" }}>
      <MotionHeading
        as="h1"
        size="lg"
        fontWeight="semibold"
        px={6}
        initial="hidden"
        animate="visible"
        variants={headingVariants}
      >
        Projetos
      </MotionHeading>
      <MotionHeading
        as="h2"
        size="sm"
        fontWeight="normal"
        px={6}
        initial="hidden"
        animate="visible"
        variants={headingVariants}
      >
        Abaixo, está listado todos os nossos projetos
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
        {data?.projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageUrl={project.image?.url}
          />
        ))}
      </Grid>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  await client.query(ProjectsDocument).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },

    revalidate: 60 * 60 * 5, // 5 hours
  };
};
