import Schedule from "@/app/ui/components/schedule/Schedule";
import "@/app/ui/styles/schedule/SchedulePage.css";

export const metadata = {
  title: "Αγώνες Κορίτσια Κ16-ΑΣ Γιάννενα Βόλεϊ",

  description:
    "Δείτε τους αγώνες για την ομάδα των κοριτσιών Κ16 του ΑΣ Γιάννενα.",

  keywords: ["ΑΣ Γιάννενα", "Αγώνες", "Κορίτσια", "Κ16", "Βόλεϊ", "Ιωάννινα"],
};

export default function GirlsU16Matches() {
  return (
    <div className="matches-page">
      <h1 className="matches-title">Αγώνες Κορίτσια Κ16</h1>
      <Schedule team="girls-u16-teams" match="girls-u16-matches" />
    </div>
  );
}
