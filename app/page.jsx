"use client";

import { useEffect, useState } from "react";
import ImageCarousel from "./components/ImageCarousel";
import ArticleCarousel from "./components/ArticleCarousel";
import Link from "next/link";

import "./styles/Home.css";
import "./styles/Matches.css";
import "./styles/ImageCarousel.css";
import "./styles/index.css";

// Images must be in /public
import homeLogo from "@/public/logo.png";
import academyIcon from "@/public/academy.png";
import scheduleIcon from "@/public/news.png";
import rosterIcon from "@/public/roster.png";
import contactIcon from "@/public/phone.jpg";

import {
  collection1,
  collection2,
  collection3,
  collection4,
  collection5,
  collection6,
  collection7,
} from "./data/sponsors";

export default function Home() {
  const [upcomingMatches, setUpcomingMatches] = useState([]);

  useEffect(() => {
    async function fetchUpcoming() {
      try {
        const categories = [
          { name: "Γυναίκες", endpoint: "women-matches" },
          { name: "Άνδρες", endpoint: "men-matches" },
        ];

        const now = new Date();
        const results = [];

        for (const cat of categories) {
          const res = await fetch(
            `https://as-giannena-strapibackend.onrender.com/api/${cat.endpoint}?populate=*&pagination[limit]=100`
          );
          const data = await res.json();

          const matches = data.data.map((item) => ({
            id: item.id,
            homeTeam: item.homeTeam?.name,
            awayTeam: item.awayTeam?.name,
            date: new Date(item.date),
            matchday: item.matchday,
            category: cat.name,
          }));

          const upcoming = matches
            .filter(
              (m) =>
                m.date > now &&
                (m.homeTeam === "ΑΣ Γιάννενα" || m.awayTeam === "ΑΣ Γιάννενα")
            )
            .sort((a, b) => a.date - b.date);

          if (upcoming.length > 0) results.push(upcoming[0]);
        }

        setUpcomingMatches(results);
      } catch (err) {
        console.error("Error fetching upcoming matches:", err);
      }
    }

    fetchUpcoming();
  }, []);

  const formatDate = (date) =>
    date.toLocaleDateString("el-GR", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });

  const formatTime = (date) =>
    date.toLocaleTimeString("el-GR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

  return (
    <div className="home">
      {/* Replace SEO component later */}

      <title>ΑΣ Γιάννενα Βόλεϊ- Αρχική</title>

      <meta
        name="description"
        content="Αρχική Σελίδα ΑΣ Γιάννενα. Ενημερωθείτε για τα νέα της ομάδας, τους επόμενους αγώνες και τις βαθμολογίες των πρωταθλημάτων."
      />
      <meta
        name="keywords"
        content="ΑΣ Γιάννενα, ΓΑΣ, Volley, Βόλεϊ, Ιωάννινα, Γιάννενα, Ακαδημία"
      />

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <img src={homeLogo.src} alt="AS Giannena" className="home-logo" />
          <h1>ΑΣ Γιάννενα</h1>
          <p>ΓΑΣ – Η δύναμη του βόλεϊ στα Ιωάννινα</p>
        </div>
      </section>

      {/* About */}
      <section className="about">
        <h2>Γνωρίστε την ομάδα μας</h2>
        <p>
          Ο Αθλητικός Σύλλογος Γιάννενα (ΓΑΣ) από το 2014 αναπτύσσει με συνέπεια
          και επαγγελματισμό το βόλεϊ στην περιοχή μας. Με έμπειρους προπονητές
          και οργανωμένες ακαδημίες, προωθούμε την αθλητική παιδεία, την
          ομαδικότητα και την εξέλιξη κάθε αθλητή, από τα πρώτα βήματα μέχρι την
          αγωνιστική διάκριση.
        </p>
        <Link href="/history" className="primary-button" prefetch={false}>
          Ιστορία Ομάδας
        </Link>
      </section>

      <ArticleCarousel />

      {/* Upcoming Matches */}
      <section className="upcoming-matches">
        <h2>Επόμενοι Αγώνες</h2>

        <div className="matches-grid">
          {upcomingMatches.length > 0 ? (
            upcomingMatches.map((match) => (
              <div key={match.id} className="match-card">
                <h3>{match.category}</h3>
                <p>
                  {match.homeTeam} vs {match.awayTeam}
                </p>
                <p>
                  {formatDate(match.date)} - {formatTime(match.date)}
                </p>
              </div>
            ))
          ) : (
            <p>Δεν υπάρχουν προσεχείς αγώνες για τον ΑΣ Γιάννενα.</p>
          )}
        </div>
      </section>

      {/* Quick Links */}
      <section className="quick-links">
        <div className="link-card">
          <img src={academyIcon.src} alt="Ακαδημία" />
          <h3>Ακαδημίες</h3>
          <Link href="/academy-schedule" prefetch={false}>
            Δείτε το πρόγραμμα
          </Link>
        </div>

        <div className="link-card">
          <img src={scheduleIcon.src} alt="Νέα" />
          <h3>Νέα</h3>
          <Link href="/news" prefetch={false}>
            Τα νέα της ομάδας
          </Link>
        </div>

        <div className="link-card">
          <img src={rosterIcon.src} alt="Ρόστερ" />
          <h3>Ρόστερ</h3>
          <Link href="/roster-women" prefetch={false}>
            Οι αθλητές μας
          </Link>
        </div>

        <div className="link-card">
          <img src={contactIcon.src} alt="Επικοινωνία" />
          <h3>Επικοινωνία</h3>
          <Link href="/contact-info" prefetch={false}>
            Μιλήστε μαζί μας
          </Link>
        </div>
      </section>

      {/* Sponsors */}
      <section className="sponsors">
        <h2>Χορηγοί 2025-26</h2>
        <div className="sponsor-carousels">
          <ImageCarousel images={collection1} />
          <ImageCarousel images={collection2} />
          <ImageCarousel images={collection3} />
          <ImageCarousel images={collection4} />
          <ImageCarousel images={collection5} />
          <ImageCarousel images={collection6} />
          <ImageCarousel images={collection7} />
        </div>
      </section>
    </div>
  );
}
