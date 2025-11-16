import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import "../styles/Contact.css";
import "../styles/ContactInfo.css";

function Contact() {
  return (
    <div className="contact-info">
      <div className="contact-row">
        <MdEmail className="contact-icon" />
        <span>asgiannena@gmail.com</span>
      </div>
      <div className="contact-row">
        <MdPhone className="contact-icon" />
        <span>6942027592</span>
      </div>
      <div className="social-icons">
        <a
          href="https://www.facebook.com/giannenavolley/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="social-icon" />
        </a>
        <a
          href="https://www.instagram.com/giannenavolley/?hl=el"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="social-icon" />
        </a>
        <a
          href="https://x.com/giannenavolley"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter className="social-icon" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
