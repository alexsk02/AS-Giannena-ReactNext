import { formatMatchDate, formatMatchTime } from "@/app/ui/lib/utils";
import "@/app/ui/styles/home/UpcomingMatches.css";

export default function UpcomingMatches({ upcomingMatches }) {
  return (
    <section className="upcoming-matches">
      <h2>Επόμενοι Αγώνες</h2>

      <div className="matches-grid">
        {upcomingMatches.length > 0 ? (
          upcomingMatches.map((match) => (
            <div key={match.id} className="match-card">
              <h3>{match.category}</h3>
              <p>
                {match.homeTeam} vs {match.awayTeam}
              </p>
              <p>
                {formatMatchDate(match.date)} - {formatMatchTime(match.date)}
              </p>
            </div>
          ))
        ) : (
          <p>Δεν υπάρχουν προσεχείς αγώνες για τον ΑΣ Γιάννενα.</p>
        )}
      </div>
    </section>
  );
}
