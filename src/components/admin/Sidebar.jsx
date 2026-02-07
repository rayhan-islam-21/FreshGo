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
      { name: "Dashboard", slug: "/dashboard", icon: <LuLayoutDashboard /> },
      { name: "Order Management", slug: "/orders", icon: <LuShoppingCart /> },
      { name: "Customers", slug: "/customers", icon: <LuUsers /> },
      { name: "Coupon Code", slug: "/coupons", icon: <LuTicket /> },
      { name: "Categories", slug: "/categories", icon: <LuLayers /> },
      { name: "Transaction", slug: "/transactions", icon: <LuWallet /> },
      { name: "Brand", slug: "/brands", icon: <LuStar /> },
    ],
  },
  {
    category: "Product",
    items: [
      { name: "Add Products", slug: "/products/add", icon: <LuPlus /> },
      { name: "Product Media", slug: "/products/media", icon: <LuImage /> },
      { name: "Product List", slug: "/products/list", icon: <LuPackage /> },
      {
        name: "Product Reviews",
        slug: "/products/reviews",
        icon: <LuMessageSquare />,
      },
    ],
  },
  {
    category: "Admin",
    items: [
      { name: "Admin role", slug: "/admin/roles", icon: <LuUserCheck /> },
      {
        name: "Control Authority",
        slug: "/admin/control",
        icon: <LuShieldCheck  />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div>
      {/* logo and bar  */}
      <div className="flex items-center border  justify-between p-3">
        <div className="flex items-center justify-center gap-1">
          <Image src="/nav-logo.png" alt="logo" width={20} height={20} />
          <h2>FreshGo</h2>
        </div>
        <div>
          <GoSidebarExpand size={20} />
        </div>
      </div>
      {/* links */}
      <div >
        <div>
          {sidebarLinks.map((side) => {
            return (
              <div className="border flex flex-col gap-3" key={side.category}>
                <h1 className="text-sm text-gray-800 border-b p-2">{`${side.category}`}</h1>
                <div>
                  {side.items.map((links) => {
                    return (
                      <div  key={links.name}>
                        <Link className="flex items-center justify-start gap-2" href={`${links.slug}`}>
                            <div>
                                {links.icon}
                            </div>
                          <h2>{links.name}</h2>
                        </Link>
                      </div>
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
