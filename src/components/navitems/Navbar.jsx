import Image from "next/image";
import React from "react";
import Container from "../Container";
import { PiPhoneCallLight } from "react-icons/pi";
import { IoCall, IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <Container className="flex items-center py-6 justify-between border-t border-t-[#999999]/1 ">
      {/* logo */}
      <div className="flex items-center justify-center gap-1">
        <Image src="/nav-logo.png" alt="logo" width={30} height={30} />
        <h1 className="text-xl font-bold">FreshGo</h1>
      </div>
      {/* search bar */}
      <div className="flex w-full relative max-w-sm mx-auto">
        <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />

        <input
          type="text"
          placeholder="Search for products"
          className="
      flex-1
      px-8 py-2.5
      text-sm
      border border-gray-300
      rounded-l-md
      focus:outline-none focus:ring-0 focus:ring-green-500
      placeholder-gray-400
    "
        />
        <button
          className="
      px-4
      py-2.5
      text-sm
      bg-[#00B207] text-white font-medium
      border border-green-500
      rounded-r-md
      hover:bg-green-600
      transition-colors duration-200
    "
        >
          Search
        </button>
      </div>

      {/* call icons */}
      <div className="flex items-center justify-center gap-2">
        <PiPhoneCallLight size={40} className="text-xl text-gray-700" />
        <div>
          <p className="text-[#999999] text-sm">Customer Services</p>
          <p className="text-sm">+880 1989726823</p>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
