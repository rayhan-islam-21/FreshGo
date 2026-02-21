"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, setOpen } from "@/store/slices/cartSlice";
import Image from "next/image";
import { ImCross } from "react-icons/im";
import { Separator } from "../ui/separator";
import { IoBagCheckOutline, IoCartOutline } from "react-icons/io5";

const SideCart = () => {
  const dispatch = useDispatch();
  const { isOpen, items } = useSelector((state) => state.cart);
  return (
    <div>
      <Sheet open={isOpen} onOpenChange={(value) => dispatch(setOpen(value))}>
        <SheetContent
          side="right"
          className="bg-white flex min-w-sm p-5 mx-auto"
        >
          <SheetHeader>
            <SheetTitle className="">
              Cart Items( {`${items.length}`})
            </SheetTitle>
          </SheetHeader>
          <div className="flex-1">
            {items.map((pro) => {
              return (
                <div
                  key={pro.id}
                  className="flex gap-4 border-b border-b-gray-300/50 space-y-4 items-center justify-between"
                >
                  <div className="   place-items-center">
                    <Image
                      src={pro.image}
                      width={70}
                      height={70}
                      alt="images"
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-sm">{pro.name}</h1>
                    <p className="text-sm text-gray-400">
                      {pro.quantity} kg x{" "}
                      <span className="font-bold text-black">
                        {pro.finalprice}
                      </span>{" "}
                    </p>
                  </div>
                  <Button
                    size="xs"
                    onClick={() => dispatch(removeFromCart(pro.id))}
                    className="p-2 hover:border-black/20 hover:border rounded"
                  >
                    <ImCross className=" text-red-400" size={16} />
                  </Button>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col w-full gap-2.5 ">
            <Button
              size="lg"
              variant="outline"
              className="bg-green-500 cursor-pointer  rounded-sm shadow p-2 text-white"
            >
              <IoBagCheckOutline size={16} />
              <span className="text-sm">Checkout</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white rounded-sm hover:bg-green-400 hover:text-white cursor-pointer shadow-sm text-green-500 border-0"
            >
              <IoCartOutline />
              <span className="text-sm ">Go To Cart</span>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SideCart;
