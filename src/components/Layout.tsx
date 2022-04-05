import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

type LayoutProps = {
  title: string;
  children: ReactNode;
};

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Box mt="68px">{children}</Box>
      <Footer />
    </>
  );
}
