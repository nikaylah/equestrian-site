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
      <section className="pt-14 md:pt-20">
        <div className="mx-auto max-w-[600px] px-4 text-center sm:px-6">
          <h2 className="mb-4 text-2xl sm:text-3xl font-medium text-foreground">
            Find your session.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We run small group sessions throughout the year at trusted partner barns across Minnesota. Most women who come start with Beginner Riding Week — no experience needed.
          </p>
          <p className="mt-5 text-center text-[#b5603a]">—</p>
          <p className="mx-4 mt-2 text-[15px] italic text-foreground/70 leading-relaxed">
            Sessions take place at partner barns across Minnesota. We share the exact location once you sign up — we keep it this way to maintain a small, private environment.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-[720px] px-4 sm:px-6">
          <div className="mx-auto max-w-[640px] border-y border-[#b5603a]/60 py-6 text-center">
            <div className="space-y-3 text-[15px] leading-relaxed">
              <p>
                <span className="font-semibold text-[#b5603a]">Never ridden before?</span>{" "}
                Start with Beginner Riding Week
              </p>
              <p>
                <span className="font-semibold text-[#b5603a]">
                  Want to really slow down and connect?
                </span>{" "}
                Horsemanship Week is a full week at the barn
              </p>
              <p>
                <span className="font-semibold text-[#b5603a]">
                  Already ridden a few times?
                </span>{" "}
                Trail Experience gets you out on the trails
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Page Header - spacious, simple */}
      <section className="pt-[60px] pb-14 md:pb-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h1 
            className="mb-5 text-2xl sm:text-3xl font-semibold text-foreground"
            data-testid="text-experiences-title"
          >
            Upcoming Sessions
          </h1>
          <p 
            className="text-lg text-muted-foreground leading-relaxed"
            data-testid="text-experiences-subtitle"
          >
            Small groups. Slow pace. A space where you can actually breathe.
          </p>
        </div>
      </section>

      <section className="pb-14 md:pb-20">
        <div className="mx-auto max-w-[720px] px-4 sm:px-6">
          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <article
                key={event.id}
                className="rounded-xl border border-[#c8b99a]/70 border-l-[3px] border-l-[#b5603a] bg-[#faf7f2] px-5 py-6 sm:px-8 sm:py-8 shadow-[0_10px_24px_rgba(61,53,48,0.06)]"
              >
                <p
                  className="mb-2 text-[13px] text-[#b5603a]"
                  data-testid={`text-event-date-${event.id}`}
                >
                  {event.dateLabel}
                </p>
                <h2
                  className="mb-3 text-[22px] font-medium text-foreground"
                  data-testid={`text-event-title-${event.id}`}
                >
                  {event.title}
                </h2>
                <p
                  className="mb-5 text-muted-foreground leading-relaxed"
                  data-testid={`text-event-description-${event.id}`}
                >
                  {event.description}
                </p>
                <p className="mb-5 text-[13px] italic text-foreground/60">
                  Pricing shared after inquiry.
                </p>
                <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
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
      <section className="bg-accent/10 py-16 md:py-20">
        <div className="mx-auto max-w-md px-4 sm:px-6">
          <p className="mb-2 text-center text-foreground">
            Not ready yet?
          </p>
          <p className="mb-6 text-center text-muted-foreground">
            We will reach out when new sessions open. No pressure.
          </p>
          <form onSubmit={handleEmailSubmit} className="flex flex-col gap-3 sm:flex-row">
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
