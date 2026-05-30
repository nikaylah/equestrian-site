import { Button } from "@/components/ui/button";
import { ContactFormSection } from "@/components/contact-form-section";
import { Link } from "wouter";
import womenOnlyImage from "../../../images/image6.jpeg";

const approachItems = [
  {
    title: "We take our time",
    description: "There is no rushing. We start with the basics like how to be around horses safely. Some people spend their whole first session just grooming.",
  },
  {
    title: "Women only",
    description: "All of our sessions are for women. It changes the energy in a way that is hard to explain until you experience it.",
  },
];

export default function About() {
  return (
    <div>
      {/* Page Header - more breathing room */}
      <section className="py-[var(--space-xl)]">
        <div className="mx-auto max-w-2xl px-[var(--space-sm)] sm:px-[var(--space-md)]">
          <h1 
            className="mb-[var(--space-md)] text-[3rem] font-semibold leading-[1.05] text-foreground"
            data-testid="text-about-title"
          >
            About Crescent Stables
          </h1>
          <p 
            className="text-lg text-foreground leading-[1.7]"
            data-testid="text-about-intro"
          >
            I kept meeting women who wanted to try horses. Not to compete. Not to buy one. Just to be near them for an afternoon. That space didn't exist.
          </p>
          <p className="mt-[var(--space-lg)] text-[22px] leading-[1.7] text-[#C05A35]">
            So I started one.
          </p>
        </div>
      </section>

      {/* Mission - Sage background, more spacious */}
      <section className="bg-accent/10 py-[var(--space-xl)]">
        <div className="mx-auto max-w-2xl px-[var(--space-sm)] sm:px-[var(--space-md)]">
          <h2 className="mb-[var(--space-sm)] text-[1.375rem] font-medium text-foreground">
            What we're here for.
          </h2>
          <p 
            className="text-[1.0625rem] text-foreground/90 leading-[1.7]"
            data-testid="text-mission-description"
          >
            We are not trying to turn you into a competitive rider. That is not the point.
          </p>
          <p className="mt-[var(--space-md)] text-foreground leading-[1.7]">
            What we offer is simpler. Space to slow down and connect with a horse. Some people come once and that is enough. Others keep coming back. There is no agenda here.
          </p>
          <p className="mt-[var(--space-md)] text-foreground/80 italic leading-[1.7]">
            In practice, that looks like this.
          </p>
        </div>
      </section>

      {/* Approach - Default background, tighter */}
      <section className="py-[var(--space-xl)]">
        <div className="mx-auto max-w-2xl px-[var(--space-sm)] sm:px-[var(--space-md)]">
          <div className="space-y-[var(--space-lg)]">
            {approachItems.map((item, i) => (
              <div key={i}>
                <h3 
                  className="mb-[var(--space-sm)] text-[1.375rem] font-medium text-foreground"
                  data-testid={`text-approach-title-${i + 1}`}
                >
                  {item.title}
                </h3>
                {item.title === "Women only" && (
                  <>
                    <img
                      src={womenOnlyImage}
                      alt="Women with horse in a quiet outdoor setting"
                      className="mb-[var(--space-md)] h-[360px] w-full object-cover object-center"
                    />
                  </>
                )}
                <p 
                  className="text-foreground leading-[1.7]"
                  data-testid={`text-approach-description-${i + 1}`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership - Sage background, quieter */}
      <section className="bg-accent/10 py-[var(--space-xl)]">
        <div className="mx-auto max-w-2xl px-[var(--space-sm)] sm:px-[var(--space-md)]">
          <p 
            className="text-foreground leading-[1.7]"
            data-testid="text-partnership-description"
          >
            We do not own a barn. We work with a few local barns in Minnesota that we trust. Places with calm horses and instructors who share our approach.
          </p>
          <p className="mt-[var(--space-md)] text-foreground leading-[1.7]">
            Every barn we work with has been personally vetted.
          </p>
        </div>
      </section>

      {/* CTA - more breathing room */}
      <section className="py-[var(--space-xl)]">
        <div className="mx-auto max-w-xl px-[var(--space-sm)] text-center sm:px-[var(--space-md)]">
          <h2 className="mb-[var(--space-md)] text-2xl sm:text-3xl font-medium text-foreground">
            Come see what we mean.
          </h2>
          <Link href="/experiences">
            <Button
              variant="outline"
              className="min-w-[220px] border-2 border-[#C05A35] text-[#C05A35] hover:bg-transparent hover:text-[#C05A35]"
              data-testid="button-see-upcoming-sessions"
            >
              See Upcoming Sessions
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-[var(--space-xl)]">
        <div className="mx-auto max-w-2xl px-[var(--space-sm)] text-center sm:px-[var(--space-md)]">
          <div className="mx-auto mb-[var(--space-md)] h-px w-full max-w-[560px] bg-[#E2D4C0]" />
          <h2 className="mb-[var(--space-sm)] text-2xl sm:text-3xl font-medium text-foreground">
            Have a question?
          </h2>
          <p className="mb-[var(--space-lg)] text-foreground leading-[1.7]">
            We are easy to reach. Send us a note and we will get back to you.
          </p>
        </div>
        <ContactFormSection />
      </section>
    </div>
  );
}
