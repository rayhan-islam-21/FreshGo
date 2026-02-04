import React from "react";
import Container from "../Container";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <Container className="mt-4">
      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-[auto] lg:min-h-[720px]">

        {/* Left Big Banner */}
        <div className="lg:col-span-2 relative rounded-lg overflow-hidden bg-[url('/banner.png')] bg-cover bg-center min-h-[320px] sm:min-h-[420px]">
          <div className="relative z-10 p-5 sm:p-6 md:p-10 h-full flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
              Fresh & Healthy <br /> Organic Food
            </h1>

            <div className="border-l-2 border-l-[#84D187] px-4 mt-4">
              <h3 className="flex flex-wrap items-center gap-3 text-sm sm:text-base md:text-xl font-medium text-white">
                Sale up to
                <Button
                  className="bg-[#FF8A00] text-white border-none hover:bg-[#e67e00]"
                  size="sm"
                >
                  30% Off
                </Button>
              </h3>
              <p className="text-white text-xs py-2">
                Free shipping on all your order.
              </p>
            </div>

            <Button
              size="lg"
              className="bg-white w-fit text-sm font-semibold rounded-full mt-6 text-[#00B307] border-none"
            >
              Shop Now <FaArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Right Side Banners */}
        <div className="grid grid-rows-2 gap-4">

          {/* Top Right */}
          <div className="relative rounded-lg p-4 sm:p-6 md:p-8 overflow-hidden bg-[url('/rightbg1.png')] bg-cover bg-center min-h-[200px]">
            <div className="relative z-10 flex flex-col gap-2">
              <h1 className="text-sm sm:text-base font-bold text-black uppercase">
                Summer Sale
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black">
                <span className="text-[#00B307]">75%</span> Off
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm">
                Only Fruit & Vegetable
              </p>
            </div>

            <Link
              href="/products"
              className="mt-3 w-fit text-[#00B307] text-sm font-semibold flex items-center gap-2"
            >
              Shop now <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Bottom Right */}
          <div className="relative rounded-lg overflow-hidden bg-[url('/rightbg2.png')] bg-cover bg-center min-h-[240px]">
            <div className="relative z-10 flex flex-col p-4 sm:p-6 md:p-8 gap-3 items-center justify-center h-full text-center">
              <p className="text-[#00B307] font-semibold text-sm">
                Best Deal
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">
                Special Products Deal of the Month
              </h1>
              <Link
                href="/products"
                className="text-[#00B307] text-sm font-semibold flex items-center gap-2"
              >
                Shop now <FaArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </Container>
  );
};

export default Hero;
