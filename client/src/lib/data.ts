import type { Experience } from "@/components/experience-card";

export interface UpcomingEvent {
  id: number;
  title: string;
  date: string;
  dateLabel: string;
  description: string;
  image: string;
  tag: "Riding" | "Horsemanship" | "Trail";
  spotsLeft?: number;
  isFeatured?: boolean;
}

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: 1,
    title: "Horsemanship Week",
    date: "2026-04-14",
    dateLabel: "Apr 14 to 18",
    description:
      "Five days of groundwork and riding basics. We take our time. Good if you want a full week to just be around the horses.",
    image:
      "https://images.unsplash.com/photo-1576692192914-9abed71b3ef9?w=800&q=80",
    tag: "Horsemanship",
    spotsLeft: 3,
    isFeatured: true,
  },
  {
    id: 2,
    title: "Beginner Riding Week",
    date: "2026-04-28",
    dateLabel: "Apr 28 to May 2",
    description:
      "If you have never ridden before this is a good place to start. We spend the first couple days just getting comfortable.",
    image:
      "https://images.unsplash.com/photo-1621879174909-06769034c7fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Riding",
    spotsLeft: 5,
  },
  {
    id: 3,
    title: "Trail Experience",
    date: "2026-05-09",
    dateLabel: "May 9 to 10",
    description: "Two days on horseback out on the trails with a small group.",
    image: "https://images.unsplash.com/photo-1664461247469-6890483f4531?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Trail",
    spotsLeft: 4,
  },
  {
    id: 4,
    title: "Horsemanship Week",
    date: "2026-04-06",
    dateLabel: "Apr 6 to 10",
    description:
      "Groundwork and riding over five days. Small group. We don't rush.",
    image:
      "https://images.unsplash.com/photo-1576692192914-9abed71b3ef9?w=800&q=80",
    tag: "Horsemanship",
    spotsLeft: 6,
  },
  {
    id: 5,
    title: "Beginner Riding Week",
    date: "2026-04-20",
    dateLabel: "Apr 20 to 24",
    description: "For people who have not ridden before. We go at your pace.",
    image:
      "https://images.unsplash.com/photo-1621879174909-06769034c7fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Riding",
    spotsLeft: 6,
  },
  {
    id: 6,
    title: "Trail Experience",
    date: "2026-05-09",
    dateLabel: "May 9 to 10",
    description:
      "Spring trail riding. Works best if you have ridden a few times.",
    image:
      "https://images.unsplash.com/photo-1576692194458-ea3f97b227af?w=800&q=80",
    tag: "Trail",
    spotsLeft: 5,
  },
];

export interface HorseExperience {
  id: number;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  isComingSoon?: boolean;
}

export const womenExperiences: HorseExperience[] = [
  {
    id: 1,
    title: "Horsemanship Week",
    description:
      "You spend the week at the barn with us. We cover groundwork and riding basics but there is no rush. Most of the time you are just being with the horses.",
    image:
      "https://images.unsplash.com/photo-1576692192914-9abed71b3ef9?w=800&q=80",
    buttonText: "Join This Experience",
    buttonLink: "/experiences",
  },
  {
    id: 2,
    title: "Beginner Riding Week",
    description:
      "If you have never ridden before this is a good place to start. We spend the first couple days just getting comfortable around horses.",
    image:
      "https://images.unsplash.com/photo-1621879174909-06769034c7fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    buttonText: "Join This Experience",
    buttonLink: "/experiences",
  },
  {
    id: 3,
    title: "Trail Experience",
    description:
      "Two days on horseback out on the trails. This one works best if you have ridden a few times before.",
    image:
      "https://images.unsplash.com/photo-1576692194458-ea3f97b227af?w=800&q=80",
    buttonText: "Join This Experience",
    buttonLink: "/experiences",
  },
];

