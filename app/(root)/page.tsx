import {NavbarDemo} from "@/components/shared/Navbar";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="">
      <NavbarDemo />
      <div className="">
        <Image
            src="/images/cabaña1.jpg"
            alt="hero"
            layout="fill"
          
            
            className=""
        />
      </div>
    </div>
  );
};

export default page;
