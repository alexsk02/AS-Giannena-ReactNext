import Schedule from "@/app/ui/components/schedule/Schedule";
import "@/app/ui/styles/schedule/SchedulePage.css";

export const metadata = {
  title: "Αγώνες Γυναικών-ΑΣ Γιάννενα Βόλεϊ",

  description: "Δείτε τους αγώνες για την ομάδα των γυναικών του ΑΣ Γιάννενα.",

  keywords: ["ΑΣ Γιάννενα", "Αγώνες", "Γυναίκες", "Βόλεϊ", "Ιωάννινα"],
};

export default function WomenMatches() {
  return (
    <div className="matches-page">
      <h1 className="matches-title">Αγώνες Γυναικών</h1>
      <Schedule team="women-teams" match="women-matches" />
    </div>
  );
}
