import { useId, useState } from "react";
import { Link, useLocation } from "wouter";
import iconLogo from "../assets/icon-only.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/safety", label: "Before You Come" },
  { href: "/about", label: "About" },
];

export function CrescentIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
      <path d="M68,10 C44,15 28,32 28,50 C28,70 44,86 68,90 C46,96 16,82 14,52 C12,26 44,4 68,10 Z" />
    </svg>
  );
}

export function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const toggleId = useId();

  return (
    <header className="site-header">
      <div className="wrap nav-in">
        <Link href="/" className="brand" aria-label="Crescent Stables home" onClick={() => setOpen(false)}>
          <img className="brand-icon" src={iconLogo} alt="" aria-hidden="true" />
          <span>Crescent Stables</span>
        </Link>

        <input
          id={toggleId}
          className="mobile-toggle sr-only"
          type="checkbox"
          checked={open}
          onChange={(event) => setOpen(event.target.checked)}
          aria-hidden="true"
        />
        <nav className="nav-menu" aria-label="Primary">
          <div className="nav-pill">
            {navLinks.map((link) => {
              const isActive = location === link.href || (link.href !== "/" && location.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={isActive ? "on" : ""}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <Link href="/experiences" className="btn btn-camel btn-raise" onClick={() => setOpen(false)}>
            Book a session <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </nav>
        <label className="burger" htmlFor={toggleId} aria-label={open ? "Close menu" : "Open menu"}>
          <span />
          <span />
          <span />
        </label>
      </div>
    </header>
  );
}
