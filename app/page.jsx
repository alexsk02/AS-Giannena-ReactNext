import { Fetch_UpcomingMatches, Fetch_Articles } from "@/app/ui/lib/utils";
import SponsorsCarousel from "@/app/ui/components/sponsors/SponsorsCarousel";
import ArticleCarousel from "@/app/ui/components/home/ArticleCarousel";
import LinkCard from "@/app/ui/components/home/LinkCard";
import UpcomingMatches from "@/app/ui/components/home/UpcomingMatches";
import About from "@/app/ui/components/home/About";
import Hero from "@/app/ui/components/home/Hero";
import "@/app/ui/styles/home/HomePage.css";

export const metadata = {
  metadataBase: new URL("https://asgiannena-volley.gr"),

  title: "ΑΣ Γιάννενα Βόλεϊ-Αρχική",

  description:
    "Αρχική Σελίδα ΑΣ Γιάννενα. Ενημερωθείτε για τα νέα της ομάδας, τους επόμενους αγώνες και τις βαθμολογίες των πρωταθλημάτων.",

  keywords: [
    "ΑΣ Γιάννενα",
    "ΓΑΣ",
    "Volley",
    "Βόλεϊ",
    "Ιωάννινα",
    "Γιάννενα",
    "Ακαδημία",
  ],

  openGraph: {
    locale: "el_GR",
    type: "website",
    url: "https://asgiannena-volley.gr/",
    siteName: "ΑΣ Γιάννενα",

    title: "ΑΣ Γιάννενα Βόλεϊ",
    description:
      "Επίσημη ιστοσελίδα του ΑΣ Γιάννενα Volley. Νέα, αγώνες, αποτελέσματα και πλήρης ενημέρωση για τον σύλλογο.",

    images: [
      {
        url: "/logos/social-share.png",
        width: 1200,
        height: 628,
        alt: "ΑΣ Γιάννενα",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ΑΣ Γιάννενα Βόλεϊ",
    description:
      "Επίσημη ιστοσελίδα του ΑΣ Γιάννενα Volley. Νέα, αγώνες, αποτελέσματα και πλήρης ενημέρωση για τον σύλλογο.",
    images: ["/logos/social-share.png"],
  },
};

export default async function Home() {
  const upcomingMatches = await Fetch_UpcomingMatches();
  const articles = await Fetch_Articles();

  return (
    <div className="home">
      <Hero />

      <About />

      <ArticleCarousel articles={articles} />

      <UpcomingMatches upcomingMatches={upcomingMatches} />

      <LinkCard />

      <section className="sponsors">
        <h2>Χορηγοί 2025-26</h2>
        <SponsorsCarousel />
      </section>
    </div>
  );
}
