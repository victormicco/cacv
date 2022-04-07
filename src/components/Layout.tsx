import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

type SEO = {
  title: string;
  desc: string;
};

type LayoutProps = {
  seo: SEO;
  children: ReactNode;
};

export default function Layout({ children, seo }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.desc} />
      </Head>
      <Navbar />
      <Box mt="68px">{children}</Box>
      <Footer />
    </>
  );
}
