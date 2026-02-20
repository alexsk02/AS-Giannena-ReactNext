import Standing from "@/app/ui/components/standings/Standing";
import Bracket from "@/app/ui/components/standings/Bracket";
import { men_bracketData } from "@/app/ui/data/bracket";
import "@/app/ui/styles/standings/StandingPage.css";

export const metadata = {
  title: "Βαθμολογία Ανδρών-ΑΣ Γιάννενα Βόλεϊ",

  description: "Δείτε τη βαθμολογία για την ομάδα των ανδρών του ΑΣ Γιάννενα.",

  keywords: ["ΑΣ Γιάννενα", "Βαθμολογία", "Άνδρες", "Βόλεϊ", "Ιωάννινα"],
};

export default async function ΜenStandings() {
  return (
    <div className="standings-page">
      <h1 className="standings-title">Βαθμολογία Άνδρες</h1>
      <Standing team="men-teams" />
      <p className="standing-extra-info">
        Το σωματείο <strong>ΑΣ ΓΙΑΝΝΕΝΑ</strong> ξεκίνησε το πρωτάθλημα με ποινή
        αφαίρεσης <strong>(-3)</strong> βαθμών λόγω αποχώρησής του την
        αγωνιστική περίοδο 2024-2025 από το πρωτάθλημα A2 Εθνικής Ανδρών.
      </p>
      <h1 className="standings-title">Playoff Άνδρες</h1>
      <Bracket
        matches={men_bracketData}
        startFrom="semifinals"
        showThirdPlace={false}
      />
    </div>
  );
}
