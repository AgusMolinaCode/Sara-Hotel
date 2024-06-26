"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
// import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <nav className="md:hidden absolute top-6 right-3  lg:left-20  z-10">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/icons/menu.svg"
            alt="Menu"
            width={35}
            height={35}
            className="cursor-pointer bg-white/50 rounded-full "
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <h1 className="text-3xl font-bold">SM Cabins</h1>

          <Separator className="border border-gray-50" />
          <Link href="#home" className="text-black font-semibold">
            Home
          </Link>
          <Link href="#services" className="text-black font-semibold">
            Services
          </Link>
          <Link href="#experiences" className="text-black font-semibold">
            Experiences
          </Link>
          <Link href="#contact" className="text-black font-semibold">
            Contact
          </Link>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
