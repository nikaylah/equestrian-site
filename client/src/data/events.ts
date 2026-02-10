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
    date: "2026-02-16",
    dateLabel: "Feb 16 to 20",
    description: "Five days of groundwork and riding basics. We take our time. Good if you want a full week to just be around the horses.",
    image: "https://images.unsplash.com/photo-1748212549634-009209542e3a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Horsemanship",
    spotsLeft: 3,
    isFeatured: true,
  },
  {
    id: 2,
    title: "Beginner Riding Week",
    date: "2026-03-02",
    dateLabel: "Mar 2 to 6",
    description: "If you have never ridden before this is a good place to start. We spend the first couple days just getting comfortable.",
    image: "https://images.unsplash.com/photo-1621879174909-06769034c7fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Riding",
    spotsLeft: 5,
  },
  {
    id: 3,
    title: "Trail Experience",
    date: "2026-03-14",
    dateLabel: "Mar 14 to 15",
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
    description: "Groundwork and riding over five days. Small group. We don't rush.",
    image: "https://images.unsplash.com/photo-1576692192914-9abed71b3ef9?w=800&q=80",
    tag: "Horsemanship",
    spotsLeft: 6,
  },
  {
    id: 5,
    title: "Beginner Riding Week",
    date: "2026-04-20",
    dateLabel: "Apr 20 to 24",
    description: "For people who have not ridden before. We go at your pace.",
    image: "https://images.unsplash.com/photo-1682636109994-4f2bbee2fd72?w=800&q=80",
    tag: "Riding",
    spotsLeft: 6,
  },
  {
    id: 6,
    title: "Trail Experience",
    date: "2026-05-09",
    dateLabel: "May 9 to 10",
    description: "Spring trail riding. Works best if you have ridden a few times.",
    image: "https://images.unsplash.com/photo-1576692194458-ea3f97b227af?w=800&q=80",
    tag: "Trail",
    spotsLeft: 5,
  },
];
