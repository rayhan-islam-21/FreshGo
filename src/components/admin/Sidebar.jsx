import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoSidebarExpand } from "react-icons/go";
import {
  LuLayoutDashboard,
  LuShoppingCart,
  LuUsers,
  LuTicket,
  LuLayers,
  LuWallet,
  LuStar,
  LuImage,
  LuPackage,
  LuMessageSquare,
  LuUserCheck,
  LuShieldCheck,
  LuPlus,
} from "react-icons/lu";

export const sidebarLinks = [
  {
    category: "Main menu",
    items: [
      { name: "Dashboard", slug: "/dashboard", icon: <LuLayoutDashboard size={20} /> },
      { name: "Order Management", slug: "/orders", icon: <LuShoppingCart size={20} /> },
      { name: "Customers", slug: "/customers", icon: <LuUsers size={20} /> },
      { name: "Coupon Code", slug: "/coupons", icon: <LuTicket size={20} /> },
      { name: "Categories", slug: "/categories", icon: <LuLayers size={20} /> },
      { name: "Transaction", slug: "/transactions", icon: <LuWallet size={20} /> },
      { name: "Brand", slug: "/brands", icon: <LuStar size={20} /> },
    ],
  },
  {
    category: "Product",
    items: [
      { name: "Add Products", slug: "/products/add", icon: <LuPlus size={20} /> },
      { name: "Product Media", slug: "/products/media", icon: <LuImage size={20} /> },
      { name: "Product List", slug: "/products/list", icon: <LuPackage size={20} /> },
      {
        name: "Product Reviews",
        slug: "/products/reviews",
        icon: <LuMessageSquare size={20} />,
      },
    ],
  },
  {
    category: "Admin",
    items: [
      { name: "Admin role", slug: "/admin/roles", icon: <LuUserCheck size={20} /> },
      {
        name: "Control Authority",
        slug: "/admin/control",
        icon: <LuShieldCheck size={20} />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="w-full p-3 ">
      {/* logo and bar  */}
      <div className="flex items-center mb-3 justify-between p-3">
        <Link href="/" className="flex items-center justify-center gap-1">
          <Image src="/nav-logo.png" alt="logo" width={20} height={20} />
          <h2 className="text-lg text-[#4EA674] font-semibold ">FreshGo</h2>
        </Link>
        <div>
          <GoSidebarExpand className="text-green-600" size={20} />
        </div>
      </div>
      {/* links */}
      <div>
        <div>
          {sidebarLinks.map((side) => {
            return (
              <div className=" flex flex-col gap-0.5 mt-1 " key={side.category}>
                <h1 className="text-sm text-start px-3    py-2 text-gray-800 ">{`${side.category}`}</h1>
                <div>
                  {side.items.map((links) => {
                    return (
                      <Link
                        href={`${links.slug}`}
                        className=""
                        key={links.name}
                      >
                        <div className="flex  items-center justify-start gap-2  hover:bg-[#4EA674] hover:text-[#FFFFFF] p-2.5 rounded-sm bg-[#FFFFFF]">
                          <div >{links.icon}</div>
                          <h2>{links.name}</h2>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
