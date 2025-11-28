"use client";

import "../styles/Roster-Men.css";
import { useState } from "react";
import men_player1 from "@/public/men_player1.jpg";
import men_player2 from "@/public/men_player2.jpg";
import men_player3 from "@/public/men_player3.jpg";
import men_player4 from "@/public/men_player4.jpg";
import men_player5 from "@/public/men_player5.jpg";
import men_player6 from "@/public/men_player6.jpg";
import men_player7 from "@/public/men_player7.jpg";
import men_player8 from "@/public/men_player8.jpg";
import men_player9 from "@/public/men_player9.jpg";
import men_player10 from "@/public/men_player10.jpg";
import men_player11 from "@/public/men_player11.jpg";

const players = [
  {
    name: "Ευκλής-Μιχαήλ Μαμαλίγκας",
    image: men_player1,
    dob: "5-4-2007",
    jersey: "1",
    instagram: "https://www.instagram.com/efklis_mamaligas ",
    position: "Ακραίος",
    prevTeam: " ΠΑΟΚ Ρόδου ",
    height: "1.75μ",
  },
  {
    name: "Ιωάννης Χατζηκλημάνογλου",
    image: men_player2,
    dob: "29-7-2005",
    jersey: "2",
    instagram: "https://www.instagram.com/chatziklimanogl0u ",
    position: " Λίμπερο ",
    prevTeam: "Ολυμπιακός ΣΦΠ",
    height: "1.75μ",
  },
  {
    name: "Άγγελος Τσιούπης",
    image: men_player3,
    dob: "7-7-2009",
    jersey: "3",
    instagram: "  https://www.instagram.com/_.tsioupis._",
    position: "Λίμπερο ",
    prevTeam: "ΑΣ Γιάννενα",
    height: "1.83μ",
  },
  {
    name: "Νικόλαος Τάτσης",
    image: men_player4,
    dob: "6-10-2009",
    jersey: "4",
    instagram: "https://www.instagram.com/nick.tatsis_",
    position: "Ακραίος",
    prevTeam: "ΑΣ Γιάννενα",
    height: "1.91μ",
  },
  {
    name: "Σπυρίδων-Θεόδωρος Παπαδογιάννης",
    image: men_player5,
    dob: "13-11-2007",
    jersey: "5",
    instagram: "https://www.instagram.com/theo_papadogiannis ",
    position: "Πασαδόρος",
    prevTeam: "Σπαρτιατικός ΓΣ",
    height: "1.85μ",
  },

  {
    name: "Κων/νος Φαντέλας",
    image: men_player6,
    dob: "5-8-2004",
    jersey: "6",
    instagram: "https://www.instagram.com/konstantinos_fant ",
    position: "Πασαδόρος",
    prevTeam: "ΑΓΣ Ιωαννίνων",
    height: "1.73μ",
  },
  {
    name: "Στέφανος Κρομύδας",
    image: men_player7,
    dob: "21-1-2006",
    jersey: "7",
    instagram: "https://www.instagram.com/stefanos.k_",
    position: "Κεντρικός",
    prevTeam: "ΣΦΚ Πιερικός",
    height: "1.85μ",
  },
  {
    name: "Χρήστος Κίγκας",
    image: men_player8,
    dob: "7-4-1987",
    jersey: "8",
    instagram: "https://www.facebook.com/christos.kigkas",
    position: "Κεντρικός",
    prevTeam: "ΑΣ Γιάννενα",
    height: "1.95μ",
  },
  {
    name: "Σεραφείμ Ανέστης",
    image: men_player9,
    dob: "15-6-2004",
    jersey: "9",
    instagram: "https://www.instagram.com/_seraanestiss_ ",
    position: "Διαγώνιος",
    prevTeam: "ΑΓΣ Ιωαννίνων",
    height: "1.86μ",
  },
  {
    name: "Σοτίρ Κέρι",
    image: men_player10,
    dob: "4-11-2004",
    jersey: "10",
    instagram: "https://www.instagram.com/sotir_kr ",
    position: "Κεντρικός",
    prevTeam: "ΑΓΣ Ιωαννίνων",
    height: "1.89μ",
  },
  {
    name: "Θεόδωρος Τσιαμπάς",

    image: men_player11,
    dob: "2-5-2001",
    jersey: "11",
    instagram: "https://www.instagram.com/thodoris_tsiamp ",
    position: "Ακραίος",
    prevTeam: "ΑΓΣ Ιωαννίνων",
    height: "1.81μ",
  },
];

const staff = [
  "Τσιούπης Κωνσταντίνος – Προπονητής",
  "Ντανίκας Παναγιώτης – Β. Προπονητής",
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
    <>
      <title>ΑΣ Γιάννενα Βόλεϊ- Ρόστερ Ανδρών</title>
      <meta
        name="description"
        content="Δείτε το ρόστερ της ανδρικής ομάδας του ΑΣ Γιάννενα."
      />
      <meta
        name="keywords"
        content="ΑΣ Γιάννενα, Ρόστερ, Ομάδα, Άνδρες, Βόλεϊ"
      />
      <div className="roster-page">
        <h2 className="section-title-text">Ρόστερ Ανδρών</h2>
        <ul className="player-grid">
          {players.map((player, index) => (
            <li
              key={index}
              className={`player-card ${
                activeIndex === index ? "expanded" : ""
              }`}
              onClick={() => togglePlayer(index)}
            >
              <div className="player-image-wrapper">
                <img
                  src={player.image.src}
                  alt={player.name}
                  className="player-photo"
                />
                <span className="jersey-badge-men">{player.jersey}</span>
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
                    className="social-men"
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
    </>
  );
}

export default Roster;
