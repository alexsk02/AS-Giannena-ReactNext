"use client";
import "../styles/Bracket.css";

function Match({ teamA, teamB, scoreA = [], scoreB = [] }) {
  return (
    <div className="match-bracket">
      <div className="match-bracket-content">
        <div className="teams-bracket">
          <div className="team-bracket">{teamA}</div>
          <div className="team-bracket">{teamB}</div>
        </div>

        <div
          className={`scores-column ${scoreA.length > 1 ? "multi-score" : ""}`}
        >
          <div className="score-bracket-row">
            {scoreA.map((s, i) => (
              <span key={i} className="score-bracket">
                {s}
              </span>
            ))}
          </div>

          <div className="score-bracket-divider" />

          <div className="score-bracket-row">
            {scoreB.map((s, i) => (
              <span key={i} className="score-bracket">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Bracket_BoysU21() {
  return (
    <div className="bracket-wrapper">
      <div className="bracket-scale">
        {/* QUARTERFINALS */}

        {/* SEMIFINALS */}
        <div className="round sf">
          <h3>Ημιτελικά</h3>

          <div className="offset sf-offset-top" />

          <Match
            teamA="ΑΣ Γιάννενα"
            teamB="ΑΣΠ Ερμής"
            scoreA={[3, 3]}
            scoreB={[0, 0]}
          />

          <div className="offset sf-offset-bottom" />

          <Match
            teamA="ΓΣ Άρτας"
            teamB="Ελπίδες Λευκάδας"
            scoreA={[1, 3]}
            scoreB={[3, 2]}
          />
        </div>

        {/* FINAL */}
        <div className="round final">
          <h3>Τελικος</h3>

          <div className="offset final-offset-top" />

          <Match
            teamA="ΑΣ Γιάννενα"
            teamB="Ελπίδες Λευκάδας"
            scoreA={[3]}
            scoreB={[0]}
          />

          <div className="offset final-offset-middle" />
        </div>
      </div>
    </div>
  );
}
