import React from "react";
import { CiLocationOn } from "react-icons/ci";
import Container from "../Container";

const Topnav = () => {
  return (
    <Container className="border-b border-gray-300">
      <h1 className="text-xs text-[#808080] flex items-center justify-start gap-1 py-0.5">
        <span>
          <CiLocationOn size={20} />
        </span>
        Store Location: Matikata Bazar,Dhaka,Bangladesh
      </h1>
    </Container>
  );
};

export default Topnav;
