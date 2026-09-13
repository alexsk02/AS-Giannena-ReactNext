import Standing from "@/app/ui/components/standings/Standing";
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
    </div>
  );
}
