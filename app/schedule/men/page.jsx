import Schedule from "@/app/ui/components/schedule/Schedule";
import "@/app/ui/styles/schedule/SchedulePage.css";

export const metadata = {
  title: "Αγώνες Ανδρών-ΑΣ Γιάννενα Βόλεϊ",

  description: "Δείτε τους αγώνες για την ομάδα των ανδρών του ΑΣ Γιάννενα.",

  keywords: ["ΑΣ Γιάννενα", "Αγώνες", "Άνδρες", "Βόλεϊ", "Ιωάννινα"],
};

export default function MenMatches() {
  return (
    <div className="matches-page">
      <h1 className="matches-title">Αγώνες Ανδρών</h1>
      <Schedule team="men-teams" match="men-matches" />
    </div>
  );
}