export const kidsTeensExperiences: HorseExperience[] = [
  {
    id: 4,
    title: "Kids Lessons",
    description:
      "These are seasonal lessons for kids. We are still working out exactly how they will run but you can sign up to hear when they are ready.",
    image:
      "https://images.unsplash.com/photo-1541600593739-1d4c5177aae2?w=800&q=80",
    buttonText: "Get Notified",
    buttonLink: "/contact",
    isComingSoon: true,
  },
  {
    id: 5,
    title: "Teen Riding",
    description:
      "A program for teenagers who want to learn how to ride. Still working on this one.",
    image:
      "https://images.unsplash.com/photo-1654693519854-175cee0fa7d6?w=800&q=80",
    buttonText: "Get Notified",
    buttonLink: "/contact",
    isComingSoon: true,
  },
  {
    id: 6,
    title: "Summer Week",
    description:
      "A weeklong summer program. More details coming later this year.",
    image:
      "https://images.unsplash.com/photo-1682353213492-8433d437855a?w=800&q=80",
    buttonText: "Get Notified",
    buttonLink: "/contact",
    isComingSoon: true,
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Horsemanship Week",
    description:
      "You spend the week at the barn with us. We cover groundwork and riding basics but there is no rush. Most of the time you are just being with the horses.",
    image:
      "https://images.unsplash.com/photo-1576692192914-9abed71b3ef9?w=800&q=80",
    price: 895,
    duration: "5 days",
    rating: 4.9,
    reviews: 48,
    category: "Women",
    maxGroup: 8,
  },
  {
    id: 2,
    title: "Beginner Riding Week",
    description:
      "If you have never ridden before this is a good place to start. We spend the first couple days just getting comfortable around horses.",
    image:
      "https://images.unsplash.com/photo-1621879174909-06769034c7fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 795,
    duration: "5 days",
    rating: 4.8,
    reviews: 36,
    category: "Women",
    maxGroup: 6,
  },
  {
    id: 3,
    title: "Trail Experience",
    description:
      "Two days on horseback out on the trails. This one works best if you have ridden a few times before.",
    image:
      "https://images.unsplash.com/photo-1576692194458-ea3f97b227af?w=800&q=80",
    price: 450,
    duration: "2 days",
    rating: 4.9,
    reviews: 62,
    category: "Women",
    maxGroup: 6,
  },
  {
    id: 4,
    title: "Kids Lessons",
    description:
      "These are seasonal lessons for kids. We are still working out exactly how they will run but you can sign up to hear when they are ready.",
    image:
      "https://images.unsplash.com/photo-1541600593739-1d4c5177aae2?w=800&q=80",
    price: 275,
    duration: "Seasonal",
    rating: 4.7,
    reviews: 24,
    category: "Kids & Teens",
    maxGroup: 4,
  },
  {
    id: 5,
    title: "Teen Riding",
    description:
      "A program for teenagers who want to learn how to ride. Still working on this one.",
    image:
      "https://images.unsplash.com/photo-1654693519854-175cee0fa7d6?w=800&q=80",
    price: 325,
    duration: "Seasonal",
    rating: 4.8,
    reviews: 18,
    category: "Kids & Teens",
    maxGroup: 6,
  },
  {
    id: 6,
    title: "Summer Week",
    description:
      "A weeklong summer program. More details coming later this year.",
    image:
      "https://images.unsplash.com/photo-1682353213492-8433d437855a?w=800&q=80",
    price: 595,
    duration: "1 week",
    rating: 4.9,
    reviews: 31,
    category: "Kids & Teens",
    maxGroup: 8,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "Denver, CO",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    rating: 5,
    text: "The Women's Horsemanship Week was transformative. I came with no experience and left feeling confident and connected to these beautiful animals.",
  },
  {
    id: 2,
    name: "Jennifer Adams",
    location: "Austin, TX",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    rating: 5,
    text: "Such a welcoming, gentle environment. The instructors truly understand how to create a supportive space for women at every skill level.",
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    location: "Portland, OR",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80",
    rating: 5,
    text: "I've always been nervous around horses, but this experience changed everything. The pace was perfect and I felt supported every step of the way.",
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "Emily Carter",
    role: "Founder & Lead Instructor",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
    bio: "A lifelong horsewoman with 20+ years of experience, Emily founded this space to share the healing power of horses with women.",
  },
  {
    id: 2,
    name: "Rachel Thompson",
    role: "Horsemanship Director",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80",
    bio: "Certified in natural horsemanship, Rachel brings a gentle, intuitive approach to connecting humans and horses.",
  },
  {
    id: 3,
    name: "Lisa Chen",
    role: "Youth Programs Lead",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
    bio: "With a background in education, Lisa designs programs that help young riders build confidence and skills.",
  },
  {
    id: 4,
    name: "Amanda Foster",
    role: "Safety & Operations",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
    bio: "A certified equine safety specialist, Amanda ensures every experience is both meaningful and safe.",
  },
];

export const safetyFeatures = [
  {
    id: 1,
    title: "Certified Instructors",
    description:
      "All our instructors are certified and experienced in teaching riders of all levels.",
    icon: "Shield",
  },
  {
    id: 2,
    title: "Small Group Sizes",
    description:
      "We keep groups small to ensure personalized attention and a safe learning environment.",
    icon: "Users",
  },
  {
    id: 3,
    title: "Well-Trained Horses",
    description:
      "Our horses are carefully selected and trained for their gentle, patient temperaments.",
    icon: "Heart",
  },
  {
    id: 4,
    title: "Safety Equipment",
    description:
      "We provide all necessary safety equipment including helmets and appropriate gear.",
    icon: "FileCheck",
  },
  {
    id: 5,
    title: "Emergency Protocols",
    description:
      "Comprehensive emergency plans and first aid trained staff on site at all times.",
    icon: "AlertCircle",
  },
  {
    id: 6,
    title: "Insurance Coverage",
    description:
      "Full liability coverage and participant insurance included with all programs.",
    icon: "Lock",
  },
];

export const destinations = [
  {
    name: "Barn Aisle",
    country: "Indoor",
    image:
      "https://images.unsplash.com/photo-1576692192914-9abed71b3ef9?w=400&q=80",
  },
  {
    name: "Trail System",
    country: "Outdoor",
    image:
      "https://images.unsplash.com/photo-1576692194458-ea3f97b227af?w=400&q=80",
  },
  {
    name: "Training Paddock",
    country: "Groundwork",
    image:
      "https://images.unsplash.com/photo-1541600593739-1d4c5177aae2?w=400&q=80",
  },
  {
    name: "Tack Room",
    country: "Equipment",
    image:
      "https://images.unsplash.com/photo-1682636109270-93cb7b720716?w=400&q=80",
  },
];
