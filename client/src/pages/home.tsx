import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { womenExperiences, kidsTeensExperiences } from "@/data/experiences";
import { ArrowRight } from "lucide-react";

function ExperienceCard({ 
  experience, 
  variant = "primary" 
}: { 
  experience: typeof womenExperiences[0]; 
  variant?: "primary" | "secondary";
}) {
  const isSecondary = variant === "secondary";
  
  return (
    <Card className={`group flex h-full flex-col overflow-visible border-accent/30 hover-elevate active-elevate-2 transition-all duration-300`}>
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
      <CardContent className={`flex flex-1 flex-col p-5 sm:p-6 ${isSecondary ? "bg-muted/20" : ""}`}>
        <h3 
          className={`mb-2 text-lg sm:text-xl font-medium ${isSecondary ? "text-muted-foreground" : "text-foreground"}`}
          data-testid={`text-experience-title-${experience.id}`}
        >
          {experience.title}
        </h3>
        <p className="mb-5 flex-1 text-muted-foreground line-clamp-3 text-sm sm:text-base">
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
            <p className="mt-3 text-xs text-muted-foreground/75">
              Crescent Stables is a women owned, women focused space.
            </p>
          </>
        ) : (
          <Link href={experience.buttonLink}>
            <Button 
              variant="default"
              className="w-full"
              data-testid={`button-${experience.buttonText.toLowerCase().replace(" ", "-")}-${experience.id}`}
            >
              {experience.buttonText}
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
            src="https://images.unsplash.com/photo-1576692192914-9abed71b3ef9?w=1920&q=80"
            alt="Horse standing in barn aisle"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 pb-10 md:pb-14">
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight max-w-2xl"
            data-testid="text-hero-title"
          >
            A space that was made for you.
          </h1>
          <p 
            className="mt-4 text-base md:text-lg text-white/80 max-w-lg"
            data-testid="text-hero-subtitle"
          >
            Women only sessions at trusted barns across Minnesota. No experience needed, most women who come have never ridden before.
          </p>
          <p className="mt-3 max-w-lg text-sm font-light text-white/65">
            A women led, women only experience.
          </p>
        </div>
      </section>

      {/* Breathing space - a quiet moment */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We run beginner friendly riding weeks at a few barns we trust. You don't need any experience. Most people who come are trying this for the first time.
          </p>
        </div>
      </section>

      {/* For Women - tighter, focused */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 md:mb-12">
            <h2 
              className="text-2xl sm:text-3xl font-medium text-foreground"
              data-testid="text-women-section-title"
            >
              For Women
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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

      {/* For Kids & Teens - quieter, less structured */}
      <section className="bg-accent/10 py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-10 max-w-md">
            <p className="text-sm text-muted-foreground/70 mb-2">Coming Late 2026</p>
            <h2 
              className="text-xl sm:text-2xl font-medium text-muted-foreground"
              data-testid="text-kids-section-title"
            >
              For Kids and Teens
            </h2>
            <p className="mt-3 text-muted-foreground/70" data-testid="text-kids-coming-soon">
              We are putting together some programs for younger riders. Not ready yet but getting closer.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {kidsTeensExperiences.map((experience) => (
              <ExperienceCard 
                key={experience.id} 
                experience={experience} 
                variant="secondary"
              />
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground/60">
            Interested? <Link href="/contact" className="underline hover:text-foreground transition-colors">Let us know</Link> and we will send you details when they are ready.
          </p>
        </div>
      </section>

      {/* Closing - spacious, unhurried */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-xl px-4 sm:px-6 text-center">
          <p className="text-muted-foreground mb-8" data-testid="text-cta-title">
            If this sounds like what you have been looking for we would love to have you.
          </p>
          <Link href="/experiences">
            <Button data-testid="button-view-upcoming-events">
              See What's Coming Up
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
