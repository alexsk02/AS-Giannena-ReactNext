import Standing from "@/app/ui/components/standings/Standing";
import "@/app/ui/styles/standings/StandingPage.css";

export const metadata = {
  title: "Βαθμολογία Αγόρια Κ21-ΑΣ Γιάννενα Βόλεϊ",

  description:
    "Δείτε τη βαθμολογία για την ομάδα των αγοριών Κ21 του ΑΣ Γιάννενα.",

  keywords: ["ΑΣ Γιάννενα", "Βαθμολογία", "Αγόρια", "Κ21", "Βόλεϊ", "Ιωάννινα"],
};

export default async function BoysU21Standings() {
  return (
    <div className="standings-page">
      <h1 className="standings-title">Βαθμολογία Αγόρια Κ21</h1>
      <Standing team="boys-u21-teams" />
    </div>
  );
}
