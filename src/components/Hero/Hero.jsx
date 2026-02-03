import React from "react";
import Container from "../Container";
import Image from "next/image";
import HeroLeft from "./Heroleft";
import { Button } from "../ui/button";
import { ArrowBigRight } from "lucide-react";

const Hero = () => {
  return (
    <Container className="flex flex-col md:flex-row justify-center gap-6 my-8">
      {/* Sidebar */}
      <div className="flex-0 md:block w-full">
        <HeroLeft />
      </div>

      {/* Hero Image with Overlay */}
      <div className="flex-1 relative h-96 md:h-128 w-full shadow-md overflow-hidden">
        <Image
          src="/hero-img.png"
          alt="Hero Image"
          fill
          className="object-cover"
          priority
        />
        <h1 className="absolute bottom-8 left-6 md:bottom-60 md:left-12 text-white font-bold text-3xl md:text-5xl leading-snug">
          Fresh & Healthy
          <br /> Organic Food
        </h1>
        <p className="absolute bottom-4 left-6 md:bottom-42  px-4 border-l-[#00B307] border-l-2 md:left-12 text-gray-400 font-semibold text-lg">
          SALE UP TO <br />{" "}
          <span className="text-xl text-white font-black">50% </span> OFF
        </p>
        <Button size="lg" className="absolute rounded-xl bottom-4 w-52 md:bottom-25 md:left-12 bg-green-600 text-white px-6 py-3 font-semibold  hover:bg-green-700 transition">
            Shop Now <ArrowBigRight/>
        </Button>
      </div>
    </Container>
  );
};

export default Hero;
