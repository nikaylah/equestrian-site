import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Clock, Users } from "lucide-react";

export interface Experience {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  duration: string;
  rating: number;
  reviews: number;
  category: string;
  maxGroup: number;
}

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card className="group overflow-visible hover-elevate active-elevate-2 transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
        <img
          src={experience.image}
          alt={experience.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <Badge className="absolute left-3 top-3" data-testid={`badge-category-${experience.id}`}>
          {experience.category}
        </Badge>
      </div>
      <CardContent className="p-6">
        <div className="mb-2 flex items-center gap-1 text-sm" data-testid={`text-experience-rating-${experience.id}`}>
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{experience.rating}</span>
          <span className="text-muted-foreground">({experience.reviews} reviews)</span>
        </div>
        <h3 className="mb-2 text-lg font-semibold text-foreground line-clamp-1" data-testid={`text-experience-title-${experience.id}`}>
          {experience.title}
        </h3>
        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
          {experience.description}
        </p>
        <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{experience.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>Up to {experience.maxGroup}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div data-testid={`text-experience-price-${experience.id}`}>
            <span className="text-lg font-bold text-foreground">${experience.price}</span>
            <span className="text-sm text-muted-foreground"> / person</span>
          </div>
          <Button size="sm" data-testid={`button-view-experience-${experience.id}`}>
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
