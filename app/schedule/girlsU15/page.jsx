import Schedule from "@/app/ui/components/schedule/Schedule";
import "@/app/ui/styles/schedule/SchedulePage.css";

export const metadata = {
  title: "Αγώνες Κορίτσια Κ15-ΑΣ Γιάννενα Βόλεϊ",

  description:
    "Δείτε τους αγώνες για την ομάδα των κοριτσιών Κ15 του ΑΣ Γιάννενα.",

  keywords: ["ΑΣ Γιάννενα", "Αγώνες", "Κορίτσια", "Κ15", "Βόλεϊ", "Ιωάννινα"],
};

export default function GirlsU15Matches() {
  return (
    <div className="matches-page">
      <h1 className="matches-title">Αγώνες Κορίτσια Κ15</h1>
      <Schedule team="girls-u15-teams" match="girls-u15-matches" />
    </div>
  );
}
