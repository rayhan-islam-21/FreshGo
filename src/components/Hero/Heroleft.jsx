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
    <aside className="md:w-68 hidden">
      <ul className="space-y-1 border border-gray-200  shadow-sm overflow-hidden">
        {categories.map((cat) => {
          return (
            <li key={cat.slug}>
              <Link href={`/categories/${cat.slug}`}>
                <div className="flex items-center justify-start gap-1 p-3 hover:text-white hover:bg-[#00B307]">
                  <cat.icon className="inline-block mr-2" />
                  <span className="font-medium">{cat.name}</span>
                </div>
              </Link>
            </li>
          );
        })}
        {/* divider */}
        <hr className="border-t-2 border-gray-200" />
        <li>
          <button className="w-full text-left p-3 flex items-center gap-2 items-center hover:text-white hover:bg-[#00B307]">
            <FaPlus />
            View All Categories
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default HeroLeft;
