import News from "@/app/ui/components/article/News";
import "@/app/ui/styles/article/NewsPage.css";

export const metadata = {
  title: "Γενικά Νέα-ΑΣ Γιάννενα Βόλεϊ",

  description: "Δείτε τα τελευταία γενικά νέα του ΑΣ Γιάννενα.",

  keywords: ["ΑΣ Γιάννενα", "Νέα", "Γενικά", "Βόλεϊ", "Ιωάννινα"],
};

export default async function NewsOther() {
  return (
    <div className="news-page">
      <h1 className="page-title">Γενικά Νέα</h1>
      <News category="Νέα" />
    </div>
  );
}
