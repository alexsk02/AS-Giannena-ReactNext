"use client";

import { useEffect, useState } from "react";
import "../styles/ImageCarousel.css";

function ImageCarousel({ images, interval = 6000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className="carousel-container">
      {images.map((img, i) => {
        const imageElement = (
          <img
            src={img.src}
            alt={img.alt || `Slide ${i + 1}`}
            className={`carousel-image ${i === index ? "active" : ""}`}
            width={200}
            height={100}
          />
        );

        return img.link ? (
          <a key={i} href={img.link} target="_blank" rel="noopener noreferrer">
            {imageElement}
          </a>
        ) : (
          <div key={i}>{imageElement}</div>
        );
      })}
    </div>
  );
}

export default ImageCarousel;
