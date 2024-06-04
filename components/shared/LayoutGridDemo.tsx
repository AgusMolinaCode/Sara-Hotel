"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen w-full lg:col-span-2">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div className="bg-black/90 w-full px-4 py-4">
      <p className="font-bold text-4xl text-white">Cabalgata en la Montaña</p>
      <p className="font-normal text-base text-white">
        Aventura a Caballo en la Montaña
      </p>
      <p className="font-normal text-base max-w-lg text-gray-400">
        Explora los impresionantes paisajes montañosos a lomos de un noble
        caballo. Sumérgete en la naturaleza y descubre vistas panorámicas que te
        dejarán sin aliento.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div className="bg-black/90 w-full px-4 py-4">
      <p className="font-bold text-4xl text-white">Deslizador Culipatin</p>
      <p className="font-normal text-base text-white">
        Diversión en la Nieve con Deslizador Culipatin
      </p>
      <p className="font-normal text-base max-w-lg text-gray-400">
        Disfruta de la emoción del invierno deslizándote a toda velocidad por
        las pendientes nevadas con nuestros deslizadores culipatin. Una
        actividad llena de adrenalina para todas las edades.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div className="bg-black/90 w-full px-4 py-4">
      <p className="font-bold text-4xl text-white">Rafting</p>
      <p className="font-normal text-base text-white">
        Rafting en Aguas Bravas
      </p>
      <p className="font-normal text-base max-w-lg text-gray-400">
        Siente la emoción del rafting mientras navegas por ríos rápidos y
        desafiantes. Una experiencia inolvidable llena de adrenalina y aventura,
        perfecta para los amantes de la naturaleza.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div className="bg-black/90 w-full px-4 py-4">
      <p className="font-bold text-4xl text-white">Kayak en el Lago</p>
      <p className="font-normal text-base text-white">
        Tranquilidad en Kayak en el Lago
      </p>
      <p className="font-normal text-base max-w-lg text-gray-400">
        Navega por las serenas aguas del lago en un kayak y disfruta de la paz y
        la tranquilidad que ofrece este hermoso entorno natural. Ideal para un
        momento de relax y conexión con la naturaleza.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/images/cabalgata.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/images/diversion.webp",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/images/kayak.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/images/rafting.jpg",
  },
];
