"use client";

import { useEffect, useState } from "react";
import "../styles/Standings.css";
import "../styles/Matches.css";

export default function BoysU21Standings() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTeams() {
      try {
        const response = await fetch(
          "https://as-giannena-strapibackend.onrender.com/api/boys-u21-teams?populate=logo"
        );
        const data = await response.json();

        const parsedTeams = data.data.map((item) => {
          const team = item;
          return {
            id: team.id,
            name: team.name,
            gamesPlayed: team.gamesPlayed,
            wins: team.wins,
            loses: team.loses,
            points: team.points,
            logo: team.logo?.url || "",
          };
        });

        setTeams(parsedTeams.sort((a, b) => b.points - a.points));
      } catch (error) {
        console.error("Failed to fetch teams:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTeams();
  }, []);

  return (
    <div className="standings-page">
      <title>ΑΣ Γιάννενα Βόλεϊ- Βαθμολογία Αγόρια Κ21</title>
      <meta
        name="description"
        content="Δείτε τη βαθμολογία για την ομάδα των αγοριών Κ21 του ΑΣ Γιάννενα."
      />
      <meta
        name="keywords"
        content="ΑΣ Γιάννενα, Βαθμολογία, Αγόρια, Κ21, Βόλεϊ"
      />

      <h1 className="standings-title">Βαθμολογία Αγοριών Κ21</h1>

      {loading ? (
        <p>Φόρτωση βαθμολογίας...</p>
      ) : teams.length === 0 ? (
        <p className="no-matches-message">
          Σε αναμονή για την εκκίνηση του πρωταθλήματος
        </p>
      ) : (
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
                    {team.logo && (
                      <img
                        src={team.logo}
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
      )}
    </div>
  );
}
