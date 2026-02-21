import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../Container";

const Footer = () => {
  // Data arrays for cleaner mapping
  const navigation = {
    myAccount: [
      { name: "My Account", href: "/account" },
      { name: "Order History", href: "/orders" },
      { name: "Shopping Cart", href: "/cart" },
      { name: "Wishlist", href: "/wishlist" },
    ],
    helps: [
      { name: "Contact", href: "/contact" },
      { name: "Faqs", href: "/faqs" },
      { name: "Terms & Condition", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
    proxy: [
      { name: "About", href: "/about" },
      { name: "Shop", href: "/shop" },
      { name: "Product", href: "/products" },
      { name: "Track Order", href: "/track-order" },
    ],
    categories: [
      { name: "Fruit & Vegetables", href: "/category/fruits-vegetables" },
      { name: "Meat & Fish", href: "/category/meat-fish" },
      { name: "Bread & Bakery", href: "/category/bread-bakery" },
      { name: "Beauty & Health", href: "/category/beauty-health" },
    ],
  };

  return (
    <footer className="bg-[#181818] text-[#999999] pt-16 pb-8 px-4 md:px-12 lg:px-24">
      <Container className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Brand Section */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-1 mb-4 group">
            <div className="w-8 h-8  rounded-full flex items-center justify-center">
              <div className="w-4 h-4  ">
                <Image
                  src="/nav-logo.png"
                  width={100}
                  height={100}
                  alt="footer logo"
                />
              </div>
            </div>
            <span className="text-white text-2xl font-bold tracking-tight">
              Ecobazar
            </span>
          </Link>
          <p className="text-sm leading-relaxed mb-6">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui, eget bibendum magna congue nec.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href="tel:2195550114"
              className="flex items-center gap-2 border-b border-[#00B207] w-fit pb-1 text-white hover:text-[#00B207] transition-colors"
            >
              <span className="font-medium text-sm">(219) 555-0114</span>
            </Link>
            <span className="text-xs">or</span>
            <Link
              href="mailto:Proxy@gmail.com"
              className="flex items-center gap-2 border-b border-[#00B207] w-fit pb-1 text-white hover:text-[#00B207] transition-colors"
            >
              <span className="font-medium text-sm">Proxy@gmail.com</span>
            </Link>
          </div>
        </div>

        {/* Dynamic Link Columns */}
        <div>
          <h4 className="text-white font-semibold mb-5">My Account</h4>
          <ul className="space-y-3 text-sm">
            {navigation.myAccount.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-5">Helps</h4>
          <ul className="space-y-3 text-sm">
            {navigation.helps.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-5">Proxy</h4>
          <ul className="space-y-3 text-sm">
            {navigation.proxy.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-5">Categories</h4>
          <ul className="space-y-3 text-sm">
            {navigation.categories.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>Ecobazar eCommerce © 2021. All Rights Reserved</p>

        <div className="flex gap-2 items-center">
          {/* Using Next.js Image component would be better if you have the local files */}
          <div className="flex gap-3 grayscale opacity-60 hover:opacity-100 transition-opacity">
            <span className="p-1 border border-gray-700 rounded text-white">
              Apple Pay
            </span>
            <span className="p-1 border border-gray-700 rounded text-white">
              Visa
            </span>
            <span className="p-1 border border-gray-700 rounded text-white">
              Mastercard
            </span>
            <span className="p-1 border border-gray-700 rounded text-white">
              Secure Payment
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
