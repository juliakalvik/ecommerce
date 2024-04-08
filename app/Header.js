"use client";

import React from "react";
import Link from "next/link";
import useCart from "./(store)/store";
import { Modal } from "./Modal";

export default function Header() {
    const cartItems = useCart(state => state.cart)
    const openModal = useCart(state => state.openModal)
    const setOpenModal = useCart(state => state.setOpenModal)
  return (
    <header className="sticky top-0 p-6 bg-white border-b border-solid border-blue-900 shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8 flex items-center justify-between">
        {openModal && (
            <Modal />
        )}
      <Link href={"/"}>
        <h1 className="cursor-pointer hover:scale-110">JulezShoez</h1>
      </Link>
      <div className="flex flex-end gap-8 items-center">
        <Link href={"/contact"}>
          <h1 className="cursor-pointer hover:scale-110">Contact</h1>
        </Link>
        <div onClick={setOpenModal} className="relative grid place-items-center">
            {cartItems.length > 0 && (
                <div className="asbolute pointer-events-none aspect-square h-4 sm:h-5 grid place-items-center top-0 right-0 bg-blue-400 text-white rounded-full -translate-y-0 translate-x-full">
                    <p className="text-xs sm:text-sm">{cartItems.length}</p>
                </div>
            )}
            <i className="fa-solid fa-cart-shopping cursor-pointer hover:text-slate-500"></i>
        </div>
      </div>
    </header>
  );
}

