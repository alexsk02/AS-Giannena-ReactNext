import "@/app/ui/styles/academy/RegistrationInfo.css";
import { FaPhoneAlt, FaEnvelope, FaWpforms, FaDownload } from "react-icons/fa";

export default function RegistrationInfo() {
  return (
    <div className="academy-register-text">
      <h2>Πληροφορίες - Εγγραφές</h2>
      <ul>
        <li>
          <FaWpforms className="academy-register-icon" /> Μέσω της{" "}
          <a href="/contact-info">φόρμας επικοινωνίας</a> του site
        </li>
        <li>
          <FaPhoneAlt className="academy-register-icon" /> Τηλεφωνικά στο{" "}
          <strong>6942027592</strong>
        </li>
        <li>
          <FaEnvelope className="academy-register-icon" /> Μέσω email στο{" "}
          <strong>asgiannena@gmail.com</strong>
        </li>
      </ul>

      <p className="academy-register-download-text">
        Μπορείτε να κατεβάσετε το έντυπο εγγραφής αθλητή:
      </p>
      <a
        href="/files/ΕΝΤΥΠΟ-ΕΓΓΡΑΦΗΣ-ΑΘΛΗΤΗ-2025-2026.docx"
        download
        className="academy-register-download-button"
      >
        <FaDownload /> Κατεβάστε το έντυπο
      </a>
    </div>
  );
}
