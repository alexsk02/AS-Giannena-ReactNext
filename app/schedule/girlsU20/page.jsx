import Schedule from "@/app/ui/components/schedule/Schedule";
import "@/app/ui/styles/schedule/SchedulePage.css";

export const metadata = {
  title: "Αγώνες Κορίτσια Κ20-ΑΣ Γιάννενα Βόλεϊ",

  description:
    "Δείτε τους αγώνες για την ομάδα των κοριτσιών Κ20 του ΑΣ Γιάννενα.",

  keywords: ["ΑΣ Γιάννενα", "Αγώνες", "Κορίτσια", "Κ20", "Βόλεϊ", "Ιωάννινα"],
};

export default function GirlsU20Matches() {
  return (
    <div className="matches-page">
      <h1 className="matches-title">Αγώνες Κορίτσια Κ20</h1>
      <Schedule team="girls-u20-teams" match="girls-u20-matches" />
    </div>
  );
}
