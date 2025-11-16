"use client";

import { useEffect, useState } from "react";
import "../styles/Standings.css";
import "../styles/Matches.css";

export default function GirlsU18Standings() {
  const [group1Teams, setGroup1Teams] = useState([]);
  const [group2Teams, setGroup2Teams] = useState([]);

  useEffect(() => {
    async function fetchTeams() {
      try {
        // Fetch Όμιλος 1
        const res1 = await fetch(
          "https://as-giannena-strapibackend.onrender.com/api/girls-u18-teams?populate=logo"
        );
        const data1 = await res1.json();

        const parsedGroup1 = data1.data
          .map((team) => ({
            id: team.id,
            name: team.name,
            gamesPlayed: team.gamesPlayed,
            wins: team.wins,
            loses: team.loses,
            points: team.points,
            logo: team.logo?.url || "",
          }))
          .sort((a, b) => b.points - a.points);

        setGroup1Teams(parsedGroup1);

        // Fetch Όμιλος 2
        const res2 = await fetch(
          "https://as-giannena-strapibackend.onrender.com/api/girls-u18-team2s?populate=logo"
        );
        const data2 = await res2.json();

        const parsedGroup2 = data2.data
          .map((team) => ({
            id: team.id,
            name: team.name,
            gamesPlayed: team.gamesPlayed,
            wins: team.wins,
            loses: team.loses,
            points: team.points,
            logo: team.logo?.url || "",
          }))
          .sort((a, b) => b.points - a.points);

        setGroup2Teams(parsedGroup2);
      } catch (error) {
        console.error("Failed to fetch teams:", error);
      }
    }

    fetchTeams();
  }, []);

  const renderTable = (teams) => (
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
                  <img src={team.logo} alt={team.name} className="team-logo" />
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
  );

  return (
    <div className="standings-page">
      <title>ΑΣ Γιάννενα Βόλεϊ- Βαθμολογία Κορίτσια Κ18</title>
      <meta
        name="description"
        content="Δείτε τη βαθμολογία για την ομάδα των κοριτσιών Κ18 του ΑΣ Γιάννενα."
      />
      <meta
        name="keywords"
        content="ΑΣ Γιάννενα, Βαθμολογία, Κορίτσια, Κ18, Βόλεϊ"
      />
      <h1 className="standings-title">Βαθμολογία Κοριτσιών Κ18</h1>

      {/* Όμιλος 1 */}
      <h2 className="group-title">Όμιλος 1</h2>
      {renderTable(group1Teams)}

      {/* Όμιλος 2 */}
      <h2 className="group-title">Όμιλος 2</h2>
      {renderTable(group2Teams)}
    </div>
  );
}
