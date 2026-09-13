import Standing from "@/app/ui/components/standings/Standing";
import "@/app/ui/styles/standings/StandingPage.css";

export const metadata = {
  title: "Βαθμολογία Κορίτσια Κ15-ΑΣ Γιάννενα Βόλεϊ",

  description:
    "Δείτε τη βαθμολογία για την ομάδα των κοριτσιών Κ15 του ΑΣ Γιάννενα.",

  keywords: [
    "ΑΣ Γιάννενα",
    "Βαθμολογία",
    "Κορίτσια",
    "Κ15",
    "Βόλεϊ",
    "Ιωάννινα",
  ],
};

export default async function GirlsU15Standings() {
  return (
    <div className="standings-page">
      <h1 className="standings-title">Βαθμολογία Κορίτσια Κ15</h1>
      <Standing team="girls-u15-teams" />
    </div>
  );
}
