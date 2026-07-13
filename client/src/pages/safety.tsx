import horseSnow from "../../../images/image5.jpeg";

const steps = [
  ["01", "Book your session", "Choose the experience that fits. Reach out with questions and we will help you decide what is right."],
  ["02", "Before you arrive", "We send everything you need to know, from what to wear to how to prepare your mind."],
  ["03", "Meet the horses", "No riding on day one. We start on the ground, you and a horse, getting to know each other."],
  ["04", "Leave differently", "You will be surprised by what you discover about horses, and about yourself."],
];

const timeline = [
  {
    node: "00",
    label: "Before you arrive",
    title: "Prepare your mind, not just your body.",
    body: "We send a detailed guide on what to expect, mentally and physically. No unknowns. No surprises on day one.",
  },
  {
    node: "1–2",
    label: "Day 1–2",
    title: "Meet the horse.",
    body: "Groundwork, grooming, learning how horses communicate. You will understand them before you ever get in the saddle.",
    accent: "Build the bond.",
  },
  {
    node: "3–4",
    label: "Day 3–4",
    title: "Into the saddle.",
    body: "Walk, trot, and discover what your body is capable of. Small steps, big results. Everything at your pace.",
    hot: true,
  },
  {
    node: "05",
    label: "Day 5",
    title: "You leave",
    body: "Something shifts when you learn to communicate with a horse. Most people notice it in other parts of their life.",
    accent: "differently.",
  },
];

const faqs = [
  ["Do I need any experience to join?", "No. Most people who come have never touched a horse before. Everything we do is designed around that, starting on the ground and moving only as fast as you want to."],
  ["Who are the sessions for?", "Anyone curious about horses who wants a calm, unhurried place to start. Groups stay small on purpose, so it never feels crowded or competitive."],
  ["How small are the groups?", "Small enough that you get real attention. We cap every session so there is time for each person and horse."],
  ["What should I wear?", "Comfortable clothes you can move in and closed-toe shoes. We send a full guide before you arrive, so nothing is a guess."],
  ["How do I know which session to book?", "If you have never ridden, start with Beginner Riding Week. If you want to slow down and go deep, choose Horsemanship Week. Reach out and we will help you decide."],
  ["Where are you located?", "We work with a few trusted partner barns across Minnesota. We share the exact location once you sign up, to keep every session small and private."],
];

export default function Safety() {
  return (
    <>
      <section className="bhero">
        <div className="wrap bhero-grid">
          <div>
            <div className="eyebrow">Before you come</div>
            <h1>Everything you need to know before you <span className="accent">arrive.</span></h1>
            <p className="lead">We want your first visit to feel easy. Here is what we want you to know before you book, arrive, and meet the horses.</p>
          </div>
          <figure className="photo-frame" style={{ paddingTop: "104%" }}>
            <img src={horseSnow} alt="A woman gently touching a horse in a snowy field" loading="eager" style={{ objectPosition: "center center" }} />
            <figcaption className="ph-inner"><span className="ph-tag">Barn walkthrough</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="steps">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="eyebrow">01 — The process</div>
              <h2 className="h2" style={{ marginTop: 20 }}>What to expect.</h2>
            </div>
          </div>
          <div className="steps-grid">
            {steps.map(([num, title, body]) => (
              <article className="step" key={num}>
                <span className="num">{num}</span>
                <b>{title}</b>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="week">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="eyebrow">02 — The week</div>
              <h2 className="h2" style={{ marginTop: 20 }}>What your week<br />looks like.</h2>
            </div>
            <p className="lead" style={{ maxWidth: 300, paddingBottom: 8 }}>Five days, one horse, and no rush.</p>
          </div>
          <div className="trail">
            <div className="trail-line" aria-hidden="true" />
            {timeline.map(({ node, label, title, body, accent, hot }) => (
              <article className={`tstop ${hot ? "hot" : ""}`} key={label}>
                <div className="tnode">{node}</div>
                <div className="tcontent">
                  <span className="mono">{label}</span>
                  <h3>{title} {accent && <span className="accent">{accent}</span>}</h3>
                  <p>{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="wrap faq-grid">
          <div className="faq-left">
            <div className="eyebrow">03 — Questions</div>
            <h2 className="h2" style={{ marginTop: 20 }}>Have a<br /><span className="accent">question?</span></h2>
            <p>We are easy to reach. Send us a note and we will get back to you quickly.</p>
            <a className="btn btn-paper" href="mailto:hello@crescentstables.com">
              hello@crescentstables.com <span className="arrow" aria-hidden="true">→</span>
            </a>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <details className="q-item" key={question} open={index === 0}>
                <summary className="qq"><b>{question}</b><span className="qic" aria-hidden="true" /></summary>
                <p className="ans">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
