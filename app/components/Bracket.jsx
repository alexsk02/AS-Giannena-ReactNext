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

export default function Bracket() {
  return (
    <div className="bracket-wrapper">
      <div className="bracket-scale">
        {/* QUARTERFINALS */}
        <div className="round qf">
          <h3>Προημιτελικά</h3>
          <Match
            teamA="ΠΑΣ Γιάννινα"
            teamB="ΑΣ Βολίς"
            scoreA={[3]}
            scoreB={[0]}
          />
          <Match
            teamA="ΑΣ Γιάννενα "
            teamB="ΑΟ Φιλία Άρτας"
            scoreA={[3]}
            scoreB={[1]}
          />
          <Match
            teamA="ΦΓΣ Πρέβεζας"
            teamB="ΓΣ Άρτας"
            scoreA={[3]}
            scoreB={[0]}
          />
          <Match
            teamA="ΑΣΠ Ερμής"
            teamB="Ελπίδες Λευκάδας"
            scoreA={[]}
            scoreB={[]}
          />
        </div>

        {/* SEMIFINALS */}
        <div className="round sf">
          <h3>Ημιτελικά</h3>

          <div className="offset sf-offset-top" />

          <Match
            teamA="ΠΑΣ Γιάννινα"
            teamB="ΑΣ Γιάννενα"
            scoreA={[]}
            scoreB={[]}
          />

          <div className="offset sf-offset-bottom" />

          <Match
            teamA="Νικητής QF3"
            teamB="Νικητής QF4"
            scoreA={[]}
            scoreB={[]}
          />
        </div>

        {/* FINAL */}
        <div className="round final">
          <h3>Τελικος</h3>

          <div className="offset final-offset-top" />

          <Match
            teamA="Νικητής SF1"
            teamB="Νικητής SF2"
            scoreA={[]}
            scoreB={[]}
          />

          <div className="offset final-offset-middle" />

          <h4>Μικρός Τελικός</h4>

          <Match
            teamA="Ηττημένος SF1"
            teamB="Ηττημένος SF2"
            scoreA={[]}
            scoreB={[]}
          />
        </div>
      </div>
    </div>
  );
}
