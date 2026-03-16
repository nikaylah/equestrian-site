import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { upcomingEvents } from "@/data/events";
import { useToast } from "@/hooks/use-toast";

export default function Experiences() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const featuredEvent = upcomingEvents.find((e) => e.isFeatured);
  const upcomingList = upcomingEvents.filter((e) => !e.isFeatured);

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
      {/* Page Header - spacious, simple */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h1 
            className="mb-5 text-3xl sm:text-4xl font-semibold text-foreground"
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

      {/* Featured Event - simpler, less card-like */}
      {featuredEvent && (
        <section className="pb-14 md:pb-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="mb-8">
              <img
                src={featuredEvent.image}
                alt={featuredEvent.title}
                className="w-full aspect-[16/9] object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="max-w-xl">
              <p className="text-sm text-muted-foreground mb-2" data-testid="text-featured-date">
                {featuredEvent.dateLabel}
              </p>
              <h2 
                className="mb-4 text-2xl sm:text-3xl font-medium text-foreground"
                data-testid="text-featured-title"
              >
                {featuredEvent.title}
              </h2>
              <p 
                className="mb-6 text-muted-foreground leading-relaxed"
                data-testid="text-featured-description"
              >
                {featuredEvent.description}
              </p>
              <Button data-testid="button-reserve-spot">
                Reserve Your Spot
              </Button>
              {featuredEvent.spotsLeft && featuredEvent.spotsLeft <= 4 && (
                <p className="mt-4 text-sm text-muted-foreground/70">
                  {featuredEvent.spotsLeft} spots remaining
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Upcoming List - simpler, more breathing room */}
      <section className="bg-accent/10 py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 
            className="mb-10 text-xl sm:text-2xl font-medium text-foreground"
            data-testid="text-upcoming-title"
          >
            More Sessions
          </h2>
          <div className="space-y-10">
            {upcomingList.map((event) => (
              <div key={event.id} className="group">
                <p className="text-sm text-muted-foreground/70 mb-1">
                  {event.dateLabel}
                </p>
                <h3 
                  className="text-lg font-normal text-foreground mb-2"
                  data-testid={`text-event-title-${event.id}`}
                >
                  {event.title}
                </h3>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  {event.description}
                </p>
                <button 
                  className="text-sm text-foreground/70 underline hover:text-foreground transition-colors"
                  data-testid={`button-learn-more-${event.id}`}
                >
                  Learn more
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note about location */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <p className="text-muted-foreground leading-relaxed" data-testid="text-faq-location-answer">
            Sessions take place at partner barns around Minnesota. We share the exact location after you sign up.
          </p>
        </div>
      </section>

      {/* Email Capture - quieter */}
      <section className="bg-accent/10 py-16 md:py-20">
        <div className="mx-auto max-w-md px-4 sm:px-6">
          <p className="mb-6 text-muted-foreground text-center">
            Want to hear when new sessions are scheduled?
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
            <Button type="submit" variant="outline" data-testid="button-join-list">
              Notify Me
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
