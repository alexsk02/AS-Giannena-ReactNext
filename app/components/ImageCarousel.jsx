"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "../styles/ImageCarousel.css";

function ImageCarousel({ images, interval = 6000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(id);
  }, [images.length, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div className="carousel-container">
      {images.map((img, i) => (
        <Image
          key={i}
          src={img.src}
          alt={img.alt || `Slide ${i + 1}`}
          className={`carousel-image ${i === index ? "active" : ""}`}
          width={200} // adjust width
          height={100} // adjust height
        />
      ))}
    </div>
  );
}

export default ImageCarousel;
