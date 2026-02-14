import "@/app/ui/styles/home/LinkCard.css";
import Link from "next/link";
import {
  academyIcon,
  scheduleIcon,
  rosterIcon,
  contactIcon,
} from "@/public/icons";

export default function LinkCard() {
  return (
    <section className="quick-links">
      <div className="link-card">
        <img src={academyIcon.src} alt="Ακαδημία" />
        <h3>Ακαδημίες</h3>
        <Link href="/academy/schedule" prefetch={false}>
          Δείτε το πρόγραμμα
        </Link>
      </div>

      <div className="link-card">
        <img src={scheduleIcon.src} alt="Νέα" />
        <h3>Νέα</h3>
        <Link href="/news/all" prefetch={false}>
          Τα νέα της ομάδας
        </Link>
      </div>

      <div className="link-card">
        <img src={rosterIcon.src} alt="Ρόστερ" />
        <h3>Ρόστερ</h3>
        <Link href="/roster/women" prefetch={false}>
          Οι αθλητές μας
        </Link>
      </div>

      <div className="link-card">
        <img src={contactIcon.src} alt="Επικοινωνία" />
        <h3>Επικοινωνία</h3>
        <Link href="/club/contact-info" prefetch={false}>
          Επικοινωνήστε μαζί μας
        </Link>
      </div>
    </section>
  );
}
