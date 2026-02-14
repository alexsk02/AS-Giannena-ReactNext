import "@/app/ui/styles/sponsors/SponsorsPage.css";
import SponsorsCarousel from "@/app/ui/components/sponsors/SponsorsCarousel";
import SponsorsFlip from "@/app/ui/components/sponsors/SponsorsFlip";

export const metadata = {
  title: "Χορηγοί-ΑΣ Γιάννενα Βόλεϊ",

  description: "Δείτε τους χορηγούς του ΑΣ Γιάννενα.",

  keywords: ["ΑΣ Γιάννενα", "Χορηγοί", "Βόλεϊ", "Ιωάννινα"],
};

export default function Sponsors() {
  return (
    <div className="sponsors-page">
      <h1 className="page-title-header">Χορηγική Πρόταση</h1>

      <SponsorsFlip />

      <h2 className="section-title">Χορηγοί 2025-26</h2>

      <SponsorsCarousel />
    </div>
  );
}
