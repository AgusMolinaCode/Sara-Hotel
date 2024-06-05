"use client";

import React, { useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import Image from "next/image";

const Contact = () => {
  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPS_ID || "";
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v12", // style URL
      center: [-71.3, -41.14], // starting position [lng, lat]
      zoom: 13, // starting zoom
    });
    const marker1 = new mapboxgl.Marker().setLngLat([-71.3, -41.14]).addTo(map);

    const popup1 = new mapboxgl.Popup({ offset: 25 });
    const popupContent = document.createElement("div");
    popupContent.innerHTML = `<strong>SM Cabins</strong><p>Huemul 2256, CP 8400 Bariloche </p>`;
    popup1.setDOMContent(popupContent);
    marker1.setPopup(popup1);
    marker1.togglePopup();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-3 xl:px-20 py-2 md:py-14">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-600">
        We're here to help
      </h2>
      <h1 className="text-4xl text-black font-bold pt-2 lg:pt-8 border-b-4 border-orange-400 max-w-[12.7rem]">
        Contact Us
      </h1>
      <div className="mt-6 lg:mt-14">
        <div
          id="map"
          aria-hidden="true"
          className="px-2 h-[600px] w-full md:w-full rounded-3xl cursor-pointer"
        />
        <div className="flex flex-wrap gap-4 items-center justify-center mt-8">
          <a
            href="mailto:info@smcabins.com"
            className="flex items-center space-x-2 cursor-pointer hover:underline"
          >
            <Image
              width={10}
              height={10}
              src="/icons/mail.svg"
              alt="Email icon"
              className="w-10 h-10"
            />
            <p>info@smcabins.com</p>
          </a>
          <a
            href="https://wa.me/11234567890"
            target="_blank"
            className="flex items-center space-x-2 cursor-pointer hover:underline"
          >
            <Image
              width={10}
              height={10}
              src="/icons/whatsapp.svg"
              alt="WhatsApp icon"
              className="w-10 h-10"
            />
            <p>+1 (123) 4510-7890</p>
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Huemul+2256,+CP+8400+Bariloche"
            target="_blank"
            className="flex items-center space-x-2 cursor-pointer hover:underline"
          >
            <Image
              width={10}
              height={10}
              src="/icons/location.svg"
              alt="Location icon"
              className="w-10 h-10"
            />
            <p>Huemul 2256, CP 8400 Bariloche</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
