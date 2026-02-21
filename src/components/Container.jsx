import React from "react";

const Container = ({ children, className = "" }) => {
  return (
    <section
      className={`w-full max-w-screen-7xl mx-auto px-4 sm:px-6 lg:px-8  ${className}`}
    >
      {children}
    </section>
  );
};

export default Container;
