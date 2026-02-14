import "@/app/ui/styles/roster/RosterPage.css";
import PlayerCard from "@/app/ui/components/roster/PlayerCard";
import StaffCard from "@/app/ui/components/roster/StaffCard";
import { women_players, women_staff } from "@/app/ui/data/roster";

export const metadata = {
  title: "Ρόστερ Γυναικών-ΑΣ Γιάννενα Βόλεϊ",

  description: "Δείτε το ρόστερ της γυναικείας ομάδας του ΑΣ Γιάννενα.",

  keywords: ["ΑΣ Γιάννενα", "Ρόστερ", "Ομάδα", "Γυναίκες", "Βόλεϊ", "Ιωάννινα"],
};

export default function WomenRoster() {
  return (
    <div className="roster-page">
      <h1 className="section-title-text">Ρόστερ Γυναικών</h1>
      <PlayerCard players={women_players} team="women" />

      <h2 className="section-title-text">Προπονητικό Team</h2>

      <StaffCard staff={women_staff} />
    </div>
  );
}
