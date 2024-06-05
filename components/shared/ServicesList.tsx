"use client";

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const ServicesList = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  // Aquí puedes definir los servicios que ofreces
  const services = [
    {
      name: "Personalized Shirt",
      description:
        "We ensure your clothes are ready and organized for your stay.",
      icon: "/icons/t-shirt.svg",
    },
    {
      name: "Sports Activities",
      description:
        "Enjoy sports activities like basketball and more at our facilities.",
      icon: "/icons/basketball.svg",
    },
    {
      name: "Movie Projections",
      description: "Relax with our night movie projections under the stars.",
      icon: "/icons/cinema.svg",
    },
    {
      name: "Nature and Hiking",
      description:
        "Explore the natural trails and enjoy the beauty of the surrounding forest.",
      icon: "/icons/camera.svg",
    },
    {
      name: "Resto-Bar",
      description:
        "Enjoy a selection of beers and delicious food at our bar and restaurant.",
      icon: "/icons/beer.svg",
    },
    {
      name: "Transportation",
      description:
        "We offer transportation services to facilitate your travels around the area.",
      icon: "/icons/bus.svg",
    },
  ];

  return (
    <div className="px-3 xl:px-20 py-2 md:py-14">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-600">
        Discover the services we offer
      </h2>
      <h1 className="text-4xl text-black font-bold pt-2 lg:pt-8 border-b-4 border-orange-400 max-w-[14.55rem]">
        Our Services
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 lg:mt-16 justify-center place-items-center">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center space-y-6"
            >
              <Image
                src={service.icon}
                alt={service.name}
                width={16}
                height={16}
                className="w-12 h-12"
              />
              <h2 className="font-bold text-center text-sm md:text-lg">
                {service.name}
              </h2>
              <p className="font-normal text-center text-sm md:text-md text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="relative">
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-6xl"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div>
                      <div className="flex items-center justify-center">
                        <Image
                          src={`/images/carousel${index + 1}.jpg`}
                          alt={`Imagen ${index + 1}`}
                          width={500}
                          height={500}
                          className="w-full h-[350px] md:h-[550px] object-cover rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
