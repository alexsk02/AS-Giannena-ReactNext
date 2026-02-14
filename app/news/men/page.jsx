import News from "@/app/ui/components/article/News";
import "@/app/ui/styles/article/NewsPage.css";

export const metadata = {
  title: "Νέα Άνδρες-ΑΣ Γιάννενα Βόλεϊ",

  description: "Δείτε τα τελευταία νέα των ανδρών του ΑΣ Γιάννενα.",

  keywords: ["ΑΣ Γιάννενα", "Νέα", "Άνδρες", "Βόλεϊ", "Ιωάννινα"],
};

export default async function NewsMen() {
  return (
    <div className="news-page">
      <h1 className="page-title">Νέα Ανδρικής Ομάδας</h1>
      <News category="Άνδρες" />
    </div>
  );
}
