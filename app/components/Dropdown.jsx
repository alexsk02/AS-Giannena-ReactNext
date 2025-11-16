"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import "../styles/Dropdown.css";

function Dropdown({ label, items, onSelect }) {
  const [open, setOpen] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const handleTouchStart = () => setIsTouch(true);
    window.addEventListener("touchstart", handleTouchStart, { once: true });
    return () => window.removeEventListener("touchstart", handleTouchStart);
  }, []);

  const toggleDropdown = () => setOpen((prev) => !prev);

  return (
    <div
      className="dropdown"
      onMouseEnter={!isTouch ? () => setOpen(true) : undefined}
      onMouseLeave={!isTouch ? () => setOpen(false) : undefined}
    >
      <button
        className="dropdown-toggle"
        onClick={isTouch ? toggleDropdown : undefined}
      >
        {label}
      </button>

      {open && (
        <ul className="dropdown-menu">
          {items.map((item) => (
            <li
              key={item.label}
              onClick={() => {
                setOpen(false); // close the dropdown
                onSelect?.(); // close the sidebar if passed
              }}
            >
              <Link href={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
