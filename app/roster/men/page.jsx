import "@/app/ui/styles/roster/RosterPage.css";
import PlayerCard from "@/app/ui/components/roster/PlayerCard";
import StaffCard from "@/app/ui/components/roster/StaffCard";
import { men_players, men_staff } from "@/app/ui/data/roster";

export const metadata = {
  title: "Ρόστερ Ανδρών-ΑΣ Γιάννενα Βόλεϊ",

  description: "Δείτε το ρόστερ της ανδρικής ομάδας του ΑΣ Γιάννενα.",

  keywords: ["ΑΣ Γιάννενα", "Ρόστερ", "Ομάδα", "Άνδρες", "Βόλεϊ", "Ιωάννινα"],
};

export default function MenRoster() {
  return (
    <div className="roster-page">
      <h1 className="section-title-text">Ρόστερ Ανδρών</h1>
      <PlayerCard players={men_players} team="men" />

      <h2 className="section-title-text">Προπονητικό Team</h2>

      <StaffCard staff={men_staff} />
    </div>
  );
}
