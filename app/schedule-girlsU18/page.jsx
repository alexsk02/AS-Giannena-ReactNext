"use client";

import { useEffect, useState } from "react";
import "../styles/Matches.css";
import "../styles/Standings.css";

export default function GirlsU18Matches() {
  const [matches1, setMatches1] = useState([]);
  const [matches2, setMatches2] = useState([]);
  const [teams1, setTeams1] = useState([]);
  const [teams2, setTeams2] = useState([]);
  const [selectedMatchday1, setSelectedMatchday1] = useState("");
  const [selectedMatchday2, setSelectedMatchday2] = useState("");
  const [matchdays1, setMatchdays1] = useState([]);
  const [matchdays2, setMatchdays2] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [matchRes1, teamRes1] = await Promise.all([
          fetch(
            "https://as-giannena-strapibackend.onrender.com/api/girls-u18-matches?populate=*&pagination[limit]=100"
          ),
          fetch(
            "https://as-giannena-strapibackend.onrender.com/api/girls-u18-teams?populate=logo"
          ),
        ]);

        const [matchRes2, teamRes2] = await Promise.all([
          fetch(
            "https://as-giannena-strapibackend.onrender.com/api/girls-u18-match2s?populate=*&pagination[limit]=100"
          ),
          fetch(
            "https://as-giannena-strapibackend.onrender.com/api/girls-u18-team2s?populate=logo"
          ),
        ]);

        const [matchData1, teamData1, matchData2, teamData2] =
          await Promise.all([
            matchRes1.json(),
            teamRes1.json(),
            matchRes2.json(),
            teamRes2.json(),
          ]);

        const parsedTeams1 = teamData1.data.map((item) => ({
          name: item.name,
          logo: item.logo?.url || "",
        }));
        const parsedTeams2 = teamData2.data.map((item) => ({
          name: item.name,
          logo: item.logo?.url || "",
        }));

        const parsedMatches1 = matchData1.data.map((item) => ({
          id: item.id,
          homeTeam: item.homeTeam?.name,
          awayTeam: item.awayTeam?.name,
          homeScore: item.homeScore,
          awayScore: item.awayScore,
          matchday: item.matchday,
          date: new Date(item.date),
        }));

        const parsedMatches2 = matchData2.data.map((item) => ({
          id: item.id,
          homeTeam: item.homeTeam?.name,
          awayTeam: item.awayTeam?.name,
          homeScore: item.homeScore,
          awayScore: item.awayScore,
          matchday: item.matchday,
          date: new Date(item.date),
        }));

        const allMatchdays1 = [
          ...new Set(parsedMatches1.map((m) => m.matchday)),
        ].sort();
        const allMatchdays2 = [
          ...new Set(parsedMatches2.map((m) => m.matchday)),
        ].sort();

        const now = new Date();

        // ---- Ομιλος 1 ----
        const matchesByDay1 = allMatchdays1.map((md) => {
          const dayMatches = parsedMatches1.filter((m) => m.matchday === md);
          const hasStarted = dayMatches.some((m) => new Date(m.date) <= now);
          const allPast = dayMatches.every((m) => new Date(m.date) <= now);

          return {
            matchday: md,
            hasStarted,
            allPast,
          };
        });

        let selectedMd1 = allMatchdays1[0];

        // 1️⃣ Current matchday
        const currentMd1 = matchesByDay1.find(
          (m) => m.hasStarted && !m.allPast
        );
        if (currentMd1) selectedMd1 = currentMd1.matchday;
        // 2️⃣ Next matchday
        else {
          const upcomingMd1 = matchesByDay1.find((m) => !m.hasStarted);
          if (upcomingMd1) selectedMd1 = upcomingMd1.matchday;
          // 3️⃣ Last completed
          else {
            const pastMd1 = matchesByDay1.filter((m) => m.allPast);
            if (pastMd1.length > 0)
              selectedMd1 = pastMd1[pastMd1.length - 1].matchday;
          }
        }

        // ---- Ομιλος 2 ----
        const matchesByDay2 = allMatchdays2.map((md) => {
          const dayMatches = parsedMatches2.filter((m) => m.matchday === md);
          const hasStarted = dayMatches.some((m) => new Date(m.date) <= now);
          const allPast = dayMatches.every((m) => new Date(m.date) <= now);

          return {
            matchday: md,
            hasStarted,
            allPast,
          };
        });

        let selectedMd2 = allMatchdays2[0];

        const currentMd2 = matchesByDay2.find(
          (m) => m.hasStarted && !m.allPast
        );
        if (currentMd2) selectedMd2 = currentMd2.matchday;
        else {
          const upcomingMd2 = matchesByDay2.find((m) => !m.hasStarted);
          if (upcomingMd2) selectedMd2 = upcomingMd2.matchday;
          else {
            const pastMd2 = matchesByDay2.filter((m) => m.allPast);
            if (pastMd2.length > 0)
              selectedMd2 = pastMd2[pastMd2.length - 1].matchday;
          }
        }

        // ---- Set state ----
        setTeams1(parsedTeams1);
        setTeams2(parsedTeams2);
        setMatches1(parsedMatches1);
        setMatches2(parsedMatches2);
        setMatchdays1(allMatchdays1);
        setMatchdays2(allMatchdays2);
        setSelectedMatchday1(selectedMd1);
        setSelectedMatchday2(selectedMd2);
      } catch (error) {
        console.error("Error fetching matches or teams:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const getLogo = (teamName, teams) =>
    teams.find((t) => t.name === teamName)?.logo || "";

  const formatDate = (date) =>
    date.toLocaleDateString("el-GR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  const formatTime = (date) =>
    date.toLocaleTimeString("el-GR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

  const renderMatches = (matches, teams) =>
    matches.length > 0 ? (
      <div className="matches-list">
        {matches.map((match) => (
          <div key={match.id} className="match-card">
            <div className="team">
              <img
                src={getLogo(match.homeTeam, teams)}
                alt={match.homeTeam}
                className="team-logo"
              />
              <span>{match.homeTeam}</span>
            </div>

            <div className="match-info">
              {match.homeScore !== null && match.awayScore !== null ? (
                <span className="score">
                  {match.homeScore} - {match.awayScore}
                </span>
              ) : (
                <span className="score">vs</span>
              )}
              <span className="date">{formatDate(match.date)}</span>
              <span className="time">{formatTime(match.date)}</span>
            </div>

            <div className="team">
              <img
                src={getLogo(match.awayTeam, teams)}
                alt={match.awayTeam}
                className="team-logo"
              />
              <span>{match.awayTeam}</span>
            </div>
          </div>
        ))}
      </div>
    ) : null;

  const noMatches = !matches1.length && !matches2.length;

  return (
    <div className="matches-page">
      <title>Αγώνες Κορίτσια Κ18-ΑΣ Γιάννενα Βόλεϊ</title>
      <meta
        name="description"
        content="Δείτε τους αγώνες για την ομάδα των κοριτσιών Κ18 του ΑΣ Γιάννενα."
      />
      <meta
        name="keywords"
        content="ΑΣ Γιάννενα, Αγώνες, Κορίτσια, Κ18, Βόλεϊ"
      />

      <h1 className="matches-title">Αγώνες Κοριτσιών Κ18</h1>

      {loading ? (
        <p>Φόρτωση αγώνων...</p>
      ) : matches1.length === 0 && matches2.length === 0 ? (
        <p className="no-matches-message">
          Σε αναμονή για την εκκίνηση του πρωταθλήματος
        </p>
      ) : (
        <>
          {/* Όμιλος 1 */}
          {matches1.length > 0 && (
            <>
              <h2 className="group-title">Όμιλος 1</h2>
              {matchdays1.length > 0 && (
                <div className="matchday-selector">
                  <label>Αγωνιστική: </label>
                  <select
                    value={selectedMatchday1}
                    onChange={(e) => setSelectedMatchday1(e.target.value)}
                  >
                    {matchdays1.map((md) => (
                      <option key={md} value={md}>
                        {md}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              {renderMatches(
                matches1.filter((m) => m.matchday === selectedMatchday1),
                teams1
              )}
            </>
          )}

          {/* Όμιλος 2 */}
          {matches2.length > 0 && (
            <>
              <h2 className="group-title">Όμιλος 2</h2>
              {matchdays2.length > 0 && (
                <div className="matchday-selector">
                  <label>Αγωνιστική: </label>
                  <select
                    value={selectedMatchday2}
                    onChange={(e) => setSelectedMatchday2(e.target.value)}
                  >
                    {matchdays2.map((md) => (
                      <option key={md} value={md}>
                        {md}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              {renderMatches(
                matches2.filter((m) => m.matchday === selectedMatchday2),
                teams2
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
