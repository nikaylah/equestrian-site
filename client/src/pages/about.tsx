import { Button } from "@/components/ui/button";
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
            className="mb-6 text-3xl sm:text-4xl font-bold text-foreground"
            data-testid="text-about-title"
          >
            About Crescent Stables
          </h1>
          <p 
            className="text-lg text-muted-foreground leading-relaxed"
            data-testid="text-about-intro"
          >
            I kept meeting women who wanted to try horses but did not know where to start. They were not looking to compete or buy a horse. They just wanted a quiet space to be around them.
          </p>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            So I started one.
          </p>
        </div>
      </section>

      {/* Mission - Sage background, more spacious */}
      <section className="bg-accent/10 py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <p 
            className="text-lg text-foreground/90 leading-relaxed"
            data-testid="text-mission-description"
          >
            We are not trying to turn you into a competitive rider. That is not the point.
          </p>
          <p className="mt-6 text-muted-foreground leading-relaxed">
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
                  className="mb-2 text-lg font-medium text-foreground"
                  data-testid={`text-approach-title-${i + 1}`}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-muted-foreground leading-relaxed"
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
            className="text-muted-foreground leading-relaxed"
            data-testid="text-partnership-description"
          >
            We do not own a barn. We work with a few local barns in Minnesota that we trust. Places with calm horses and instructors who share our approach.
          </p>
          <p className="mt-5 text-muted-foreground/80 text-sm">
            Every barn we work with has been personally vetted.
          </p>
        </div>
      </section>

      {/* CTA - more breathing room */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-xl px-4 sm:px-6 text-center">
          <p className="text-muted-foreground mb-6">
            Questions? Just reach out.
          </p>
          <Link href="/contact">
            <Button variant="outline" data-testid="button-contact-us">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
