import "@/app/ui/styles/standings/Standing.css";
import { Fetch_Standings } from "@/app/ui/lib/utils";
import Tiebreakers from "@/app/ui/components/standings/Tiebreakers";

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

  // Helper for null formatting
  const val = (v) => (v != null ? v : "-");

  const formatRatioString = (a, b) => {
    if (a == null || b == null) return "-";
    const ratio =
      Number(b) === 0
        ? Number(a).toFixed(2)
        : (Number(a) / Number(b)).toFixed(2);
    return `${ratio} (${a}:${b})`;
  };

  // Helper to render text with non-bold text inside ()
  const renderTextWithRegularParens = (str) => {
    if (typeof str !== "string" || !str.includes("(")) return str;

    const parts = str.split(/(\(.*?\))/g);
    return parts.map((part, i) => {
      if (part.startsWith("(") && part.endsWith(")")) {
        return (
          <span key={i} className="regular-text">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <>
      <div className="table-scroll-container">
        <table className="standings-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Ομάδα</th>
              <th>{renderTextWithRegularParens("Αγώνες (Ν-Η)")}</th>
              <th>Βαθμοί</th>
              <th>Πόντοι</th>
              <th>{renderTextWithRegularParens("Συντ. Σετ (Υπέρ:Κατά)")}</th>
              <th>{renderTextWithRegularParens("Συντ. Πόντων (Υπέρ:Κατά)")}</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((t, index) => {
              const calculatedPoints =
                t.wins != null && t.loses != null
                  ? 2 * Number(t.wins) + 1 * Number(t.loses)
                  : "-";

              const recordStr =
                t.wins != null || t.loses != null
                  ? `${val(t.gamesPlayed)} (${val(t.wins)}-${val(t.loses)})`
                  : String(val(t.gamesPlayed));

              const setRatioStr = formatRatioString(t.setsFor, t.setsAgainst);
              const pointRatioStr = formatRatioString(
                t.pointsFor,
                t.pointsAgainst,
              );

              return (
                <tr key={t.id}>
                  <td>
                    <span className="rank-badge">{index + 1}</span>
                  </td>
                  <td className="team-info">
                    {t.logo?.url ? (
                      <img
                        src={t.logo.url}
                        alt={t.name}
                        className="team-logo"
                      />
                    ) : (
                      <div className="team-logo-fallback" aria-label={t.name} />
                    )}
                    <span className="team-name">{t.name}</span>
                  </td>
                  <td>{renderTextWithRegularParens(recordStr)}</td>
                  <td className="text-purple">{calculatedPoints}</td>
                  <td>{val(t.points)}</td>
                  <td>{renderTextWithRegularParens(setRatioStr)}</td>
                  <td>{renderTextWithRegularParens(pointRatioStr)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Tiebreakers />
    </>
  );
}
