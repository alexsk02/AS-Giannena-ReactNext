"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "@/public/logo.png";
import Dropdown from "./Dropdown";
import Contact from "./Contact";
import "../styles/Navbar.css";
import {
  club,
  roster,
  schedule,
  standings,
  academies,
  sponsors,
  news,
} from "../data/navbar-items";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebarClose = () => setSidebarOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <Link href="/" className="navbar-logo-link">
            <img src={logo.src} alt="Team Logo" className="navbar-logo" />
          </Link>

          {/* Full menu for large screens */}
          <div className="navbar-links">
            <Dropdown label="Σύλλογος" items={club} />
            <Dropdown label="Ρόστερ" items={roster} />
            <Dropdown label="Αγώνες" items={schedule} />
            <Dropdown label="Βαθμολογίες" items={standings} />
            <Dropdown label="Ακαδημία" items={academies} />
            <Dropdown label="Χορηγοί" items={sponsors} />
            <Dropdown label="Νέα" items={news} />
          </div>
        </div>

        <div className="navbar-right">
          <Contact />
        </div>

        {/* Hamburger icon for small screens */}
        <div className="menu-icon" onClick={() => setSidebarOpen(true)}>
          &#9776;
        </div>
      </nav>

      {/* Sidebar overlay */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar drawer */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <Link href="/" onClick={handleSidebarClose}>
            <img src={logo.src} alt="Team Logo" className="navbar-logo" />
          </Link>
          <button className="close-btn" onClick={() => setSidebarOpen(false)}>
            &times;
          </button>
        </div>

        <Dropdown label="Σύλλογος" items={club} onSelect={handleSidebarClose} />
        <Dropdown label="Ρόστερ" items={roster} onSelect={handleSidebarClose} />
        <Dropdown
          label="Αγώνες"
          items={schedule}
          onSelect={handleSidebarClose}
        />
        <Dropdown
          label="Βαθμολογίες"
          items={standings}
          onSelect={handleSidebarClose}
        />
        <Dropdown
          label="Ακαδημία"
          items={academies}
          onSelect={handleSidebarClose}
        />
        <Dropdown
          label="Χορηγοί"
          items={sponsors}
          onSelect={handleSidebarClose}
        />
        <Dropdown label="Νέα" items={news} onSelect={handleSidebarClose} />

        <div className="sidebar-contact">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default Navbar;
