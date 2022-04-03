import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box mt="68px">{children}</Box>
    </>
  );
};

export default Layout;
