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
    <div className="bg-[#333333]  mx-auto  ">
      <Container className="flex items-center justify-between h-14">
        
        {/* LEFT: Categories */}
        <div className="flex items-center gap-2 min-w-55">
          <button className="bg-[#00B307] p-3 text-white">
            <HiOutlineBars3 size={32} />
          </button>

          <span className="text-sm font-medium text-white">
            All Categories
          </span>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                <IoIosArrowDown size={16} />
              </Button>
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

        {/* CENTER: Navigation */}
        <nav className="hidden md:block  mx-10 px-8 bg-[#1A1A1A] py-4">
          <ul className="flex items-center space-x-10 text-sm font-medium">
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

        {/* RIGHT: Icons */}
        <div className="flex items-center bg-[#1A1A1A] py-3 px-8 flex-1 justify-end gap-5">
          <Link href="/wishlist" className="text-white hover:text-green-500">
            <FaRegHeart size={25} />
          </Link>

          <Link href="/cart" className="text-white hover:text-green-500">
            <HiOutlineShoppingBag size={25} />
          </Link>

          <Link href="/profile" className="text-white hover:text-green-500">
            <GoPerson size={25} />
          </Link>
        </div>

      </Container>
    </div>
  );
};

export default LowerNav;
