import React from "react";
import Container from "../Container";
import Link from "next/link";

const PopularProducts = () => {

    




  return (
    <section>
      <Container>
        <div className="flex items-center justify-between">
          <h1>Popular Categories</h1>
          <Link
            href="/categories"
            className="text-green-600 hover:text-green-700 font-medium transition"
          >
            View All →
          </Link>
        </div>
        <div>
            {

            }
        </div>
      </Container>
    </section>
  );
};

export default PopularProducts;
