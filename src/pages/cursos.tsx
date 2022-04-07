import Card from "components/Card";
import Layout from "components/Layout";
import { Grid, Heading, HeadingProps } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { GetStaticProps } from "next";
import { client, ssrCache } from "lib/urql";
import { CoursesDocument, useCoursesQuery } from "generated/graphql";

export default function Courses() {
  const [{ data }] = useCoursesQuery();
  console.log(data);

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
        {data?.courses.map((course) => (
          <Card
            key={course.title}
            title={course.title}
            description={course.description}
            imageUrl={course.image?.url}
          />
        ))}
      </Grid>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  await client.query(CoursesDocument).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },

    revalidate: 1 * 60, // 1 minute
  };
};
