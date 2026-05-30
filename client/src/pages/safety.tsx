import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import pullQuoteImage from "../../../images/image5.jpeg";

const whatToExpect = [
  "A calm introduction to the barn and the horses. No rushing.",
  "Instructors who work with beginners all the time. They have seen every kind of nervous.",
  "Horses that are suited to your comfort level. Not every horse is right for beginners.",
  "Small groups so you never feel overlooked.",
];

const whatToWear = [
  "Closed toe shoes or boots with a small heel. We can suggest options if you need.",
  "Long pants that let you move. Jeans or stretchy leggings work well.",
  "Layers in case the weather changes. Barns can be cool in the morning.",
  "Hair tied back if it is long. Leave dangling jewelry at home.",
];

const faqs = [
  {
    question: "What if I have never been around horses?",
    answer: "That is who this is for. Many people who come to us have never touched a horse. We start with the basics like how to approach safely and how to read their body language.",
  },
  {
    question: "What if I am nervous?",
    answer: "Most people are. Especially the first time. We work at your pace. If you want to just stand near a horse and breathe for a while that is completely fine.",
  },
  {
    question: "Are the horses gentle?",
    answer: "Yes. Our partner barns choose horses for their calm temperaments. These are horses who have worked with beginners before and know how to be still when someone needs a moment.",
  },
  {
    question: "What if I want to stop partway through?",
    answer: "Then you stop. You can take a break or step back or just watch. There is no pressure to push through anything.",
  },
];

export default function Safety() {
  return (
    <div>
      {/* Page Header - spacious */}
      <section className="py-[var(--space-xl)]">
        <div className="mx-auto max-w-2xl px-[var(--space-sm)] sm:px-[var(--space-md)]">
          <h1 
            className="mb-[var(--space-md)] text-3xl sm:text-4xl font-semibold text-foreground"
            data-testid="text-safety-title"
          >
            Before You Come
          </h1>
          <p 
            className="text-lg text-muted-foreground leading-[1.7]"
            data-testid="text-safety-intro"
          >
            We want your first visit to feel easy. Here is what we want you to know before you arrive.
          </p>
        </div>
      </section>

      {/* What to Expect - Sage background, more breathing */}
      <section className="bg-accent/10 py-[var(--space-xl)]">
        <div className="mx-auto max-w-2xl px-[var(--space-sm)] sm:px-[var(--space-md)]">
          <h2 
            className="mb-[var(--space-md)] text-[1.375rem] font-medium text-foreground"
            data-testid="text-what-to-expect-title"
          >
            What to Expect
          </h2>
          <div className="space-y-[var(--space-md)]">
            {whatToExpect.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-[var(--space-sm)]"
                data-testid={`text-expect-item-${i + 1}`}
              >
                <span className="mt-[0.6em] h-2 w-2 shrink-0 rounded-full bg-[#C05A35]" />
                <p className="text-[1.0625rem] text-foreground/90 leading-[1.7]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Wear - Default background, simpler */}
      <section className="py-[var(--space-xl)]">
        <div className="mx-auto max-w-2xl px-[var(--space-sm)] sm:px-[var(--space-md)]">
          <h2 
            className="mb-[var(--space-md)] text-[1.375rem] font-medium text-foreground"
            data-testid="text-what-to-wear-title"
          >
            What to Wear
          </h2>
          <div className="space-y-[var(--space-md)] text-muted-foreground">
            {whatToWear.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-[var(--space-sm)] leading-[2]"
                data-testid={`text-wear-item-${i + 1}`}
              >
                <span className="mt-[0.7em] h-2.5 w-2.5 rounded-full bg-[#C05A35]" />
                <p>{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-[var(--space-md)] text-[1.0625rem] text-muted-foreground leading-[1.7]">
            You do not need riding boots. Most closed toe shoes with a small heel will work fine.
          </p>
        </div>
      </section>

      {/* Who It's For - Sage background, quieter */}
      <section className="bg-accent/10 py-[var(--space-xl)]">
        <div className="mx-auto max-w-3xl px-[var(--space-sm)] text-center sm:px-[var(--space-md)]">
          <img
            src={pullQuoteImage}
            alt="Woman with horse in a calm barn setting"
            className="mb-[var(--space-lg)] h-[400px] w-full object-cover object-center"
          />
          <div className="mx-auto mb-[var(--space-md)] h-px w-[60px] bg-[#C05A35]" />
          <p 
            className="font-serif text-[20px] text-foreground leading-[1.7]"
            data-testid="text-who-its-for-description"
          >
            This is for women who are curious about horses but have little or no experience. Women who have wanted to try riding but never found the right environment. Women who are anxious and need things to go slower.
          </p>
          <p className="mt-[var(--space-md)] font-serif text-[20px] text-foreground">
            If that sounds like you this is your space.
          </p>
          <div className="mx-auto mt-[var(--space-md)] h-px w-[60px] bg-[#C05A35]" />
        </div>
      </section>

      {/* FAQ - Default background, more space between items */}
      <section className="py-[var(--space-xl)]">
        <div className="mx-auto max-w-2xl px-[var(--space-sm)] sm:px-[var(--space-md)]">
          <h2 
            className="mb-[var(--space-md)] text-[1.375rem] font-medium text-foreground"
            data-testid="text-faq-title"
          >
            Questions We Hear Often
          </h2>
          <div className="space-y-[var(--space-md)]">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={i === 0 ? "" : "border-t border-[#E2D4C0] pt-[var(--space-md)]"}
              >
                <h3 
                  className="mb-[var(--space-xs)] text-base font-normal text-[#C05A35]"
                  data-testid={`text-faq-question-${i + 1}`}
                >
                  {faq.question}
                </h3>
                <p 
                  className="text-[1.0625rem] text-muted-foreground leading-[1.7]"
                  data-testid={`text-faq-answer-${i + 1}`}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent/10 py-[var(--space-xl)]">
        <div className="mx-auto max-w-3xl px-[var(--space-sm)] sm:px-[var(--space-md)]">
          <div className="border-l-4 border-[#C05A35] bg-[#FAF5EE]/55 p-[40px] shadow-[0_16px_36px_rgba(44,26,14,0.08)]">
            <p className="mb-[var(--space-xs)] text-[11px] font-normal uppercase tracking-[0.24em] text-[#C05A35]">
              OUR COMMITMENT
            </p>
            <h2 className="mb-[var(--space-md)] text-[1.75rem] font-medium text-foreground">
              A Vetted, Private Community
            </h2>
            <p className="max-w-[700px] text-[1.0625rem] text-foreground/90 leading-[1.7]">
              Crescent Stables is a closed, women only environment. Sessions are
              small and intentionally kept that way. You will not be grouped with
              strangers. Every person in your session has been personally vetted.
              Our goal is that you feel as comfortable on your first day as you
              do on your last.
            </p>
          </div>
        </div>
      </section>

      <section className="py-[var(--space-xl)]">
        <div className="mx-auto max-w-xl px-[var(--space-sm)] text-center sm:px-[var(--space-md)]">
          <h2 className="text-[28px] font-medium text-foreground">
            Ready to take a look?
          </h2>
          <p className="mt-[var(--space-sm)] text-[16px] text-foreground/70">
            See what sessions are coming up and find one that feels right.
          </p>
          <Link href="/experiences">
            <Button
              variant="outline"
              className="mt-[var(--space-md)] min-w-[220px] border-2 border-[#C05A35] text-[#C05A35] hover:bg-transparent hover:text-[#C05A35]"
            >
              See Upcoming Sessions
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA - quieter, just text */}
      <section className="py-[var(--space-xl)]">
        <div className="mx-auto max-w-xl px-[var(--space-sm)] text-center sm:px-[var(--space-md)]">
          <p className="text-muted-foreground">
            Still have questions? <Link href="/contact" className="underline hover:text-foreground transition-colors">Reach out</Link> and we can talk.
          </p>
        </div>
      </section>
    </div>
  );
}
