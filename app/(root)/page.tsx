import React from "react";
import { NavbarDemo } from "@/components/shared/Navbar";
import Image from "next/image";
import { RentForm } from "@/components/shared/RentForm";

const page = () => {
  return (
    <div className="">
        <h1 className="text-3xl font-bold text-white absolute top-6 left-3 lg:left-20 flex justify-center z-20">
          SM <span className="text-orange-400 pl-1">Cabins</span>
        </h1>
      <NavbarDemo />
      <div className="relative">
        <Image
          src="/images/cabaña1.jpg" // replace with your image path
          width={1920}
          height={1080}
          className="hidden lg:block max-h-[100vh] w-full object-cover"
          alt="Background image"
        />
        <Image
          src="/images/cabaña2.jpg" // replace with your image path
          width={1920}
          height={1080}
          className="block lg:hidden h-[100vh] w-full object-cover"
          alt="Background image"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-transparent flex justify-center lg:justify-start items-center px-3 lg:px-20 ">
          <div className="lg:pt-44">
            <h1 className="text-5xl max-w-xl text-white mb-4 font-bold">
              Relax in the Heart of{" "}
              <span className="text-orange-400">Nature</span>
            </h1>
            <h2 className="text-xl max-w-lg text-gray-300">
              Perfect getaways for those seeking peace and tranquility, away
              from the urban hustle and bustle, in a serene and revitalizing
              natural environment.
            </h2>
            <div className="my-10 bg-gray-300/50 backdrop-blur-sm  rounded-2xl">
              <RentForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
