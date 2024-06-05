import React from "react";
import Image from "next/image";
import { RentForm } from "@/components/shared/RentForm";
import PresentationHeader from "@/components/shared/PresentationHeader";
import ServicesList from "@/components/shared/ServicesList";
import ExperienceList from "@/components/shared/ExperienceList";
import Contact from "@/components/shared/Contact";

const page = () => {
  return (
    <div className="bg-gray-100">
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
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-transparent grid justify-center lg:justify-start w-full items-center px-3 lg:px-20">
          <div className="pt-22 lg:pt-32 flex flex-col justify-start">
            <h1 className="text-3xl md:text-5xl max-w-xl text-white mb-2 md:mb-4 font-bold">
              Relax in the Heart of{" "}
              <span className="text-orange-400">Nature</span>
            </h1>
            <h2 className="text-lg md:text-xl max-w-lg text-gray-300">
              Perfect getaways for those seeking peace and tranquility, away
              from the urban hustle and bustle, in a serene and revitalizing
              natural environment.
            </h2>
            <div className="my-4 md:my-10 bg-gray-300/50 backdrop-blur-sm  rounded-2xl">
              <RentForm />
            </div>
          </div>
        </div>
      </div>
      <PresentationHeader />
      <ServicesList />
      <ExperienceList />
      <Contact />
    </div>
  );
};

export default page;
