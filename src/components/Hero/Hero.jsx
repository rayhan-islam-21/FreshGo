import React from "react";
import Container from "../Container";
import HeroLeft from "./Heroleft";
import Image from "next/image";

const Hero = () => {
  return (
    <Container className="flex  justify-center gap-10   my-8">
      <HeroLeft />
      <div className="flex-1  h-128 w-full relative      shadow-md">
        <Image
          src="/hero-img.png"
          alt="Hero Image"
            fill
          className="object-cover    mx-auto"
          priority
        />
      </div>
    </Container>
  );
};

export default Hero;
