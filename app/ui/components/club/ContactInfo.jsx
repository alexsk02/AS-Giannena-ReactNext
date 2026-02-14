import "@/app/ui/styles/club/ContactInfo.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <h2>Επικοινωνία</h2>
      <p>
        <FaPhoneAlt /> Τηλέφωνο: <a>6942027592</a>
      </p>
      <p>
        <FaEnvelope /> Email:{" "}
        <a href="mailto:freelgr@hotmail.com">asgiannena@gmail.com</a>
      </p>
      <div className="social-media">
        <a
          href="https://www.facebook.com/giannena-volley"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook /> Facebook
        </a>
        <a
          href="https://www.instagram.com/giannenavolley/?hl=el"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram /> Instagram
        </a>
        <a
          href="https://x.com/giannenavolley"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter className="social-icon" /> X Twitter
        </a>
      </div>
    </div>
  );
}
