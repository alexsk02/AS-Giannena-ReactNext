"use client";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

import "../styles/Footer.css";
import logo from "@/public/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Club Info */}
        <div className="footer-section footer-club-info">
          <div className="footer-logo-container">
            <img
              src={logo.src}
              alt="ΑΣ Γιάννενα Logo"
              className="footer-logo"
            />
          </div>
          <div className="footer-text-content">
            <h4 className="footer-title">ΑΣ Γιάννενα</h4>
            <p className="footer-text">
              Ο Αθλητικός Σύλλογος Γιάννενα (ΓΑΣ) από το 2014 αναπτύσσει με
              συνέπεια και επαγγελματισμό το βόλεϊ στην περιοχή μας. Με
              έμπειρους προπονητές και οργανωμένες ακαδημίες, προωθούμε την
              αθλητική παιδεία, την ομαδικότητα και την εξέλιξη κάθε αθλητή, από
              τα πρώτα βήματα μέχρι την αγωνιστική διάκριση.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Σύνδεσμοι</h4>
          <ul className="footer-links">
            <li>
              <Link href="/" prefetch={false}>
                Αρχική
              </Link>
            </li>
            <li>
              <Link href="/history" prefetch={false}>
                Ιστορία
              </Link>
            </li>
            <li>
              <Link href="/roster-women" prefetch={false}>
                Ρόστερ
              </Link>
            </li>
            <li>
              <Link href="/news" prefetch={false}>
                Νέα
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Ακολουθήστε μας</h4>
          <p className="footer-text">Ιωάννινα, Ελλάδα</p>
          <div className="footer-socials">
            <a
              href="https://www.facebook.com/giannenavolley/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF className="footer-icon" />
            </a>
            <a
              href="https://www.instagram.com/giannenavolley/?hl=el"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="footer-icon" />
            </a>
            <a
              href="https://x.com/giannenavolley"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter className="footer-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
