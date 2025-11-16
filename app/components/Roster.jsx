"use client";

import "../styles/Roster.css";
import { useState } from "react";
import dagkopoulou from "@/public/dagkopoulou.jpg";
import boziou from "@/public/boziou.jpg";
import kaloutsaki from "@/public/kaloutsaki.jpg";
import mihou from "@/public/mihou.jpg";
import ntousi from "@/public/ntousi.jpg";
import tsiamoura from "@/public/tsiamoura.jpg";
import Image from "next/image";

const players = [
  {
    name: "Χρύσα Νταγκοπούλου",
    image: dagkopoulou,
    dob: "11-12-2001",
    jersey: "10",
    instagram: "https://www.instagram.com/chrysa.ntagkopoulou",
    position: "Διαγώνιος",
    prevTeam: "ΑΣ Ποσειδώνας Βέροιας",
    height: "1.79μ",
  },
  {
    name: "Ευθαλία Μπόζιου",
    image: boziou,
    dob: "2-4-1999",
    jersey: "4",
    instagram: "	https://www.instagram.com/boziou",
    position: "Κεντρικός",
    prevTeam: "ΑΣ Γιάννενα",
    height: "1.85μ",
  },
  {
    name: "Αλεξάνδρα Καλουτσάκη",
    image: kaloutsaki,
    dob: "30-10-2003",
    jersey: "5",
    instagram: "https://www.instagram.com/alexandra.kaloutsaki",
    position: "Πασαδόρος",
    prevTeam: "Άθλεση",
    height: "1.67μ",
  },
  {
    name: "Ειρήνη Μίχου",
    image: mihou,
    dob: "18-8-2005",
    jersey: "8",
    instagram: "https://www.instagram.com/eirhnh.michou",
    position: "Ακραία",
    prevTeam: "ΑΣ Γιάννενα",
    height: "1.63μ",
  },
  {
    name: "Ουρανία Ντούση",
    image: ntousi,
    dob: "5-6-1996",
    jersey: "15",
    instagram: "https://www.instagram.com/rania__nt",
    position: "Κεντρικός",
    prevTeam: "ΑΣ Γιάννενα",
    height: "1.75μ",
  },
  {
    name: "Σοφία Τσιαμούρα",
    image: tsiamoura,
    dob: "27-7-2003",
    jersey: "13",
    instagram: "https://www.instagram.com/sofiatsiamoura",
    position: "Λίμπερο",
    prevTeam: "ΓΣ Δράμας",
    height: "1.60μ",
  },
];

const staff = [
  "Τσιούπης Κωνσταντίνος – Προπονητής",
  "Παπαδόπουλος Νικόλαος – Γυμναστής",
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
      <h2 className="section-title-text">Ρόστερ</h2>
      <ul className="player-grid">
        {players.map((player, index) => (
          <li
            key={index}
            className={`player-card ${activeIndex === index ? "expanded" : ""}`}
            onClick={() => togglePlayer(index)}
          >
            <div className="player-image-wrapper">
              <Image
                src={player.image}
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
                <strong>Instagram:</strong>{" "}
                <a href={player.instagram} target="_blank" rel="noreferrer">
                  @{player.instagram.split("/").pop()}
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
