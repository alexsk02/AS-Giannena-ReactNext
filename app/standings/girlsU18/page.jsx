import Standing from "@/app/ui/components/standings/Standing";
import Bracket from "@/app/ui/components/standings/Bracket";
import { girlsu18_bracketData } from "@/app/ui/data/bracket";
import "@/app/ui/styles/standings/StandingPage.css";

export const metadata = {
  title: "Βαθμολογία Κορίτσια Κ18-ΑΣ Γιάννενα Βόλεϊ",

  description:
    "Δείτε τη βαθμολογία για την ομάδα των κοριτσιών Κ18 του ΑΣ Γιάννενα.",

  keywords: [
    "ΑΣ Γιάννενα",
    "Βαθμολογία",
    "Κορίτσια",
    "Κ18",
    "Βόλεϊ",
    "Ιωάννινα",
  ],
};

export default async function GirlsU18Standings() {
  return (
    <div className="standings-page">
      <h1 className="standings-title">Βαθμολογία Κορίτσια Κ18 (Β Όμιλος)</h1>
      <Standing team="girls-u18-teams" />
    </div>
  );
}
