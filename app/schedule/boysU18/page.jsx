import Schedule from "@/app/ui/components/schedule/Schedule";
import "@/app/ui/styles/schedule/SchedulePage.css";

export const metadata = {
  title: "Αγώνες Αγόρια Κ18-ΑΣ Γιάννενα Βόλεϊ",

  description:
    "Δείτε τους αγώνες για την ομάδα των αγοριών Κ18 του ΑΣ Γιάννενα.",

  keywords: ["ΑΣ Γιάννενα", "Αγώνες", "Αγόρια", "Κ18", "Βόλεϊ", "Ιωάννινα"],
};

export default function BoysU18Matches() {
  return (
    <div className="matches-page">
      <h1 className="matches-title">Αγώνες Αγόρια Κ18</h1>
      <Schedule team="boys-u18-teams" match="boys-u18-matches" />
    </div>
  );
}
