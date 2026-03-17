import { Button } from "@/components/ui/button";
import { ContactFormSection } from "@/components/contact-form-section";
import { Link } from "wouter";

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
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h1 
            className="mb-6 text-3xl sm:text-4xl font-semibold text-foreground"
            data-testid="text-about-title"
          >
            About Crescent Stables
          </h1>
          <p 
            className="text-lg text-foreground leading-relaxed"
            data-testid="text-about-intro"
          >
            I kept meeting women who wanted to try horses but did not know where to start. They were not looking to compete or buy a horse. They just wanted a quiet space to be around them.
          </p>
          <p className="mt-10 text-[22px] leading-relaxed text-[#b5603a]">
            So I started one.
          </p>
        </div>
      </section>

      {/* Mission - Sage background, more spacious */}
      <section className="bg-accent/10 py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="mb-4 text-[18px] font-medium text-foreground">
            What this actually is.
          </h2>
          <p 
            className="text-lg text-foreground/90 leading-relaxed"
            data-testid="text-mission-description"
          >
            We are not trying to turn you into a competitive rider. That is not the point.
          </p>
          <p className="mt-6 text-foreground leading-relaxed">
            What we offer is simpler. Space to slow down and connect with a horse. Some people come once and that is enough. Others keep coming back. There is no agenda here.
          </p>
        </div>
      </section>

      {/* Approach - Default background, tighter */}
      <section className="py-14 md:py-18">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="space-y-8 md:space-y-10">
            {approachItems.map((item, i) => (
              <div key={i}>
                <h3 
                  className={`font-normal text-foreground ${item.title === "Women only" ? "mb-3 text-xl sm:text-2xl" : "mb-2 text-lg"}`}
                  data-testid={`text-approach-title-${i + 1}`}
                >
                  {item.title}
                </h3>
                {item.title === "Women only" && (
                  <div className="mb-4 h-px w-16 bg-[#b5603a]" />
                )}
                <p 
                  className="text-foreground leading-relaxed"
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
      <section className="bg-accent/10 py-12 md:py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <p 
            className="text-foreground leading-relaxed"
            data-testid="text-partnership-description"
          >
            We do not own a barn. We work with a few local barns in Minnesota that we trust. Places with calm horses and instructors who share our approach.
          </p>
          <p className="mt-5 text-foreground leading-relaxed">
            Every barn we work with has been personally vetted.
          </p>
        </div>
      </section>

      {/* CTA - more breathing room */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-xl px-4 sm:px-6 text-center">
          <h2 className="mb-6 text-2xl sm:text-3xl font-medium text-foreground">
            Come see what we mean.
          </h2>
          <Link href="/experiences">
            <Button
              variant="outline"
              className="min-w-[220px] border-2 border-[#b5603a] text-[#b5603a] hover:bg-transparent hover:text-[#b5603a]"
              data-testid="button-see-upcoming-sessions"
            >
              See Upcoming Sessions
            </Button>
          </Link>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <div className="mx-auto mb-8 h-px w-full max-w-[560px] bg-[#e8e0d5]" />
          <h2 className="mb-4 text-2xl sm:text-3xl font-medium text-foreground">
            Have a question?
          </h2>
          <p className="mb-10 text-foreground leading-relaxed">
            We are easy to reach. Send us a note and we will get back to you.
          </p>
        </div>
        <ContactFormSection />
      </section>
    </div>
  );
}
