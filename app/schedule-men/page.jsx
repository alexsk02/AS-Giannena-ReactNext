"use client";

import { useEffect, useState } from "react";
import "../styles/Matches.css";

export default function MenMatches() {
  const [matches, setMatches] = useState([]);
  const [teams, setTeams] = useState([]);
  const [selectedMatchday, setSelectedMatchday] = useState("Αγωνιστική 1η");
  const [matchdays, setMatchdays] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ Loading state

  useEffect(() => {
    async function fetchData() {
      try {
        const matchRes = await fetch(
          "https://as-giannena-strapibackend.onrender.com/api/men-matches?populate=*&pagination[limit]=100"
        );

        const teamRes = await fetch(
          "https://as-giannena-strapibackend.onrender.com/api/men-teams?populate=logo"
        );

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

        // ✅ Find the most recent matchday based on date
        const now = new Date();
        let mostRecentMatchday = allMatchdays[0];

        const matchesByDay = allMatchdays.map((md) => ({
          matchday: md,
          latestDate: new Date(
            Math.max(
              ...parsedMatches
                .filter((m) => m.matchday === md)
                .map((m) => new Date(m.date))
            )
          ),
        }));

        const pastMatchdays = matchesByDay
          .filter((m) => m.latestDate <= now)
          .sort((a, b) => b.latestDate - a.latestDate);

        if (pastMatchdays.length > 0) {
          mostRecentMatchday = pastMatchdays[0].matchday;
        } else {
          const upcoming = matchesByDay
            .filter((m) => m.latestDate > now)
            .sort((a, b) => a.latestDate - b.latestDate);
          if (upcoming.length > 0) {
            mostRecentMatchday = upcoming[0].matchday;
          }
        }

        setMatchdays(allMatchdays);
        setMatches(parsedMatches);
        setTeams(parsedTeams);
        setSelectedMatchday(mostRecentMatchday);
      } catch (error) {
        console.error("Error fetching match or team data:", error);
      } finally {
        setLoading(false); // ✅ Finished loading
      }
    }

    fetchData();
  }, []);

  const filteredMatches = matches.filter(
    (match) => match.matchday === selectedMatchday
  );

  const getLogo = (teamName) => {
    const team = teams.find((t) => t.name === teamName);
    return team?.logo || "";
  };

  const formatDate = (dateStr) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Date(dateStr).toLocaleDateString("el-GR", options);
  };

  const formatTime = (dateStr) => {
    const options = { hour: "2-digit", minute: "2-digit", hour12: false };
    return new Date(dateStr).toLocaleTimeString("el-GR", options);
  };

  return (
    <div className="matches-page">
      <title>ΑΣ Γιάννενα Βόλεϊ- Αγώνες Άνδρες</title>
      <meta
        name="description"
        content="Δείτε τους αγώνες για την ομάδα των ανδρών του ΑΣ Γιάννενα."
      />
      <meta name="keywords" content="ΑΣ Γιάννενα, Αγώνες, Άνδρες, Βόλεϊ" />

      <h1 className="matches-title">Αγώνες Ανδρών</h1>

      {/* Show dropdown only after loading */}
      {matchdays.length > 0 && !loading && (
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
