import React from "react";
import Header from "@/components/navitems/Header";
import Hero from "@/components/Hero/Hero";
import BelowHero from "@/components/Hero/belowHero";
import PopularCategory from "@/components/Categories/PopularCategory";
import PostUser from "@/components/createUser/postUser";

const page = () => {
  return (
    <>
      <Header />
      <Hero/>
      <BelowHero/>
      <PopularCategory/>
      <PostUser/>
    </>
  );
};

export default page;
