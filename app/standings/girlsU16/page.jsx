import Standing from "@/app/ui/components/standings/Standing";
import Bracket from "@/app/ui/components/standings/Bracket";
import { girlsu16_bracketData } from "@/app/ui/data/bracket";
import "@/app/ui/styles/standings/StandingPage.css";

export const metadata = {
  title: "Βαθμολογία Κορίτσια Κ16-ΑΣ Γιάννενα Βόλεϊ",

  description:
    "Δείτε τη βαθμολογία για την ομάδα των κοριτσιών Κ16 του ΑΣ Γιάννενα.",

  keywords: [
    "ΑΣ Γιάννενα",
    "Βαθμολογία",
    "Κορίτσια",
    "Κ16",
    "Βόλεϊ",
    "Ιωάννινα",
  ],
};

export default async function GirlsU16Standings() {
  return (
    <div className="standings-page">
      <h1 className="standings-title">Βαθμολογία Κορίτσια Κ16</h1>
      <Standing team="girls-u16-teams" />
    </div>
  );
}
