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
      name: "Alojamiento Cómodo",
      description:
        "Disfruta de una cama cómoda y acogedora después de un largo día de aventuras.",
      icon: "/icons/t-shirt.svg",
    },
    {
      name: "Actividades Deportivas",
      description:
        "Disfruta de actividades deportivas como el baloncesto y más en nuestras instalaciones.",
      icon: "/icons/basketball.svg",
    },
    {
      name: "Proyecciones de Cine",
      description:
        "Relájate con nuestras proyecciones de cine nocturnas bajo las estrellas.",
      icon: "/icons/cinema.svg",
    },
    {
      name: "Naturaleza y Senderismo",
      description:
        "Explora los senderos naturales y disfruta de la belleza del bosque circundante.",
      icon: "/icons/camera.svg",
    },
    {
      name: "Bar y Restaurante",
      description:
        "Disfruta de una selección de cervezas y comidas deliciosas en nuestro bar y restaurante.",
      icon: "/icons/beer.svg",
    },
    {
      name: "Transporte",
      description:
        "Ofrecemos servicios de transporte para facilitar tus viajes alrededor de la zona.",
      icon: "/icons/bus.svg",
    },
  ];

  return (
    <div className="px-3 xl:px-20 py-2 md:py-14">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-600">
        Discover the services we offer
      </h2>
      <h1 className="text-4xl text-orange-400 font-bold pt-8">OUR SERVICES</h1>
      <div className="grid lg:grid-cols-2 gap-4 pt-16 justify-center place-items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center space-y-4"
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
        <div className="">
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
                          className="w-[500px] h-[500px] object-cover rounded-xl"
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
