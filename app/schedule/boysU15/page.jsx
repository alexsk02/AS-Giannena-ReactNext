import Schedule from "@/app/ui/components/schedule/Schedule";
import "@/app/ui/styles/schedule/SchedulePage.css";

export const metadata = {
  title: "Αγώνες Αγόρια Κ15-ΑΣ Γιάννενα Βόλεϊ",

  description:
    "Δείτε τους αγώνες για την ομάδα των αγοριών Κ15 του ΑΣ Γιάννενα.",

  keywords: ["ΑΣ Γιάννενα", "Αγώνες", "Αγόρια", "Κ15", "Βόλεϊ", "Ιωάννινα"],
};

export default function BoysU15Matches() {
  return (
    <div className="matches-page">
      <h1 className="matches-title">Αγώνες Αγόρια Κ15</h1>
      <Schedule team="boys-u15-teams" match="boys-u15-matches" />
    </div>
  );
}
