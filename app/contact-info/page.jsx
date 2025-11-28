import "../styles/ContactInfo.css";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function ContactInfo() {
  return (
    <div className="contact-container">
      <title>Επικοινωνία-ΑΣ Γιάννενα Βόλεϊ</title>
      <meta
        name="description"
        content="Επικοινωνήστε με την ομάδα του ΑΣ Γιάννενα"
      />
      <meta
        name="keywords"
        content="ΑΣ Γιάννενα, Επικοινωνία, Τηλέφωνο, Email, Βόλεϊ, Ιωάννινα"
      />

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

      <div className="contact-form">
        <h2>Αποστολή Μηνύματος</h2>
        <form action="https://formspree.io/f/xanjzoae" method="POST">
          <input type="text" name="name" placeholder="Ονοματεπώνυμο" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="subject" placeholder="Θέμα" />
          <textarea name="message" rows="5" placeholder="Μήνυμα..." required />
          <button type="submit">Αποστολή</button>
        </form>
      </div>
    </div>
  );
}

export default ContactInfo;
