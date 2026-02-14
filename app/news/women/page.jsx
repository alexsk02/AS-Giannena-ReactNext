import News from "@/app/ui/components/article/News";
import "@/app/ui/styles/article/NewsPage.css";

export const metadata = {
  title: "Νέα Γυναίκες-ΑΣ Γιάννενα Βόλεϊ",

  description: "Δείτε τα τελευταία νέα των γυναικών του ΑΣ Γιάννενα.",

  keywords: ["ΑΣ Γιάννενα", "Νέα", "Γυναίκες", "Βόλεϊ", "Ιωάννινα"],
};

export default async function NewsWomen() {
  return (
    <div className="news-page">
      <h1 className="page-title">Νέα Γυναικείας Ομάδας</h1>
      <News category="Γυναίκες" />
    </div>
  );
}
