import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { upcomingEvents } from "@/data/events";
import { useToast } from "@/hooks/use-toast";

export default function Experiences() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You are on the list",
        description: "We will email you when new sessions are scheduled.",
      });
      setEmail("");
    }
  };

  return (
    <div>
      <section className="py-[var(--space-xl)]">
        <div className="mx-auto max-w-[600px] px-[var(--space-sm)] text-center sm:px-[var(--space-md)]">
          <h2 className="mb-[var(--space-sm)] text-2xl sm:text-3xl font-medium text-foreground">
            Find your session.
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.7]">
            We run small group sessions throughout the year at trusted partner barns across Minnesota. Most women who come start with Beginner Riding Week — no experience needed.
          </p>
          <p className="mt-[var(--space-md)] text-center text-[#C05A35]">—</p>
          <p className="mx-[var(--space-sm)] mt-[var(--space-xs)] text-[15px] italic text-foreground/70 leading-[1.7]">
            Sessions take place at partner barns across Minnesota. We share the exact location once you sign up — we keep it this way to maintain a small, private environment.
          </p>
        </div>
      </section>

      <section className="py-[var(--space-xl)]">
        <div className="mx-auto max-w-[720px] px-[var(--space-sm)] sm:px-[var(--space-md)]">
          <div className="mx-auto max-w-[640px] border-y border-[#C05A35]/60 py-[var(--space-md)] text-center">
            <div className="space-y-[var(--space-md)] text-[15px] leading-[1.7]">
              <p>
                <span className="font-semibold text-[#C05A35]">Never ridden before?</span>{" "}
                Start with Beginner Riding Week
              </p>
              <p>
                <span className="font-semibold text-[#C05A35]">
                  Want to really slow down and connect?
                </span>{" "}
                Horsemanship Week is a full week at the barn
              </p>
              <p>
                <span className="font-semibold text-[#C05A35]">
                  Already ridden a few times?
                </span>{" "}
                Trail Experience gets you out on the trails
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Page Header - spacious, simple */}
      <section className="py-[var(--space-xl)]">
        <div className="mx-auto max-w-2xl px-[var(--space-sm)] text-center sm:px-[var(--space-md)]">
          <h1 
            className="mb-[var(--space-md)] text-2xl sm:text-3xl font-semibold text-foreground"
            data-testid="text-experiences-title"
          >
            Upcoming Sessions
          </h1>
          <p 
            className="text-lg text-muted-foreground leading-[1.7]"
            data-testid="text-experiences-subtitle"
          >
            Small groups. Slow pace. A space where you can actually breathe.
          </p>
        </div>
      </section>

      <section className="py-[var(--space-xl)]">
        <div className="mx-auto max-w-[720px] px-[var(--space-sm)] sm:px-[var(--space-md)]">
          <div className="space-y-[var(--space-md)]">
            {upcomingEvents.map((event) => (
              <article
                key={event.id}
                className="rounded-xl border border-[#E2D4C0]/70 border-l-[3px] border-l-[#C05A35] bg-[#FAF5EE] px-[var(--space-md)] py-[var(--space-md)] shadow-[0_10px_24px_rgba(74,48,32,0.06)]"
              >
                <p
                  className="mb-[var(--space-xs)] text-[13px] text-[#C05A35]"
                  data-testid={`text-event-date-${event.id}`}
                >
                  {event.dateLabel}
                </p>
                <h2
                  className="mb-[var(--space-sm)] text-[22px] font-medium text-foreground"
                  data-testid={`text-event-title-${event.id}`}
                >
                  {event.title}
                </h2>
                <p
                  className="mb-[var(--space-md)] text-[1.0625rem] text-muted-foreground leading-[1.7]"
                  data-testid={`text-event-description-${event.id}`}
                >
                  {event.description}
                </p>
                <p className="mb-[var(--space-md)] text-[13px] italic text-foreground/60">
                  Pricing varies by session — we share all details when you reach out. No commitment required.
                </p>
                <div className="flex flex-col items-stretch gap-[var(--space-sm)] sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-h-6">
                    {event.spotsLeft ? (
                      <p
                        className="text-[13px] italic text-foreground/60"
                        data-testid={`text-event-spots-${event.id}`}
                      >
                        {event.spotsLeft} spots remaining
                      </p>
                    ) : null}
                  </div>
                  <Button className="w-full sm:w-auto" data-testid={`button-reserve-spot-${event.id}`}>
                    Reserve Your Spot
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture - quieter */}
      <section className="bg-accent/10 py-[var(--space-xl)]">
        <div className="mx-auto max-w-md px-[var(--space-sm)] sm:px-[var(--space-md)]">
          <p className="mb-[var(--space-xs)] text-center text-foreground">
            Not ready yet?
          </p>
          <p className="mb-[var(--space-md)] text-center text-muted-foreground">
            We will reach out when new sessions open. No pressure.
          </p>
          <form onSubmit={handleEmailSubmit} className="flex flex-col gap-[var(--space-sm)] sm:flex-row">
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
              data-testid="input-email-signup"
            />
            <Button type="submit" variant="outline" className="w-full sm:w-auto" data-testid="button-join-list">
              Keep me posted
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
