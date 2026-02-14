import Standing from "@/app/ui/components/standings/Standing";
import Bracket from "@/app/ui/components/standings/Bracket";
import { boysu17_bracketData } from "@/app/ui/data/bracket";
import "@/app/ui/styles/standings/StandingPage.css";

export const metadata = {
  title: "Βαθμολογία Αγόρια Κ17-ΑΣ Γιάννενα Βόλεϊ",

  description:
    "Δείτε τη βαθμολογία για την ομάδα των αγοριών Κ17 του ΑΣ Γιάννενα.",

  keywords: ["ΑΣ Γιάννενα", "Βαθμολογία", "Αγόρια", "Κ17", "Βόλεϊ", "Ιωάννινα"],
};

export default async function BoysU17Standings() {
  return (
    <div className="standings-page">
      <h1 className="standings-title">Βαθμολογία Αγόρια Κ17</h1>
      <Standing team="boys-u17-teams" />
    </div>
  );
}
