"use client";

import "../styles/Roster.css";
import { useState } from "react";
import women_player1 from "@/public/women_player1.jpg";
import women_player2 from "@/public/women_player2.jpg";
import women_player3 from "@/public/women_player3.jpg";
import women_player4 from "@/public/women_player4.jpg";
import women_player5 from "@/public/women_player5.jpg";
import women_player6 from "@/public/women_player6.jpg";
import women_player7 from "@/public/women_player7.jpg";
import women_player8 from "@/public/women_player8.jpg";
import women_player9 from "@/public/women_player9.jpg";

const players = [
  {
    name: "Ουρανία Ντούση",
    image: women_player1,
    dob: "5-6-1996",
    jersey: "15",
    instagram: "https://www.instagram.com/rania__nt",
    position: "Κεντρικός",
    prevTeam: "ΑΣ Γιάννενα",
    height: "1.76μ",
  },
  {
    name: "Ειρήνη Μίχου",
    image: women_player2,
    dob: "18-8-2005",
    jersey: "14",
    instagram: "https://www.instagram.com/eirhnh.michou",
    position: "Πασαδόρος",
    prevTeam: "ΑΣ Γιάννενα",
    height: "1.64μ",
  },
  {
    name: "Ιωάννα Μέτια",
    image: women_player3,
    dob: "29-5-2006",
    jersey: "4",
    instagram: "  https://www.instagram.com/ioannametia",
    position: "Πασαδόρος",
    prevTeam: "ΠΑΣ Γιάννινα",
    height: "1.65μ",
  },
  {
    name: "Σοφία Τσιαμούρα",
    image: women_player4,
    dob: "27-7-2003",
    jersey: "13",
    instagram: "https://www.instagram.com/sofiatsiamoura",
    position: "Λίμπερο",
    prevTeam: "ΓΣ Δράμας",
    height: "1.60μ",
  },
  {
    name: "Γεωργία Βεδουρά",
    image: women_player5,
    dob: "12-12-2000",
    jersey: "12",
    instagram: "https://www.instagram.com/georgia_vedoura ",
    position: "Λίμπερο",
    prevTeam: "ΑΓΣ Ιωαννίνων",
    height: "1.70μ",
  },
  {
    name: "Νεφέλη Ντιντιού",
    image: women_player6,
    dob: "30-8-2006",
    jersey: "2",
    instagram: "https://www.instagram.com/nefeliii______",
    position: "Ακραία",
    prevTeam: "ΑΕ Λάρισας",
    height: "1.67μ",
  },
  {
    name: "Στελίνα Παρασκευοπούλου",
    image: women_player7,
    dob: "16-3-2004",
    jersey: "13",
    instagram: "https://www.instagram.com/stelinaparaskevopoulou/",
    position: "Λίμπερο",
    prevTeam: "Ναύαρχος Βότσης",
    height: "1.64μ",
  },
  {
    name: "Νικολέττα Αγόρου",
    image: women_player8,
    dob: "10-1-2006",
    jersey: "1",
    instagram: "https://www.instagram.com/agorounikoleta ",
    position: "Κεντρικός",
    prevTeam: "ΦΓΣ Πρέβεζας",
    height: "1.80μ",
  },
  {
    name: "Ματίνα Μιχαλά",
    image: women_player9,
    dob: "2-5-2007",
    jersey: "9",
    instagram: "https://www.instagram.com/matina_michala_",
    position: "Ακραία",
    prevTeam: "ΑΣΠ Ερμής",
    height: "1.69μ",
  },
];

const staff = [
  "Καλογήρου Δημήτριος – Προπονητής",
  "Θεόπιστος Δημήτριος – Φροντιστής",
  "Κοσμάς Δημήτριος – Ιατρός",
  "Αμπατζής Διαμαντής – Φυσικοθεραπευτής",
];

function Roster() {
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePlayer = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="roster-page">
      <h2 className="section-title-text">Ρόστερ Γυναικών</h2>
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
              <span className="jersey-badge">{player.jersey}</span>
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
                  className="social-women"
                >
                  @{player.name}
                </a>
              </p>
            </div>
          </li>
        ))}
      </ul>

      <h2 className="section-title-text">Προπονητικό Team</h2>

      <div className="staff-grid">
        {staff.map((member, index) => {
          const [name, role] = member.split(" – ");
          return (
            <div key={index} className="staff-card">
              <h3 className="staff-name">{name}</h3>
              <p className="staff-role">{role}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Roster;
