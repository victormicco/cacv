import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box mt="68px">{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
