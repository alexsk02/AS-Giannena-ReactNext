import News from "@/app/ui/components/article/News";
import "@/app/ui/styles/article/NewsPage.css";

export const metadata = {
  title: "Νέα-ΑΣ Γιάννενα Βόλεϊ",

  description: "Δείτε τα τελευταία νέα του ΑΣ Γιάννενα.",

  keywords: ["ΑΣ Γιάννενα", "Νέα", "Βόλεϊ", "Ιωάννινα"],
};

export default async function NewsTeam() {
  return (
    <div className="news-page">
      <h1 className="page-title">Νέα Ομάδας</h1>
      <News />
    </div>
  );
}
