"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
  images: string[];
  interval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative overflow-hidden w-full max-w-5xl h-[500px]">
      <div
        className="relative flex transition-transform duration-500 h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((src, index) => (
          <div key={index} className="relative w-full flex-shrink-0 h-full">
            <Image
              src={src}
              alt={`Slide ${index}`}
              fill={true}
              style={{ objectFit: 'cover' }}
              className="rounded-xl"
            />
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
      >
        &#10095;
      </button>
    </div>
  );
};

// Example usage with static image URLs
const exampleImages = [
  'https://ik.imagekit.io/vqkxliqdl/trendles/DSC09158.jpg',
  'https://ik.imagekit.io/vqkxliqdl/trendles/PXL_20240324_212533462%20(1).jpg',
  'https://ik.imagekit.io/vqkxliqdl/trendles/sty%20(1).jpg',
  'https://ik.imagekit.io/vqkxliqdl/trendles/DSC_0058%20(1).jpg',
];

export default function App() {
  return (
    <div className="flex justify-center">
      <ImageCarousel images={exampleImages} />
    </div>
  );
}
