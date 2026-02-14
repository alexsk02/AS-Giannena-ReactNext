import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import logo from "@/public/logos/logo.png";
import "@/app/ui/styles/footer/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-overlay">
        <div className="footer-container">
          <div className="footer-section footer-brand">
            <img
              src={logo.src}
              alt="ΑΣ Γιάννενα Logo"
              className="footer-logo"
            />
            <h3>ΑΣ Γιάννενα Βόλεϊ</h3>
            <p className="footer-tagline">Πάθος. Ομαδικότητα. Εξέλιξη.</p>
          </div>

          <div className="footer-section">
            <h4>Ο Σύλλογος</h4>
            <ul>
              <li>
                <Link href="/club/history">Η Ιστορία μας</Link>
              </li>
              <li>
                <Link href="/club/facilities">Εγκαταστάσεις</Link>
              </li>
              <li>
                <Link href="/roster/women">Ρόστερ</Link>
              </li>
              <li>
                <Link href="/news/all">Τελευταία Νέα</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Συμμετοχή</h4>
            <ul>
              <li>
                <Link href="/academy/register">Εγγραφή</Link>
              </li>
              <li>
                <Link href="/academy/schedule">Πρόγραμμα Προπονήσεων</Link>
              </li>
              <li>
                <Link href="/club/contact-info">Επικοινωνία</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Επικοινωνία</h4>
            <div className="footer-contact">
              <p>
                <FaMapMarkerAlt /> Ιωάννινα, Ελλάδα
              </p>
              <p>
                <FaPhoneAlt /> +30 6942027592
              </p>
              <p>
                <FaEnvelope /> asgiannena@gmail.com
              </p>
            </div>

            <div className="footer-socials">
              <a
                href="https://www.facebook.com/giannenavolley/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/giannenavolley/?hl=el"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/giannenavolley"
                target="_blank"
                rel="noreferrer"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} ΑΣ Γιάννενα Βόλεϊ • All Rights Reserved
          </span>

          <span className="footer-credit">
            Created by <strong>Alex Skouras</strong>
          </span>
        </div>
      </div>
    </footer>
  );
}
