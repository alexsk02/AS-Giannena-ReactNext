import Schedule from "@/app/ui/components/schedule/Schedule";
import "@/app/ui/styles/schedule/SchedulePage.css";

export const metadata = {
  title: "Αγώνες Αγόρια Κ21-ΑΣ Γιάννενα Βόλεϊ",

  description:
    "Δείτε τους αγώνες για την ομάδα των αγοριών Κ21 του ΑΣ Γιάννενα.",

  keywords: ["ΑΣ Γιάννενα", "Αγώνες", "Αγόρια", "Κ21", "Βόλεϊ", "Ιωάννινα"],
};

export default function BoysU21Matches() {
  return (
    <div className="matches-page">
      <h1 className="matches-title">Αγώνες Αγόρια Κ21</h1>
      <Schedule team="boys-u21-teams" match="boys-u21-matches" />
    </div>
  );
}
