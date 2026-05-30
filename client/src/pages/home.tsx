import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { womenExperiences, kidsTeensExperiences } from "@/data/experiences";
import heroImage from "../../../images/image1.jpeg";

function ExperienceCard({ 
  experience, 
  variant = "primary" 
}: { 
  experience: typeof womenExperiences[0]; 
  variant?: "primary" | "secondary";
}) {
  const isSecondary = variant === "secondary";
  const homeButtonText =
    experience.title === "Beginner Riding Week" ? "Start here" : "See dates";
  
  return (
    <Card
      className={`group flex h-full flex-col overflow-visible hover-elevate active-elevate-2 transition-all duration-300 ${
        isSecondary
          ? "border-accent/30"
          : "border-[#E2D4C0]/60 border-t-[3px] border-t-[#C05A35] bg-[#FAF5EE]"
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
        <img
          src={experience.image}
          alt={experience.title}
          className={`h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 ${isSecondary ? "saturate-[0.6] brightness-[1.05]" : ""}`}
          loading="lazy"
        />
        {isSecondary && (
          <Badge 
            variant="secondary" 
            className="absolute right-3 top-3 bg-background/90 backdrop-blur-sm text-muted-foreground"
            data-testid={`badge-coming-soon-${experience.id}`}
          >
            2026
          </Badge>
        )}
      </div>
      <CardContent className={`flex flex-1 flex-col px-[var(--space-md)] pb-[var(--space-md)] pt-[var(--space-sm)] ${isSecondary ? "bg-muted/20" : ""}`}>
        <h3 
          className={`mb-[var(--space-xs)] text-[20px] font-medium ${isSecondary ? "text-muted-foreground" : "text-foreground"}`}
          data-testid={`text-experience-title-${experience.id}`}
        >
          {experience.title}
        </h3>
        <p className="mb-[var(--space-md)] flex-1 text-muted-foreground text-[1.0625rem] leading-[1.7]">
          {experience.description}
        </p>
        {isSecondary ? (
          <>
            <Button 
              variant="outline"
              className="w-full text-muted-foreground"
              disabled
              data-testid={`button-notify-me-${experience.id}`}
            >
              Join Interest List
            </Button>
            <p className="mt-[var(--space-xs)] text-xs text-muted-foreground/75">
              Crescent Stables is a women owned, women focused space.
            </p>
          </>
        ) : (
          <Link href={experience.buttonLink}>
            <Button 
              variant="outline"
              className="mx-auto w-auto border-[#C05A35] bg-transparent text-[#C05A35] hover:bg-transparent hover:text-[#C05A35]"
              data-testid={`button-${homeButtonText.toLowerCase().replace(" ", "-")}-${experience.id}`}
            >
              {homeButtonText}
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero - Dark overlay on image, left-aligned for less perfection */}
      <section className="relative flex min-h-[50vh] md:min-h-[60vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Horse standing in barn aisle"
            className="h-full w-full object-cover object-[center_28%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.45),rgba(0,0,0,0.2))]" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-[var(--space-sm)] pb-[var(--space-lg)] sm:px-[var(--space-md)] md:pb-[var(--space-xl)]">
          <h1 
            className="max-w-[11ch] text-[32px] leading-[1.1] sm:max-w-2xl sm:text-4xl md:text-[48px] font-semibold text-white"
            data-testid="text-hero-title"
          >
            A space that was made for you.
          </h1>
          <p 
            className="mt-[var(--space-sm)] text-base md:text-lg text-white/80 max-w-lg"
            data-testid="text-hero-subtitle"
          >
            Women only sessions at trusted barns across Minnesota. No experience needed.
          </p>
          <Link href="/experiences">
            <Button className="mt-[var(--space-md)]" data-testid="button-hero-see-upcoming">
              See What's Coming Up
            </Button>
          </Link>
        </div>
      </section>

      {/* Breathing space - a quiet moment */}
      <section className="py-[var(--space-xl)]">
        <div className="mx-auto max-w-[680px] px-[var(--space-sm)] text-center sm:px-[var(--space-md)]">
          <p className="text-[19px] text-muted-foreground leading-[1.7]">
            We run beginner friendly riding weeks at a few barns we trust. You don't need any experience. Most people who come are trying this for the first time.
          </p>
          <p className="mt-[var(--space-md)] font-serif text-[22px] leading-[1.7] text-[#C05A35]">
            This is not a riding school. It is a space to slow down.
          </p>
        </div>
      </section>

      <section className="bg-[#EFE6D8] py-[var(--space-xl)]">
        <div className="mx-auto max-w-5xl px-[var(--space-sm)] sm:px-[var(--space-md)]">
          <div className="grid grid-cols-1 gap-[var(--space-md)] md:grid-cols-3">
            {[
              ["The expectation", "There is none. Come as you are."],
              ["The pace", "No rushing. Ever."],
              ["The group", "Small enough that you always feel seen."],
            ].map(([label, description]) => (
              <div
                key={label}
                className="space-y-[var(--space-md)] text-center md:text-left"
              >
                <p className="text-[11px] uppercase tracking-[2px] text-[#C05A35]">{label}</p>
                <p className="text-[1.0625rem] leading-[1.7] text-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Women - tighter, focused */}
      <section className="py-[var(--space-xl)]">
        <div className="mx-auto max-w-7xl px-[var(--space-sm)] sm:px-[var(--space-md)]">
          <div className="grid gap-[var(--space-md)] md:grid-cols-2 lg:grid-cols-3">
            {womenExperiences.map((experience) => (
              <ExperienceCard 
                key={experience.id} 
                experience={experience} 
                variant="primary"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Closing - spacious, unhurried */}
      <section className="py-[var(--space-xl)]">
        <div className="mx-auto max-w-xl px-[var(--space-sm)] text-center sm:px-[var(--space-md)]">
          <div className="mx-auto mb-[var(--space-sm)] h-px w-[60px] bg-[#C05A35]" />
          <p className="text-[14px] text-[#C05A35]">
            Women led · Women only · Minnesota
          </p>
          <h2 className="mb-[var(--space-sm)] mt-[var(--space-md)] text-[40px] font-medium leading-tight text-foreground" data-testid="text-cta-title">
            Whenever you are ready, we will be here.
          </h2>
          <p className="mb-[var(--space-md)] text-muted-foreground" data-testid="text-cta-subtitle">
            Take a look at what is coming up.
          </p>
          <Link href="/experiences">
            <Button data-testid="button-view-upcoming-events">
              Find Your Session
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
