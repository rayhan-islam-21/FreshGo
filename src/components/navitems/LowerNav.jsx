import Container from "../Container";
import Link from "next/link";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoPerson } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

const LowerNav = () => {
  return (
    <div className="">
      <Container className="flex items-center justify-between h-16">

        {/* LEFT */}
        <div className="flex h-full items-center bg-[#333333] gap-2 min-w-55">
          <button className="bg-[#00B307] h-full px-3 text-white flex items-center">
            <HiOutlineBars3 size={28} />
          </button>

          <span className="text-sm font-medium text-white">
            All Categories
          </span>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="text-white p-5 h-full hover:bg-white/10"
              >
                <IoIosArrowDown size={20} />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start">
              {[
                "fruit",
                "vegetable",
                "fish",
                "drinks",
                "cooking",
                "bakery",
              ].map((item) => (
                <DropdownMenuItem key={item} asChild>
                  <Link href={`/category/${item}`}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* CENTER */}
        <nav className="hidden md:flex h-full bg-[#1A1A1A] px-8">
          <ul className="flex items-center gap-10 text-sm font-medium">
            {[
              { name: "Home", href: "/" },
              { name: "Shop", href: "/shop" },
              { name: "Pages", href: "/pages" },
              { name: "Blog", href: "/blog" },
              { name: "About Us", href: "/about-us" },
              { name: "Contact Us", href: "/contact-us" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-white hover:text-green-500 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT */}
        <div className="flex flex-1 h-full items-center justify-end bg-[#1A1A1A] px-8 gap-7">
          <Link href="/wishlist" className="text-white hover:text-green-500">
            <FaRegHeart size={22} />
          </Link>

          <Link href="/cart" className="text-white hover:text-green-500">
            <HiOutlineShoppingBag size={22} />
          </Link>

          <Link href="/profile" className="text-white hover:text-green-500">
            <GoPerson size={22} />
          </Link>
        </div>

      </Container>
    </div>
  );
};

export default LowerNav;
