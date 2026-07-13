import { Link } from "wouter";

const paths = [
  ["Start here", "Never ridden before?", "Start with Beginner Riding Week. We spend the first days just getting comfortable."],
  ["Go deeper", "Want to really slow down?", "Horsemanship Week is a full week at the barn, from the ground up."],
  ["Get outside", "Already ridden a few times?", "Trail Experience gets you out on the trails with a small group."],
];

const sessions = [
  ["February", "16–20", "Horsemanship Week", "Most popular", "chip-khaki", "Five days of groundwork and riding basics. We take our time. Good if you want a full week to just be around the horses.", "3 of 6 spots left"],
  ["March", "02–06", "Beginner Riding Week", "Beginner friendly", "chip-ox", "If you have never ridden before this is a good place to start. We spend the first couple days just getting comfortable.", "5 of 6 spots left"],
  ["March", "14–15", "Trail Experience", "For adventurers", "chip-camel", "Two days on horseback out on the trails with a small group.", "4 of 6 spots left"],
  ["April", "06–10", "Horsemanship Week", "Most popular", "chip-khaki", "Groundwork and riding over five days. Small group. We don't rush.", "6 of 6 spots left"],
  ["April", "20–24", "Beginner Riding Week", "Beginner friendly", "chip-ox", "For people who have not ridden before. We go at your pace.", "6 of 6 spots left"],
  ["May", "09–10", "Trail Experience", "For adventurers", "chip-camel", "Spring trail riding. Works best if you have ridden a few times.", "5 of 6 spots left"],
];

export default function Experiences() {
  return (
    <>
      <section className="xhero">
        <div className="wrap xhero-grid">
          <div>
            <div className="eyebrow">Upcoming sessions · 2026</div>
            <h1>Find your <span className="accent">session.</span></h1>
            <p className="lead">
              We run small group sessions throughout the year at trusted partner barns across Minnesota. Most people who come start with Beginner Riding Week. No experience needed.
            </p>
          </div>
          <aside className="privacy">
            <span className="mono">A small, private environment</span>
            <p><b>We share the exact location once you sign up.</b> Sessions take place at partner barns across Minnesota. We keep it this way on purpose.</p>
          </aside>
        </div>
      </section>

      <section className="picker">
        <div className="wrap">
          <div className="pick-grid">
            {paths.map(([label, title, body]) => (
              <Link href="/experiences" className="pick" key={title}>
                <span className="mono">{label}</span>
                <b>{title}</b>
                <p>{body}</p>
                <span className="go" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sched">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="eyebrow">The board</div>
              <h2 className="h2" style={{ marginTop: 20 }}>Upcoming<br />sessions.</h2>
            </div>
            <p className="lead" style={{ maxWidth: 340, paddingBottom: 8 }}>
              Small groups. Slow pace. A space where you can actually breathe.
            </p>
          </div>

          <div className="board">
            {sessions.map(([month, date, title, chip, chipClass, desc, spots]) => (
              <article className="row" key={`${month}-${date}-${title}`}>
                <div className="date"><span className="mono">{month}</span><b>{date}</b></div>
                <div>
                  <h3>{title} <span className={`chip ${chipClass}`}>{chip}</span></h3>
                  <p className="desc">{desc}</p>
                </div>
                <div className="spots">{spots}</div>
                <a className="btn btn-camel" href="mailto:hello@crescentstables.com?subject=Reserve%20a%20Crescent%20Stables%20session">
                  Reserve <span className="arrow" aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
          <div className="board-note">
            <span className="mono">Pricing varies by session. We share all details when you reach out.</span>
            <span className="mono">No commitment required</span>
          </div>
        </div>
      </section>

      <section className="notready">
        <div className="wrap">
          <div>
            <h2>Not ready <span className="accent">yet?</span></h2>
            <p>That's fine. We will reach out when new sessions open. No pressure, no spam, just a note when something new is on the calendar.</p>
          </div>
          <form action="mailto:hello@crescentstables.com" method="post" encType="text/plain">
            <label className="field">
              <span className="sr-only">Email address</span>
              <input type="email" name="email" placeholder="Your email" required />
              <button className="btn btn-camel" type="submit">Keep me posted</button>
            </label>
            <div className="mono" style={{ marginTop: 18, color: "rgba(244,238,222,.4)", fontSize: 10 }}>One email per season. Unsubscribe anytime.</div>
          </form>
        </div>
      </section>
    </>
  );
}
