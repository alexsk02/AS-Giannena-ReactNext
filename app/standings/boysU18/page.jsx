import Standing from "@/app/ui/components/standings/Standing";
import Bracket from "@/app/ui/components/standings/Bracket";
import { boysu18_bracketData } from "@/app/ui/data/bracket";
import "@/app/ui/styles/standings/StandingPage.css";

export const metadata = {
  title: "Βαθμολογία Αγόρια Κ18-ΑΣ Γιάννενα Βόλεϊ",

  description:
    "Δείτε τη βαθμολογία για την ομάδα των αγοριών Κ18 του ΑΣ Γιάννενα.",

  keywords: ["ΑΣ Γιάννενα", "Βαθμολογία", "Αγόρια", "Κ18", "Βόλεϊ", "Ιωάννινα"],
};

export default async function BoysU18Standings() {
  return (
    <div className="standings-page">
      <h1 className="standings-title">Βαθμολογία Αγόρια Κ18</h1>
      <Standing team="boys-u18-teams" />
    </div>
  );
}
