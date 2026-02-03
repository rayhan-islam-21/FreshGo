"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  FaAppleAlt,
  FaCarrot,
  FaFish,
  FaDrumstickBite,
  FaGlassWhiskey,
  FaIceCream,
  FaBirthdayCake,
  FaCheese,
  FaUtensils,
  FaPlus,
  FaBars,
} from "react-icons/fa";

const categories = [
  { name: "Fresh Fruit", icon: FaAppleAlt, slug: "fruit" },
  { name: "Vegetables", icon: FaCarrot, slug: "vegetables" },
  { name: "River Fish", icon: FaFish, slug: "fish" },
  { name: "Chicken & Meat", icon: FaDrumstickBite, slug: "meat" },
  { name: "Drink & Water", icon: FaGlassWhiskey, slug: "drinks" },
  { name: "Yogurt & Ice Cream", icon: FaIceCream, slug: "dairy" },
  { name: "Cake & Bread", icon: FaBirthdayCake, slug: "bakery" },
  { name: "Butter & Cream", icon: FaCheese, slug: "cream" },
  { name: "Cooking", icon: FaUtensils, slug: "cooking" },
];

const HeroLeft = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="md:w-64 w-full bg-white border shadow-md">
      {/* Mobile toggle button */}
      <div className="md:hidden flex justify-between items-center px-4 py-3 border-b">
        <h2 className="font-semibold text-gray-700">Categories</h2>
        <button onClick={() => setIsOpen(!isOpen)}>
          <FaBars size={20} />
        </button>
      </div>

      {/* Category list */}
      <ul
        className={`flex flex-col overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0 md:max-h-full"
        }`}
      >
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = pathname === `/category/${cat.slug}`;
          return (
            <li key={cat.slug}>
              <Link
                href={`/category/${cat.slug}`}
                className={`flex items-center gap-4 mt-1 px-5 py-3 text-sm transition
                  ${
                    isActive
                      ? "bg-green-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                <Icon size={18} />
                <span>{cat.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Divider */}
      <div className="border-t mt-2" />

      {/* View all */}
      <Link
        href="/categories"
        className="flex items-center gap-3 px-5 py-3 text-sm text-gray-700 hover:bg-gray-100"
      >
        <FaPlus size={14} />
        View all Categories
      </Link>
    </aside>
  );
};

export default HeroLeft;
