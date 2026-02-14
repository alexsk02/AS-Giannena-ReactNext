import Link from "next/link";
import "@/app/ui/styles/home/About.css";

export default function About() {
  return (
    <section className="mosaic-section">
      <div className="mosaic-grid">
        <div className="mosaic-img">
          <img src="/home/volley1.jpg" alt="Team 1" />
        </div>

        <div className="mosaic-img">
          <img src="/home/volley2.jpg" alt="Team 2" />
        </div>

        <div className="mosaic-img">
          <img src="/home/volley3.jpg" alt="Team 3" />
        </div>

        <div className="mosaic-img">
          <img src="/home/volley4.jpg" alt="Team 4" />
        </div>

        <div className="mosaic-center">
          <Link href="/club/history" className="center-button">
            Ανακαλύψτε τον Σύλλογο
          </Link>
        </div>
      </div>
    </section>
  );
}
