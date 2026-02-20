import Standing from "@/app/ui/components/standings/Standing";
import Bracket from "@/app/ui/components/standings/Bracket";
import { girlsu20_bracketData } from "@/app/ui/data/bracket";
import "@/app/ui/styles/standings/StandingPage.css";

export const metadata = {
  title: "Βαθμολογία Κορίτσια Κ20-ΑΣ Γιάννενα Βόλεϊ",

  description:
    "Δείτε τη βαθμολογία για την ομάδα των κοριτσιών Κ20 του ΑΣ Γιάννενα.",

  keywords: [
    "ΑΣ Γιάννενα",
    "Βαθμολογία",
    "Κορίτσια",
    "Κ20",
    "Βόλεϊ",
    "Ιωάννινα",
  ],
};

export default async function GirlsU20Standings() {
  return (
    <div className="standings-page">
      <h1 className="standings-title">Βαθμολογία Κορίτσια Κ20</h1>
      <Standing team="girls-u20-teams" />
      <h1 className="standings-title">Playoff Κορίτσια Κ20</h1>
      <Bracket
        matches={girlsu20_bracketData}
        startFrom="quarterfinals"
        showThirdPlace={true}
        winsPerRound={{
          quarterfinals: 1,
          semifinals: 2,
          final: 1,
          thirdPlace: 1,
        }}
      />
    </div>
  );
}
