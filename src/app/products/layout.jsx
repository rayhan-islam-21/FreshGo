import React from "react";
import Container from "@/components/Container";
import LowerNav from "@/components/navitems/LowerNav";
import Navbar from "@/components/navitems/Navbar";

const Layout = ({ children }) => {
  return (
    <Container>
      <header>
        <Navbar />
        <LowerNav />
      </header>

      <main id="main-content">{children}</main>
    </Container>
  );
};

export default Layout;
