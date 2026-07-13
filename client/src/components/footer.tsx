import { Link } from "wouter";
import fullWordmark from "../assets/full-wordmark.png";

export function Footer() {
  return (
    <footer>
      <div className="foot-crescent" aria-hidden="true" />
      <div className="wrap foot-top">
        <div className="mono" style={{ color: "var(--khaki)", marginBottom: 26 }}>
          Whenever you're ready
        </div>
        <h2 className="foot-h">
          We will be <span className="accent">here.</span>
        </h2>
        <p className="foot-sub">
          You don't need experience. You don't need to be athletic. You just need to show up. We take it from there.
        </p>
        <div className="foot-cta">
          <Link href="/experiences" className="btn btn-camel on-dark btn-raise">
            Find your session <span className="arrow" aria-hidden="true">→</span>
          </Link>
          <a className="btn btn-paper on-dark" href="mailto:hello@crescentstables.com">
            Get in touch
          </a>
        </div>
      </div>

      <div className="wrap foot-grid">
        <div>
          <Link href="/" className="foot-brand" aria-label="Crescent Stables home">
            <img className="foot-wordmark" src={fullWordmark} alt="Crescent Stables" />
          </Link>
          <p className="foot-blurb">
            An equestrian space in Minnesota where you can show up exactly as you are and discover what you are capable of.
          </p>
        </div>
        <nav aria-label="Footer">
          <div className="mono">Quick links</div>
          <ul>
            <li><Link href="/experiences">Experiences</Link></li>
            <li><Link href="/safety">Before You Come</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/experiences">Book a Session</Link></li>
          </ul>
        </nav>
        <div>
          <div className="mono">Get in touch</div>
          <ul>
            <li><a href="mailto:hello@crescentstables.com">hello@crescentstables.com</a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a></li>
            <li>Minnesota, USA</li>
          </ul>
        </div>
      </div>

      <div className="wrap foot-bar">
        <div className="mono">© {new Date().getFullYear()} Crescent Stables. All rights reserved.</div>
        <div className="mono">Minnesota, USA</div>
      </div>
    </footer>
  );
}
