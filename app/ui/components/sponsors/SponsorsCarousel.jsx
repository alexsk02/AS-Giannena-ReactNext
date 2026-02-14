import "@/app/ui/styles/sponsors/SponsorsCarousel.css";
import ImageCarousel from "@/app/ui/components/sponsors/ImageCarousel";
import {
  collection1,
  collection2,
  collection3,
  collection4,
  collection5,
  collection6,
  collection7,
} from "@/app/ui/data/sponsors";

export default function SponsorsCarousel() {
  return (
    <div className="carousel-wrapper">
      <ImageCarousel images={collection1} />
      <ImageCarousel images={collection2} />
      <ImageCarousel images={collection3} />
      <ImageCarousel images={collection4} />
      <ImageCarousel images={collection5} />
      <ImageCarousel images={collection6} />
      <ImageCarousel images={collection7} />
    </div>
  );
}
