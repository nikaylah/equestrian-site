const principles = [
  ["01", "What we're here for", "We are not trying to turn you into a competitive rider. That is not the point."],
  ["02", "We take our time", "There is no rushing. We start with the basics like how to be around horses safely. Some people spend their whole first session just grooming."],
  ["03", "A space of our own", "Every session is a small, close group. It changes the energy in a way that is hard to explain until you experience it."],
];

const testimonials = [
  ["I showed up terrified of horses. By day three I was cantering on my own. I have never felt more capable in my life.", "Fatima A.", "Beginner Riding Week"],
  ["I was so relieved to find a space where I could actually relax. The environment here made all the difference for me.", "Maryam K.", "Horsemanship Week"],
  ["This is not a riding school. It is something else entirely. I left understanding myself better than when I arrived.", "Sarah J.", "Trail Experience"],
];

export default function About() {
  return (
    <>
      <section className="ahero">
        <div className="wrap ahero-grid">
          <div>
            <div className="eyebrow">About Crescent Stables</div>
            <h1>I kept meeting people who wanted to <span className="accent">try horses.</span></h1>
            <p className="sub">Not to compete. Not to buy one. Just to be near them for an afternoon. That space didn't exist.</p>
            <div className="started">So I started one.</div>
          </div>
          <aside className="letter">
            <span className="mono">A note from our founder</span>
            <p>What we offer is simpler. Space to slow down and connect with a horse.</p>
            <p>Some people come once and that is enough. Others keep coming back. <span className="accent">There is no agenda here.</span></p>
            <p className="foot-note">In practice, that looks like this.</p>
          </aside>
        </div>
      </section>

      <section className="how">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="eyebrow">How we work</div>
              <h2 className="h2" style={{ marginTop: 20 }}>Three things<br />we protect.</h2>
            </div>
          </div>
          <div className="how-grid">
            {principles.map(([num, title, body]) => (
              <article className="hcard" key={num}>
                <span className="num">{num}</span>
                <b>{title}</b>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="barns">
        <div className="wrap">
          <div className="mk" aria-hidden="true">MN</div>
          <div>
            <h2>We do not own a barn. We work with a few local barns in Minnesota <span className="accent">that we trust.</span></h2>
            <p>Places with calm horses and instructors who share our approach.</p>
            <span className="vetted">Every barn personally vetted</span>
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
