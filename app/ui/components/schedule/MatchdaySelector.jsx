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

  const getMatchSets = (match) => {
    const sets = [];
    for (let i = 1; i <= 5; i++) {
      const homeSet = match[`homeSet${i}`];
      const awaySet = match[`awaySet${i}`];
      if (homeSet != null && awaySet != null) {
        sets.push(`${homeSet}-${awaySet}`);
      }
    }
    return sets;
  };

  return (
    <div className="schedule-container">
      {allMatchdays.length > 0 && (
        <div className="matchdays-tab-section">
          <span className="matchdays-label">Αγωνιστική</span>
          <div className="matchday-chips-scroll">
            {allMatchdays.map((mday) => {
              const isSelected = mday === selectedMatchday;
              return (
                <button
                  key={mday}
                  type="button"
                  className={`matchday-chip ${isSelected ? "active" : ""}`}
                  onClick={() => setSelectedMatchday(mday)}
                >
                  {mday}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="matches-list">
        {filteredMatches.length === 0 ? (
          <div className="empty-matches-box">
            Δεν υπάρχουν αγώνες για την επιλεγμένη αγωνιστική.
          </div>
        ) : (
          filteredMatches.map((match) => {
            const sets = getMatchSets(match);
            const homeScoreRaw = match.homeScore;
            const awayScoreRaw = match.awayScore;
            const hasScores = homeScoreRaw != null && awayScoreRaw != null;

            return (
              <div key={match.id} className="app-match-card">
                {match.date && (
                  <div className="card-header-date">
                    <span>
                      {formatMatchDate(match.date)} •{" "}
                      {formatMatchTime(match.date)}
                    </span>
                  </div>
                )}

                <div className="card-match-row">
                  <div className="team-profile">
                    <div className="logo-wrapper">
                      <img
                        src={getTeamLogo(teams, match.homeTeam?.name)}
                        alt={match.homeTeam?.name || "Home Team"}
                        className="match-team-logo"
                      />
                    </div>
                    <span className="team-name-text">
                      {match.homeTeam?.name}
                    </span>
                  </div>

                  <div className="score-display-box">
                    <div className="scores-row">
                      {hasScores ? (
                        <>
                          <span className="score-number active-score">
                            {homeScoreRaw}
                          </span>
                          <span className="score-colon">:</span>
                          <span className="score-number active-score">
                            {awayScoreRaw}
                          </span>
                        </>
                      ) : (
                        <span className="score-vs">vs</span>
                      )}
                    </div>

                    {sets.length > 0 && (
                      <div className="sets-pill">{sets.join(", ")}</div>
                    )}
                  </div>

                  <div className="team-profile">
                    <div className="logo-wrapper">
                      <img
                        src={getTeamLogo(teams, match.awayTeam?.name)}
                        alt={match.awayTeam?.name || "Away Team"}
                        className="match-team-logo"
                      />
                    </div>
                    <span className="team-name-text">
                      {match.awayTeam?.name}
                    </span>
                  </div>
                </div>

                {match.location && (
                  <div className="card-footer-location">
                    <svg
                      className="card-icon location-pin"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5-2.5z" />
                    </svg>
                    <span>{match.location}</span>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
