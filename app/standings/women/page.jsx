import Standing from "@/app/ui/components/standings/Standing";
import Bracket from "@/app/ui/components/standings/Bracket";
import { women_bracketData } from "@/app/ui/data/bracket";

import "@/app/ui/styles/standings/StandingPage.css";

export const metadata = {
  title: "Βαθμολογία Γυναικών-ΑΣ Γιάννενα Βόλεϊ",

  description:
    "Δείτε τη βαθμολογία για την ομάδα των γυναικών του ΑΣ Γιάννενα.",

  keywords: ["ΑΣ Γιάννενα", "Βαθμολογία", "Γυναίκες", "Βόλεϊ", "Ιωάννινα"],
};

export default async function WomenStandings() {
  return (
    <div className="standings-page">
      <h1 className="standings-title">Βαθμολογία Γυναίκες</h1>
      <Standing team="women-teams" />
      <p className="standing-extra-info">
        Το σωματείο <strong>ΑΣ ΒΟΛΙΣ</strong> ξεκίνησε το πρωτάθλημα με ποινή
        αφαίρεσης <strong>(-6) </strong>
        βαθμών λόγω αποχώρησής του την αγωνιστική περίοδο 2024-2025 από το
        πρωτάθλημα Β΄ Εθνικής Γυναικών.
      </p>
      <h1 className="standings-title">Playoff Γυναίκες</h1>
      <Bracket
        matches={women_bracketData}
        startFrom="semifinals"
        showThirdPlace={false}
      />
    </div>
  );
}
