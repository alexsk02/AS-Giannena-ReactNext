"use client";

import "../styles/Academy-Register.css";
import flyer from "@/public/flyer.jpg";
import { FaPhoneAlt, FaEnvelope, FaWpforms, FaDownload } from "react-icons/fa";

export default function AcademyRegister() {
  return (
    <div className="academy-register-page">
      <title>Εγγραφή Ακαδημία-ΑΣ Γιάννενα Βόλεϊ</title>
      <meta
        name="description"
        content="Δείτε πληροφορίες σχετικά με την εγγραφή σας στην ακαδημία του ΑΣ Γιάννενα."
      />
      <meta
        name="keywords"
        content="ΑΣ Γιάννενα, Ακαδημία, Εγγραφή, Βόλεϊ, Ιωάννινα"
      />
      <h1 className="page-title-text">Εγγραφή</h1>

      <div className="flyer-container">
        <img
          src={flyer.src}
          alt="Flyer Εγγραφής"
          className="flyer-image"
          width={400}
          height={500}
        />
      </div>

      <div className="register-text">
        <h2>Πληροφορίες - Εγγραφές</h2>
        <ul>
          <li>
            <FaWpforms className="icon" /> Μέσω της{" "}
            <a href="/contact-info">φόρμας επικοινωνίας</a> του site
          </li>
          <li>
            <FaPhoneAlt className="icon" /> Τηλεφωνικά στο{" "}
            <strong>6942027592</strong>
          </li>
          <li>
            <FaEnvelope className="icon" /> Μέσω email στο{" "}
            <strong>asgiannena@gmail.com</strong>
          </li>
        </ul>

        <p className="download-text">
          Μπορείτε να κατεβάσετε το έντυπο εγγραφής αθλητή:
        </p>
        <a
          href="/ΕΝΤΥΠΟ-ΕΓΓΡΑΦΗΣ-ΑΘΛΗΤΗ-2025-2026.docx"
          download
          className="download-button"
        >
          <FaDownload /> Κατεβάστε το έντυπο
        </a>
      </div>
    </div>
  );
}
