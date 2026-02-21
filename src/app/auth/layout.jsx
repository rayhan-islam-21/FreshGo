import Container from "@/components/Container";
import LowerNav from "@/components/navitems/LowerNav";
import Navbar from "@/components/navitems/Navbar";
import React from "react";

const layout = ({children}) => {
  return (
    <>
      <header>
        <Navbar />
        <LowerNav />
      </header>
      <main>
        {children}
      </main>
    </>
  );
};

export default layout;
