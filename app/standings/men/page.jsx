import Standing from "@/app/ui/components/standings/Standing";
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
    </div>
  );
}
