"use client";

import { useEffect, useState } from "react";
import "../styles/Matches.css";

export default function BoysU17Matches() {
  const [matches, setMatches] = useState([]);
  const [teams, setTeams] = useState([]);
  const [selectedMatchday, setSelectedMatchday] = useState("Αγωνιστική 1η");
  const [matchdays, setMatchdays] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ loading state

  useEffect(() => {
    async function fetchData() {
      try {
        const [matchRes, teamRes] = await Promise.all([
          fetch(
            "https://as-giannena-strapibackend.onrender.com/api/boys-u17-matches?populate=*&pagination[limit]=100"
          ),
          fetch(
            "https://as-giannena-strapibackend.onrender.com/api/boys-u17-teams?populate=logo"
          ),
        ]);

        const matchData = await matchRes.json();
        const teamData = await teamRes.json();

        const parsedTeams = teamData.data.map((item) => ({
          name: item.name,
          logo: item.logo?.url || "",
        }));

        const parsedMatches = matchData.data.map((item) => ({
          id: item.id,
          homeTeam: item.homeTeam?.name,
          awayTeam: item.awayTeam?.name,
          homeScore: item.homeScore,
          awayScore: item.awayScore,
          matchday: item.matchday,
          date: item.date,
        }));

        const allMatchdays = [
          ...new Set(parsedMatches.map((m) => m.matchday)),
        ].sort((a, b) => {
          const numA = parseInt(a.match(/\d+/)?.[0]);
          const numB = parseInt(b.match(/\d+/)?.[0]);
          return numA - numB;
        });

        // Determine the matchday to show
        const now = new Date();
        let selectedMatchday = allMatchdays[0];

        const matchesByDay = allMatchdays.map((md) => {
          const dayMatches = parsedMatches.filter((m) => m.matchday === md);

          const hasStarted = dayMatches.some((m) => new Date(m.date) <= now);
          const allPast = dayMatches.every((m) => new Date(m.date) <= now);

          return {
            matchday: md,
            hasStarted,
            allPast,
          };
        });

        // 1️⃣ Prefer current matchday (some matches played, some not)
        const currentMatchday = matchesByDay.find(
          (m) => m.hasStarted && !m.allPast
        );

        if (currentMatchday) {
          selectedMatchday = currentMatchday.matchday;
        } else {
          // 2️⃣ Otherwise, next matchday where no match has started
          const upcoming = matchesByDay.find((m) => !m.hasStarted);

          if (upcoming) {
            selectedMatchday = upcoming.matchday;
          } else {
            // 3️⃣ Otherwise, fallback to last fully completed matchday
            const pastMatchdays = matchesByDay.filter((m) => m.allPast);
            if (pastMatchdays.length > 0) {
              selectedMatchday =
                pastMatchdays[pastMatchdays.length - 1].matchday;
            }
          }
        }
        // (fallback to Αγωνιστική 1η already handled by initialization)

        setMatchdays(allMatchdays);
        setMatches(parsedMatches);
        setTeams(parsedTeams);
        setSelectedMatchday(selectedMatchday);
      } catch (error) {
        console.error("Error fetching match or team data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const filteredMatches = matches.filter(
    (match) => match.matchday === selectedMatchday
  );

  const getLogo = (teamName) =>
    teams.find((t) => t.name === teamName)?.logo || "";

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("el-GR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  const formatTime = (dateStr) =>
    new Date(dateStr).toLocaleTimeString("el-GR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

  return (
    <div className="matches-page">
      <title>Αγώνες Αγόρια Κ17-ΑΣ Γιάννενα Βόλεϊ</title>
      <meta
        name="description"
        content="Δείτε τους αγώνες για την ομάδα των αγοριών Κ17 του ΑΣ Γιάννενα."
      />
      <meta name="keywords" content="ΑΣ Γιάννενα, Αγώνες, Αγόρια, Κ17, Βόλεϊ" />

      <h1 className="matches-title">Αγώνες Αγοριών Κ17</h1>

      {!loading && matchdays.length > 0 && (
        <div className="matchday-selector">
          <label>Αγωνιστική: </label>
          <select
            value={selectedMatchday}
            onChange={(e) => setSelectedMatchday(e.target.value)}
          >
            {matchdays.map((md, idx) => (
              <option key={idx} value={md}>
                {md}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="matches-list">
        {loading ? (
          <p>Φόρτωση αγώνων...</p>
        ) : filteredMatches.length > 0 ? (
          filteredMatches.map((match) => (
            <div key={match.id} className="match-card">
              <div className="team">
                <img
                  src={getLogo(match.homeTeam)}
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
                  src={getLogo(match.awayTeam)}
                  alt={match.awayTeam}
                  className="team-logo"
                />
                <span>{match.awayTeam}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="no-matches-message">
            Σε αναμονή για την εκκίνηση του πρωταθλήματος
          </p>
        )}
      </div>
    </div>
  );
}
