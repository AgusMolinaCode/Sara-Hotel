"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2 hidden lg:block" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "md:fixed top-10 inset-x-0 max-w-lg border rounded-full border-gray-600 mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href="#home" className="text-white">
          Home
        </Link>
        <Link href="#services" className="text-white">
          Services
        </Link>
        <Link href="#experiences" className="text-white">
          Experiences
        </Link>
        <Link href="#contact" className="text-white">
          Contact
        </Link>
      </Menu>
    </div>
  );
}
