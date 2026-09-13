import Standing from "@/app/ui/components/standings/Standing";
import "@/app/ui/styles/standings/StandingPage.css";

export const metadata = {
  title: "Βαθμολογία Αγόρια Κ15-ΑΣ Γιάννενα Βόλεϊ",

  description:
    "Δείτε τη βαθμολογία για την ομάδα των αγοριών Κ15 του ΑΣ Γιάννενα.",

  keywords: ["ΑΣ Γιάννενα", "Βαθμολογία", "Αγόρια", "Κ15", "Βόλεϊ", "Ιωάννινα"],
};

export default async function BoysU15Standings() {
  return (
    <div className="standings-page">
      <h1 className="standings-title">Βαθμολογία Αγόρια Κ15</h1>
      <Standing team="boys-u15-teams" />
    </div>
  );
}
