import Schedule from "@/app/ui/components/schedule/Schedule";
import "@/app/ui/styles/schedule/SchedulePage.css";

export const metadata = {
  title: "Αγώνες Κορίτσια Κ18-ΑΣ Γιάννενα Βόλεϊ",

  description:
    "Δείτε τους αγώνες για την ομάδα των κοριτσιών Κ18 του ΑΣ Γιάννενα.",

  keywords: ["ΑΣ Γιάννενα", "Αγώνες", "Κορίτσια", "Κ18", "Βόλεϊ", "Ιωάννινα"],
};

export default function GirlsU18Matches() {
  return (
    <div className="matches-page">
      <h1 className="matches-title">Αγώνες Κορίτσια Κ18 (Β Όμιλος)</h1>
      <Schedule team="girls-u18-teams" match="girls-u18-matches" />
    </div>
  );
}
