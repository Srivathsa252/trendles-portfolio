"use client";

import React from 'react';
import { Typography } from "@material-tailwind/react";
import ImageCarousel from './ImageCarousel'; // Adjust the import path as needed

const Hero: React.FC = () => {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Srivathsa  <br /> for TRENDLES!
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            I&apos;m Srivathsa, a dedicated student at IIIT Kottayam with a deep passion for community engagement and creative initiatives.
            Here, you&apos;ll get a glimpse of my journey. From being an eager kid who just wanted to be a part of a club to being the mentor of the Trendles Club, I have learned a lot and I intend to bring that experience in my role as Trendles Club Mentor.
          </Typography>
        </div>
        
        <ImageCarousel />        
      </div>
    </header>
  );
};

export default Hero;