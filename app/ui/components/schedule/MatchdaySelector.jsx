"use client";

import { useEffect, useState } from "react";
import "@/app/ui/styles/schedule/MatchdaySelector.css";
import {
  filterMatchesByMatchday,
  getTeamLogo,
  formatMatchDate,
  formatMatchTime,
  getRecentMatchday,
  getAllMatchdays,
  formatMatchdaysForDropdown,
} from "@/app/ui/lib/utils";

export default function MatchdaySelector({ teams, matches }) {
  const [selectedMatchday, setSelectedMatchday] = useState(
    getRecentMatchday(matches),
  );

  useEffect(() => {
    setSelectedMatchday(getRecentMatchday(matches));
  }, [matches]);

  const allMatchdays = getAllMatchdays(matches);
  const filteredMatches = filterMatchesByMatchday(matches, selectedMatchday);

  if (!matches || matches.length === 0) {
    return (
      <p className="no-matches-message">
        Σε αναμονή για την εκκίνηση του πρωταθλήματος
      </p>
    );
  }

  return (
    <>
      <div className="matchday-selector">
        <label>Αγωνιστική: </label>
        <select
          value={selectedMatchday}
          onChange={(e) => setSelectedMatchday(e.target.value)}
        >
          {allMatchdays.map((md) => (
            <option key={md} value={md}>
              {md}
            </option>
          ))}
        </select>
      </div>

      <div className="matches-list">
        {filteredMatches.map((match) => (
          <div key={match.id} className="match-card">
            <div className="team">
              <img
                src={getTeamLogo(teams, match.homeTeam.name)}
                className="match-team-logo"
              />
              <span>{match.homeTeam.name}</span>
            </div>

            <div className="match-info">
              {match.homeScore !== null && match.awayScore !== null ? (
                <span className="score">
                  {match.homeScore} - {match.awayScore}
                </span>
              ) : (
                <span className="score">vs</span>
              )}
              <span className="date">{formatMatchDate(match.date)}</span>
              <span className="time">{formatMatchTime(match.date)}</span>
            </div>

            <div className="team">
              <img
                src={getTeamLogo(teams, match.awayTeam.name)}
                className="match-team-logo"
              />
              <span>{match.awayTeam.name}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
