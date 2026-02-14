"use client";

import "@/app/ui/styles/roster/PlayerCard.css";
import { useState } from "react";

export default function PlayerCard({ players, team }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePlayer = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <ul className="player-grid">
      {players.map((player, index) => (
        <li
          key={index}
          className={`player-card ${activeIndex === index ? "expanded" : ""}`}
          onClick={() => togglePlayer(index)}
        >
          <div className="player-image-wrapper">
            <img
              src={player.image.src}
              alt={player.name}
              className="player-photo"
            />
            <span className={`jersey-badge-${team}`}>{player.jersey}</span>
          </div>

          <div className="player-card-content">
            <h3 className="player-name">{player.name}</h3>
            <p className="player-position">{player.position}</p>
          </div>

          <div
            className={`player-details ${
              activeIndex === index ? "visible" : ""
            }`}
          >
            <p>
              <strong>Ημερ. Γέννησης:</strong> {player.dob}
            </p>
            <p>
              <strong>Ύψος:</strong> {player.height}
            </p>
            <p>
              <strong>Προηγούμενη ομάδα:</strong> {player.prevTeam}
            </p>
            <p>
              <strong>Social:</strong>{" "}
              <a
                href={player.instagram}
                target="_blank"
                rel="noreferrer"
                className={`social-details-${team}`}
              >
                @{player.name}
              </a>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
