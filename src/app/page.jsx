import React from "react";
import Header from "@/components/navitems/Header";
import Hero from "@/components/Hero/Hero";
import BelowHero from "@/components/Hero/belowHero";
import PopularCategory from "@/components/Categories/PopularCategory";

const page = () => {
  return (
    <>
      <Header />
      <Hero/>
      <BelowHero/>
      <PopularCategory/>
    </>
  );
};

export default page;
