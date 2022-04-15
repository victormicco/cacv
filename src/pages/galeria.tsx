import Card from "components/Card";
import Layout from "components/Layout";
import { Flex, Grid, Heading, HeadingProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import { client, ssrCache } from "lib/urql";
import { CoursesDocument, useCoursesQuery } from "generated/graphql";
import GalleryPhoto from "components/GalleryPhoto";

export default function Gallery() {
  const [{ data }] = useCoursesQuery();

  const MotionHeading = motion<HeadingProps>(Heading);

  const headingVariants = {
    visible: { opacity: 1, transition: { duration: 0.8, delay: 0 } },
    hidden: { opacity: 0 },
  };

  return (
    <Layout seo={{ title: "Galeria", desc: "CACV - Galeria" }}>
      <MotionHeading
        as="h1"
        size="lg"
        fontWeight="semibold"
        px={6}
        initial="hidden"
        animate="visible"
        variants={headingVariants}
      >
        Galeria
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
        Abaixo, estão registrados alguns de nossos momentos
      </MotionHeading>
      <Grid
        as="main"
        gap={2}
        my={8}
        px={6}
        w="100%"
        justifyItems="center"
        alignItems="center"
        gridTemplateColumns="repeat(auto-fit, minmax(286px, 1fr))"
      >
        {data?.courses.map((course) => (
          <>
            <GalleryPhoto
              key={course.title}
              src={course.image?.url}
              alt={course.title}
              width="286px"
              height="214.5px"
            />
            <GalleryPhoto
              key={course.title}
              src={course.image?.url}
              alt={course.title}
              width="286px"
              height="214.5px"
            />
            <GalleryPhoto
              key={course.title}
              src={course.image?.url}
              alt={course.title}
              width="286px"
              height="214.5px"
            />
          </>
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

    revalidate: 60 * 60 * 5, // 5 hours
  };
};
