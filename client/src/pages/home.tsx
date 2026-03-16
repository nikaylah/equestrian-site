import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { womenExperiences, kidsTeensExperiences } from "@/data/experiences";

function ExperienceCard({ 
  experience, 
  variant = "primary" 
}: { 
  experience: typeof womenExperiences[0]; 
  variant?: "primary" | "secondary";
}) {
  const isSecondary = variant === "secondary";
  
  return (
    <Card
      className={`group flex h-full flex-col overflow-visible hover-elevate active-elevate-2 transition-all duration-300 ${
        isSecondary
          ? "border-accent/30"
          : "border-[#c8b99a]/60 border-t-[3px] border-t-[#b5603a] bg-[#faf7f2]"
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
      <CardContent className={`flex flex-1 flex-col p-5 sm:p-6 ${isSecondary ? "bg-muted/20" : ""}`}>
        <h3 
          className={`mb-2 text-[20px] font-medium ${isSecondary ? "text-muted-foreground" : "text-foreground"}`}
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
              variant="outline"
              className="mx-auto w-auto border-[#b5603a] bg-transparent text-[#b5603a] hover:bg-transparent hover:text-[#b5603a]"
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
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.45),rgba(0,0,0,0.2))]" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 pb-10 md:pb-14">
          <h1 
            className="text-3xl sm:text-4xl md:text-[56px] font-semibold text-white leading-tight max-w-2xl"
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
          <p className="mt-3 max-w-lg text-[12px] font-light uppercase tracking-[8px] text-white/65">
            A women led, women only experience.
          </p>
          <Link href="/experiences">
            <Button className="mt-6" data-testid="button-hero-see-upcoming">
              See What's Coming Up
            </Button>
          </Link>
        </div>
      </section>

      {/* Breathing space - a quiet moment */}
      <section className="py-[80px]">
        <div className="mx-auto max-w-[680px] px-4 text-center sm:px-6">
          <p className="text-[19px] text-muted-foreground leading-relaxed">
            We run beginner friendly riding weeks at a few barns we trust. You don't need any experience. Most people who come are trying this for the first time.
          </p>
          <p className="mt-4 font-serif text-[22px] leading-relaxed text-[#b5603a]">
            Most women who come have never been on a horse before.
          </p>
        </div>
      </section>

      <section className="bg-[#e8ede6] py-[80px]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              ["The pace", "No rushing. Ever."],
              ["The group", "Small enough that you will never feel lost."],
              ["The expectation", "There is none. Come as you are."],
            ].map(([label, description]) => (
              <div
                key={label}
                className="space-y-3 border-t border-[rgba(181,96,58,0.2)] pt-5 text-center md:text-left"
              >
                <p className="text-[11px] uppercase tracking-[2px] text-[#b5603a]">{label}</p>
                <p className="text-[17px] text-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Women - tighter, focused */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
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

      {/* Closing - spacious, unhurried */}
      <section className="pt-[60px] pb-20 md:pb-28">
        <div className="mx-auto max-w-xl px-4 sm:px-6 text-center">
          <div className="mx-auto mb-4 h-px w-[60px] bg-[#b5603a]" />
          <p className="text-[14px] text-[#b5603a]">
            Women led · Women only · Minnesota
          </p>
          <h2 className="mb-4 mt-5 text-[40px] font-medium leading-tight text-foreground" data-testid="text-cta-title">
            Whenever you are ready, we will be here.
          </h2>
          <p className="mb-8 text-muted-foreground" data-testid="text-cta-subtitle">
            Sessions fill up quickly. Take a look at what is coming up.
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
