"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden bg-gray-100 py-12">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    name: "Herman Melville",
    image: "/images/cabaña7.webp",
  },
  {
    name: "Mark Twain",
    image: "/images/cabaña6.webp",
  },
  {
    name: "Edgar Allan Poe",
    image: "/images/cabaña3.webp",
  },
  {
    name: "Emily Dickinson",
    image: "/images/cabaña4.webp",
  },
  {
    name: "H.P. Lovecraft",
    image: "/images/cabaña5.webp",
  },
  {
    name: "Ernest Hemingway",
    image: "/images/foto1.jpg",
  },
  {
    name: "Virginia Woolf",
    image: "/images/foto2.jpg",
  },
  {
    name: "F. Scott Fitzgerald",
    image: "/images/foto3.jpg",
  },
  {
    name: "William Faulkner",
    image: "/images/foto4.jpg",
  },
  {
    name: "Toni Morrison",
    image: "/images/foto5.jpg",
  }
];
