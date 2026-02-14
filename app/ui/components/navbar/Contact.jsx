import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import "@/app/ui/styles/navbar/Contact.css";

export default function Contact() {
  return (
    <div className="nav-contact-wrapper">
      <div className="nav-contact-details">
        <div className="nav-contact-item">
          <MdEmail className="nav-contact-icon" />
          <span className="nav-contact-text">asgiannena@gmail.com</span>
        </div>

        <div className="nav-contact-item">
          <MdPhone className="nav-contact-icon" />
          <span className="nav-contact-text">6942027592</span>
        </div>
      </div>

      <div className="nav-social-group">
        <a
          href="https://www.facebook.com/giannenavolley/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-social-btn"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.instagram.com/giannenavolley/?hl=el"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-social-btn"
        >
          <FaInstagram />
        </a>

        <a
          href="https://x.com/giannenavolley"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-social-btn"
        >
          <FaXTwitter />
        </a>
      </div>
    </div>
  );
}
