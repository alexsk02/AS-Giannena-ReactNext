import homeLogo from "@/public/logos/logo.png";
import "@/app/ui/styles/home/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src={homeLogo.src} alt="AS Giannena" className="home-logo" />
        <h1>ΑΣ Γιάννενα</h1>
        <p>ΓΑΣ – Η δύναμη του βόλεϊ στα Ιωάννινα</p>
      </div>
    </section>
  );
}
