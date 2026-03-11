import "@/app/ui/styles/standings/Standing.css";
import { Fetch_Standings } from "@/app/ui/lib/utils";

export default async function Standing({ team }) {
  let teams = await Fetch_Standings(team);

  if (team === "girls-u18-teams") {
    const allowedTeams = [
      "ΑΣ Γιάννενα",
      "ΠΑΣ Γιάννινα",
      "ΑΓΟ Φιλιππιάδας",
      "ΑΟ Φιλία Άρτας",
      "ΚΑΟ Αχιλλέας",
    ];

    teams = teams.filter((t) => allowedTeams.includes(t.name));
  }

  if (!teams || teams.length === 0) {
    return (
      <p className="no-matches-message">
        Σε αναμονή για την εκκίνηση του πρωταθλήματος
      </p>
    );
  }

  return (
    <>
      <div className="table-scroll-container">
        <table className="standings-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Ομάδα</th>
              <th>Αγώνες</th>
              <th>Νίκες</th>
              <th>Ήττες</th>
              <th>Βαθμοί</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr key={team.id}>
                <td>{index + 1}</td>
                <td className="team-info">
                  {team.logo.url && (
                    <img
                      src={team.logo.url}
                      alt={team.name}
                      className="team-logo"
                    />
                  )}
                  <span>{team.name}</span>
                </td>
                <td>{team.gamesPlayed}</td>
                <td>{team.wins}</td>
                <td>{team.loses}</td>
                <td>{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
