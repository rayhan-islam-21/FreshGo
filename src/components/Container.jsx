import React from "react";

const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full max-w-screen-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
