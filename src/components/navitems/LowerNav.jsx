import React from "react";
import Container from "../Container";
import { HiOutlineBars3 } from "react-icons/hi2";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoPerson } from "react-icons/go";

const LowerNav = () => {
  return (
    <Container>
      {/* all categories */}
      <div>
        <button>
          <HiOutlineBars3 />
        </button>
        <h2>All Categories</h2>
      </div>
      {/* nav items */}
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/pages">Pages</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about-us">About Us</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </nav>
      {/*cart icons*/}
      <div>
        <Link href="/wishlist">
          <FaRegHeart size={20} />
        </Link>
        <Link href="/cart"  >
          <HiOutlineShoppingBag size={20} />
        </Link>
        <Link href="/profile">
          <GoPerson size={20} />
        </Link>
      </div>
    </Container>
  );
};

export default LowerNav;
