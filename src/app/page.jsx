import React from "react";
import Header from "@/components/navitems/Header";
import Hero from "@/components/Hero/Hero";
import BelowHero from "@/components/Hero/belowHero";

const page = () => {
  return (
    <>
      <Header />
      <Hero/>
      <BelowHero/>
    </>
  );
};

export default page;
