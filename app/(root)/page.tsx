import React from "react";
import { NavbarDemo } from "@/components/shared/Navbar";
import Image from "next/image";
import {RentForm} from "@/components/shared/RentForm";

const page = () => {
  return (
    <div className="">
      <NavbarDemo />
      <div className="relative">
        <Image
          src="/images/cabaña1.jpg" // replace with your image path
          width={1920}
          height={1080}
          className="max-h-[100vh] w-full object-cover"
          alt="Background image"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-transparent flex justify-start items-center px-3 sm:px-20">
          <div>
            <h1 className="text-5xl max-w-xl text-white mb-4 font-bold">
              Relájate en el Corazón de la{" "}
              <span className="text-orange-400">Naturaleza</span>
            </h1>
            <h2 className="text-xl max-w-lg text-gray-300">
              Escapadas perfectas para quienes buscan paz y tranquilidad,
              alejados del bullicio urbano, en un entorno natural sereno y
              revitalizante.
            </h2>
            <div className="my-10 bg-gray-300/50  backdrop-blur-sm  rounded-2xl">
                <RentForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
