"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import "@/app/ui/styles/navbar/Dropdown.css";

export default function Dropdown({ label, items, onSelect }) {
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
                setOpen(false);
                onSelect?.();
              }}
            >
              <Link href={item.path} prefetch={false}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
