import "../styles/Sponsors.css";
import ImageCarousel from "../components/ImageCarousel";

import {
  collection1,
  collection2,
  collection3,
  collection4,
  collection5,
  collection6,
  collection7,
} from "../data/sponsors";

export default function Sponsors() {
  return (
    <div className="sponsors-page">
      <title>ΑΣ Γιάννενα Βόλεϊ- Χορηγοί</title>
      <meta name="description" content="Δείτε τους χορηγούς του ΑΣ Γιάννενα." />
      <meta name="keywords" content="ΑΣ Γιάννενα, Χορηγοί, Βόλεϊ" />

      <h1 className="page-title-header">Χορηγική Πρόταση</h1>

      <div className="sponsorship-text">
        <p>
          Μπορείτε να δείτε το φυλλάδιο της Αθλητικής Χορηγίας του ΑΣ Γιάννενα{" "}
          <a
            href="/ΑΘΛΗΤΙΚΗ-ΧΟΡΗΓΙΑ_ΑΣ-ΓΙΑΝΝΕΝΑ_2025-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            ΕΔΩ
          </a>
          .
        </p>
      </div>

      <div className="anyflip-embed">
        <iframe
          title="Χορηγικό Φυλλάδιο"
          src="https://online.anyflip.com/tjwod/aafj/index.html"
          width="100%"
          height="500"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <h2 className="section-title">Χορηγοί 2025-26</h2>

      <div className="carousel-wrapper">
        <ImageCarousel images={collection1} />
        <ImageCarousel images={collection2} />
        <ImageCarousel images={collection3} />
        <ImageCarousel images={collection4} />
        <ImageCarousel images={collection5} />
        <ImageCarousel images={collection6} />
        <ImageCarousel images={collection7} />
      </div>
    </div>
  );
}
