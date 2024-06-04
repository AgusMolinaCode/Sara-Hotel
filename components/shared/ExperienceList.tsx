import React from "react";
import { LayoutGridDemo } from "./LayoutGridDemo";
import { experiences } from "@/lib/experiences";

const ExperienceList = () => {
  return (
    <div className="px-3 xl:px-20 py-2 md:py-14">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-600">
        Discover the experiences we offer
      </h2>
      <h1 className="text-4xl text-black font-bold pt-8 border-b-4 border-orange-400 max-w-[18.8rem]">
        Our Experiences
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:mt-14">
        <LayoutGridDemo />
        <div className="hidden lg:block lg:col-span-1">
          {experiences.map((experience, index) => (
            <div key={index}>
              <h2 className="text-xl md:text-2xl font-semibold text-black mt-4">
                {experience.name}
              </h2>
              <h3 className="text-lg md:text-xl font-semibold text-gray-500 mt-2">
                {experience.title}
              </h3>
              <p className="text-lg text-gray-400 mt-4 mb-4 border-b-2">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceList;
