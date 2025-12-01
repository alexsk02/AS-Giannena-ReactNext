"use client";

import Image from "next/image";
import "../styles/Facilities.css";
import limnopoula from "@/public/limnopoula.png";
import beachVolley from "@/public/beach_volley.png";

function Facilities() {
  return (
    <div className="facilities-container">
      <title>Εγκαταστάσεις-ΑΣ Γιάννενα Βόλεϊ</title>
      <meta
        name="description"
        content="Δείτε τις εγκαταστάσεις του ΑΣ Γιάννενα"
      />
      <meta
        name="keywords"
        content="ΑΣ Γιάννενα, Εγκαταστάσεις, Βόλεϊ, Ιωάννινα"
      />
      <h2 className="facilities-title">Εγκαταστάσεις</h2>

      <div className="facility-section">
        <img
          src={limnopoula.src}
          alt="Κλειστό Γυμναστήριο Λιμνοπούλας"
          className="facility-image"
        />
        <div className="facility-info">
          <h3>Γυναικεία & Ανδρική Ομάδα</h3>
          <p>
            Η Γυναικεία & Ανδρική ομάδα βόλεϊ χρησιμοποιεί τις εγκαταστάσεις του
            κλειστού γυμναστηρίου του ΠΕΑΚΙ στη Λιμνοπούλα Ιωαννίνων.
          </p>
        </div>
      </div>

      <div className="facility-section">
        <div className="facility-info">
          <h3>Εγκαταστάσεις Ακαδημιών</h3>
          <ul>
            <li>
              Κλειστό Γυμναστήριο 6ου ΕΠΑΛ (Περιοχή Σεισμόπληκτα Ιωαννίνων)
            </li>
            <li>
              Κλειστό Γυμναστήριο 3ου Γυμνασίου (Περιοχή Αμπελόκηποι Ιωαννίνων)
            </li>
          </ul>
        </div>
      </div>

      <div className="facility-section">
        <img
          src={beachVolley.src}
          alt="Γήπεδο Beach Volley Περάματος"
          className="facility-image"
        />
        <div className="facility-info">
          <h3>Ακαδημίες Beach Volley</h3>
          <p>
            Οι ακαδημίες Beach Volley χρησιμοποιούν το γήπεδο που βρίσκεται στην
            παραλίμνια περιοχή Περάματος Ιωαννίνων.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Facilities;
