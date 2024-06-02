import React from "react";
import { LayoutGridDemo } from "./LayoutGridDemo";

const ExperienceList = () => {
  return (
    <div className="px-3 xl:px-20 py-2 md:py-14">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-600">
        Discover the experiences we offer
      </h2>
      <h1 className="text-4xl text-black font-bold pt-8 border-b-4 border-orange-400 max-w-[18.8rem]">
        Our Experiences
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-14">
        <LayoutGridDemo/>
        <div className="lg:col-span-1">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mt-8">
            All the experiences we offer
          </h2>
          <p className="text-lg text-gray-500 mt-2 mb-8">
            Here you can find all the experiences we offer. Choose the one that
            suits you best and enjoy your stay.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceList;