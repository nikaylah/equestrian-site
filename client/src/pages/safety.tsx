import { Link } from "wouter";

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
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h1 
            className="mb-6 text-3xl sm:text-4xl font-semibold text-foreground"
            data-testid="text-safety-title"
          >
            Before You Come
          </h1>
          <p 
            className="text-lg text-muted-foreground leading-relaxed"
            data-testid="text-safety-intro"
          >
            We want your first visit to feel easy. Here is what we want you to know before you arrive.
          </p>
        </div>
      </section>

      {/* What to Expect - Sage background, more breathing */}
      <section className="bg-accent/10 py-14 md:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 
            className="mb-8 text-xl sm:text-2xl font-medium text-foreground"
            data-testid="text-what-to-expect-title"
          >
            What to Expect
          </h2>
          <div className="space-y-5">
            {whatToExpect.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4"
                data-testid={`text-expect-item-${i + 1}`}
              >
                <span className="mt-[0.6em] h-2 w-2 shrink-0 rounded-full bg-[#b5603a]" />
                <p className="text-[17px] text-foreground/90 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Wear - Default background, simpler */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 
            className="mb-6 text-xl sm:text-2xl font-medium text-foreground"
            data-testid="text-what-to-wear-title"
          >
            What to Wear
          </h2>
          <div className="space-y-3 text-muted-foreground">
            {whatToWear.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 leading-[2]"
                data-testid={`text-wear-item-${i + 1}`}
              >
                <span className="mt-[0.7em] h-2.5 w-2.5 rounded-full bg-[#b5603a]" />
                <p>{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[17px] text-muted-foreground leading-relaxed">
            You do not need riding boots. Most closed toe shoes with a small heel will work fine.
          </p>
        </div>
      </section>

      {/* Who It's For - Sage background, quieter */}
      <section className="bg-accent/10 py-[80px]">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="mx-auto mb-8 h-px w-[60px] bg-[#b5603a]" />
          <p 
            className="font-serif text-[20px] text-foreground leading-relaxed"
            data-testid="text-who-its-for-description"
          >
            This is for women who are curious about horses but have little or no experience. Women who have wanted to try riding but never found the right environment. Women who are anxious and need things to go slower.
          </p>
          <p className="mt-6 font-serif text-[20px] text-foreground">
            If that sounds like you this is your space.
          </p>
          <div className="mx-auto mt-8 h-px w-[60px] bg-[#b5603a]" />
        </div>
      </section>

      {/* FAQ - Default background, more space between items */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 
            className="mb-10 text-xl sm:text-2xl font-medium text-foreground"
            data-testid="text-faq-title"
          >
            Questions We Hear Often
          </h2>
          <div className="space-y-10">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={i === 0 ? "" : "border-t border-[#e8e0d5] pt-10"}
              >
                <h3 
                  className="mb-3 text-base font-normal text-[#b5603a]"
                  data-testid={`text-faq-question-${i + 1}`}
                >
                  {faq.question}
                </h3>
                <p 
                  className="text-muted-foreground leading-relaxed"
                  data-testid={`text-faq-answer-${i + 1}`}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent/10 py-[60px]">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="border-l-4 border-[#b5603a] bg-[#f5f0e8]/55 pl-6 sm:pl-8">
            <h2 className="mb-6 text-xl sm:text-2xl font-medium text-foreground">
              Social Safety
            </h2>
            <p className="text-[18px] text-foreground/90 leading-relaxed">
              Crescent Stables is a closed, women only environment. Sessions are
              small and intentionally kept that way. You will not be placed with
              strangers who don't share this space's values. Our goal is that you
              feel as comfortable on your first day as you do on your last.
            </p>
          </div>
        </div>
      </section>

      {/* CTA - quieter, just text */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-xl px-4 sm:px-6 text-center">
          <p className="text-muted-foreground">
            Still have questions? <Link href="/contact" className="underline hover:text-foreground transition-colors">Reach out</Link> and we can talk.
          </p>
        </div>
      </section>
    </div>
  );
}
