import { Link } from "wouter";
import heroImage from "../../../images/image1.jpeg";
import horseClose from "../../../images/image2.jpeg";
import groomingImage from "../../../images/image3.jpeg";
import trailImage from "../../../images/image4.jpeg";

const experiences = [
  {
    title: "Horsemanship Week",
    label: "Most popular",
    chip: "chip-khaki",
    days: "5 days",
    body: "The full picture. Learn how horses think, communicate, and move, from the ground up. This is where real understanding begins.",
    image: groomingImage,
    alt: "A horse being gently groomed with a brush",
  },
  {
    title: "Beginner Riding Week",
    label: "Beginner friendly",
    chip: "chip-ox",
    days: "5 days",
    body: "Your first time in the saddle, done right. Walk, trot, build real confidence on horseback over five intentional days.",
    image: horseClose,
    alt: "A beginner rider smiling behind a horse",
    offset: true,
  },
  {
    title: "Trail Experience",
    label: "For adventurers",
    chip: "chip-camel",
    days: "Half or full day",
    body: "Ride through nature with a small group. The best way to understand horses is to go somewhere with them.",
    image: trailImage,
    alt: "A rider walking beside a horse on a quiet road",
  },
];

const principles = [
  ["Groundwork first", "Connection before riding. We start on the ground, where real understanding happens."],
  ["Safety always", "Every horse is carefully vetted. Groups stay small so you actually learn."],
  ["Your own pace", "No pressure to advance faster than you are ready. The horse sets the curriculum."],
];

const testimonials = [
  ["I showed up terrified of horses. By day three I was cantering on my own. I have never felt more capable in my life.", "Fatima A.", "Beginner Riding Week"],
  ["I was so relieved to find a space where I could actually relax. The environment here made all the difference for me.", "Maryam K.", "Horsemanship Week"],
  ["This is not a riding school. It is something else entirely. I left understanding myself better than when I arrived.", "Sarah J.", "Trail Experience"],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="eyebrow">Beginner riding weeks · Minnesota</div>
          <h1>
            A space that was <span className="accent">made</span> for you.
          </h1>
          <p className="lead">
            We run beginner friendly riding weeks at a few barns we trust. You don't need any experience. Most people who come are trying this for the first time.
          </p>
          <div className="hero-cta">
            <Link className="btn btn-camel btn-raise" href="/experiences">
              Book a session <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <Link className="btn btn-paper" href="/safety">
              How it works
            </Link>
          </div>
          <div className="hero-meta mono">Small groups · No experience needed · The horse sets the pace</div>
        </div>
        <div className="wrap hero-frame">
          <figure className="photo-frame" style={{ paddingTop: "42%" }}>
            <img src={heroImage} alt="Woman smiling while sitting on a horse" loading="eager" style={{ objectPosition: "center 35%" }} />
            <figcaption className="ph-inner"><span className="ph-tag">Session one — groundwork</span></figcaption>
          </figure>
        </div>
      </section>

      <div className="marq" aria-hidden="true">
        <span className="mono">
          Slow down <span className="star">✶</span> No experience needed <span className="star">✶</span> Small groups <span className="star">✶</span> The horse sets the pace <span className="star">✶</span> Beginner friendly <span className="star">✶</span> Slow down <span className="star">✶</span> No experience needed
        </span>
      </div>

      <section className="quote">
        <div className="wrap">
          <span className="star">✶</span>
          <p className="q">
            This is not a riding school.<br />It is a space to <span className="accent">slow down.</span>
          </p>
        </div>
      </section>

      <section className="begin">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="eyebrow">Experiences</div>
              <h2 className="h2" style={{ marginTop: 20 }}>Three ways<br />to begin.</h2>
            </div>
            <Link className="btn btn-paper" href="/experiences">
              View all sessions <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="begin-grid">
            {experiences.map((experience) => (
              <article key={experience.title} className={`bcard ${experience.offset ? "offset" : ""}`}>
                <figure className="photo-frame im" style={{ paddingTop: "82%" }}>
                  <img src={experience.image} alt={experience.alt} loading="lazy" />
                </figure>
                <div className="meta">
                  <span className={`chip ${experience.chip}`}>{experience.label}</span>
                  <span className="days">{experience.days}</span>
                </div>
                <h3>{experience.title}</h3>
                <p>{experience.body}</p>
                <Link className="tlink" href="/experiences">
                  Reserve a spot <span className="arrow" aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="manif">
        <div className="wrap">
          <div>
            <div className="eyebrow">Our philosophy</div>
            <h2 style={{ marginTop: 24 }}>
              Horses don't care about your resume. <span className="accent">They respond to who you actually are.</span>
            </h2>
            <div className="mtext">
              <p>We are not trying to turn you into a competition rider. That is not the point. Some people come once and that is enough. Others keep coming back. There is no agenda here.</p>
              <p>What we offer is simple: a space where you can show up exactly as you are, work with a 1,200-pound animal who tells the truth, and find out what you are capable of.</p>
            </div>
          </div>
          <div className="pr-card">
            {principles.map(([title, body], index) => (
              <article className="pr-item" key={title}>
                <div className="row1"><b>{title}</b><span className="mono">{String(index + 1).padStart(2, "0")}</span></div>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="voices">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="eyebrow">In their words</div>
              <h2 className="h2" style={{ marginTop: 20 }}>What people<br />take home.</h2>
            </div>
          </div>
          <div className="v-grid">
            {testimonials.map(([quote, name, detail], index) => (
              <article className={`vcard ${index === 1 ? "hot" : ""}`} key={name}>
                <span className="vq">”</span>
                <p>{quote}</p>
                <div className="vwho">
                  <div className="av" aria-hidden="true" />
                  <div><b>{name}</b><span>{detail}</span></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
