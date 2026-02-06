import React from "react";
import Topnav from "./Topnav";
import Navbar from "./Navbar";
import LowerNav from "./LowerNav";

const Header = () => {


  const createUser = async () => {
    const res = await api.post("/users", {
      name: "Alice",
      email: "alice@gmail.com",
      age: 25,
      isMarried: false,
      nationality: "USA",
    });

    console.log(res.data);
  };

  return (
    <>
      <Topnav />
      <Navbar />
      <LowerNav />
    </>
  );
};

export default Header;
