import News from "@/app/ui/components/article/News";
import "@/app/ui/styles/article/NewsPage.css";

export const metadata = {
  title: "Νέα Ακαδημία-ΑΣ Γιάννενα Βόλεϊ",

  description: "Δείτε τα τελευταία νέα των ακαδημιών του ΑΣ Γιάννενα.",

  keywords: ["ΑΣ Γιάννενα", "Νέα", "Ακαδημία", "Βόλεϊ", "Ιωάννινα"],
};

export default async function NewsAcademy() {
  return (
    <div className="news-page">
      <h1 className="page-title">Νέα Ακαδημίας</h1>
      <News category="Ακαδημία" />
    </div>
  );
}
