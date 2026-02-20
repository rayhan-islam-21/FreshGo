import Image from "next/image";
import React from "react";
import Container from "../Container";
import { PiPhoneCallLight } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container className="flex flex-col md:flex-row items-center justify-between py-4 md:py-6 border-t border-t-[#999999]/10 gap-4 md:gap-6">
      
      {/* Logo */}
      <div>
       <Link className="flex items-center gap-2" href="/">
        <Image src="/nav-logo.png" alt="logo" width={30} height={30} />
        <h1 className="text-xl font-bold">FreshGo</h1>
       </Link>
      </div>

      {/* Search Bar */}
      <div className="flex w-full md:max-w-md relative">
        <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
        <input
          type="text"
          placeholder="Search for products"
          className="flex-1 px-10 py-2.5 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
        />
        <button className="px-4 py-2.5 bg-[#00B207] text-white font-medium border border-green-500 rounded-r-md hover:bg-green-600 transition-colors duration-200">
          Search
        </button>
      </div>

      {/* Call / Customer Service */}
      <div className="flex items-center gap-2">
        <PiPhoneCallLight size={40} className="text-gray-700" />
        <div className="text-sm">
          <p className="text-[#999999]">Customer Services</p>
          <p className="font-medium">+880 1989726823</p>
        </div>
      </div>

    </Container>
  );
};

export default Navbar;
