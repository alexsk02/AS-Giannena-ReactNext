import Schedule from "@/app/ui/components/schedule/Schedule";
import "@/app/ui/styles/schedule/SchedulePage.css";

export const metadata = {
  title: "Αγώνες Αγόρια Κ17-ΑΣ Γιάννενα Βόλεϊ",

  description:
    "Δείτε τους αγώνες για την ομάδα των αγοριών Κ17 του ΑΣ Γιάννενα.",

  keywords: ["ΑΣ Γιάννενα", "Αγώνες", "Αγόρια", "Κ17", "Βόλεϊ", "Ιωάννινα"],
};

export default function BoysU17Matches() {
  return (
    <div className="matches-page">
      <h1 className="matches-title">Αγώνες Αγόρια Κ17</h1>
      <Schedule team="boys-u17-teams" match="boys-u17-matches" />
    </div>
  );
}
