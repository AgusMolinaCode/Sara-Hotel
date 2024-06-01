// PresentationHeader.tsx
import React from "react";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCardsDemo";

const PresentationHeader = () => {
  return (
    <div className="">
      <div className="  rounded-lg shadow-md flex flex-col justify-center items-center px-3">
        <h1 className="text-3xl md:text-5xl max-w-xl text-gray-800 font-bold text-center mt-5 md:mt-10 border-b-4 border-orange-400 pb-4">
          Sara <span className="text-orange-400">Cabins</span> - Your Idyllic
          Escape in a Charming Village
        </h1>
        <p className="mt-5 text-gray-600 text-lg md:text-xl text-center max-w-4xl">
          Escape to Sara Cabins, where the beauty of nature and the charm of a
          quaint village come together to create an unforgettable experience.
          Our inviting cabin boasts a cozy atmosphere, modern comforts, and
          spectacular views, providing the ideal setting for relaxation and
          adventure. Whether you choose to hike the nearby trails, explore the
          local culture, or simply enjoy the peaceful surroundings, Sara Cabins
          offers a delightful retreat for all. Come and enjoy the serene beauty
          and warm hospitality of Sara Cabins.
        </p>
      </div>
      <InfiniteMovingCardsDemo />
    </div>
  );
};

export default PresentationHeader;
