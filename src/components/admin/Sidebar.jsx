"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@/store/slices/uiSlice";
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
import { usePathname } from "next/navigation";

export const sidebarLinks = [
  {
    category: "Main menu",
    items: [
      {
        name: "Dashboard",
        slug: "/admin/dashboard",
        icon: <LuLayoutDashboard size={20} />,
      },
      {
        name: "Order Management",
        slug: "/admin/orders",
        icon: <LuShoppingCart size={20} />,
      },
      {
        name: "Customers",
        slug: "/admin/customers",
        icon: <LuUsers size={20} />,
      },
      {
        name: "Coupon Code",
        slug: "/admin/coupons",
        icon: <LuTicket size={20} />,
      },
      {
        name: "Categories",
        slug: "/admin/categories",
        icon: <LuLayers size={20} />,
      },
      {
        name: "Transaction",
        slug: "/admin/transactions",
        icon: <LuWallet size={20} />,
      },
      { name: "Brand", slug: "/admin/brands", icon: <LuStar size={20} /> },
    ],
  },
  {
    category: "Product",
    items: [
      {
        name: "Add Products",
        slug: "/admin/products/add",
        icon: <LuPlus size={20} />,
      },
      {
        name: "Product Media",
        slug: "/admin/products/media",
        icon: <LuImage size={20} />,
      },
      {
        name: "Product List",
        slug: "/admin/products/list",
        icon: <LuPackage size={20} />,
      },
      {
        name: "Product Reviews",
        slug: "/admin/products/reviews",
        icon: <LuMessageSquare size={20} />,
      },
    ],
  },
  {
    category: "Admin",
    items: [
      {
        name: "Admin role",
        slug: "/admin/roles",
        icon: <LuUserCheck size={20} />,
      },
      {
        name: "Control Authority",
        slug: "/admin/control",
        icon: <LuShieldCheck size={20} />,
      },
    ],
  },
];

const Sidebar = () => {
  const pathName = usePathname();
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen);

  return (
    <div className="w-full  overflow-hidden p-3 border-r border-r-gray-200/90 ">
      {/* logo and bar  */}
      <div className="flex items-center mb-3 justify-between p-3">
        <Link
          href="/"
          className={`flex ${!isSidebarOpen && "hidden"} items-center justify-center gap-1`}
        >
          <Image src="/nav-logo.png" alt="logo" width={20} height={20} />
          <h2 className="text-lg text-[#4EA674] font-semibold ">FreshGo</h2>
        </Link>
        <div>
          {isSidebarOpen ? (
            <GoSidebarExpand
              size={20}
              className="cursor-pointer text-green-600"
              onClick={() => dispatch(toggleSidebar())}
            />
          ) : (
            <GoSidebarCollapse
              size={20}
              className="cursor-pointer text-green-600"
              onClick={() => dispatch(toggleSidebar())}
            />
          )}
        </div>
      </div>
      {/* links */}
      <div>
        <div>
          {sidebarLinks.map((side) => {
            return (
              <div className=" flex flex-col gap-0.5 mt-1 " key={side.category}>
                {isSidebarOpen && (
                  <h1 className="text-sm text-start font-semibold px-3 py-2 text-gray-500">
                    {side.category}
                  </h1>
                )}
                <div
                  className={`flex  flex-col ${isSidebarOpen ? "gap-2" : "gap-2.5"}`}
                >
                  {side.items.map((links) => {
                    return (
                      <Link
                        href={`${links.slug}`}
                        className=""
                        key={links.name}
                      >
                        <div
                          className={`flex items-center p-2.5 rounded-sm ${pathName === links.slug ? "bg-[#4EA674] text-white" :"hover:bg-[#cdcecd] hover:text-white"} 
  ${isSidebarOpen ? "gap-2 justify-start" : "justify-center"}`}
                        >
                          <div>{links.icon}</div>
                          {isSidebarOpen && <h2>{links.name}</h2>}
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
