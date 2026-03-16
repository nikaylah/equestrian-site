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
    description: "You spend the week at the barn with us. We cover groundwork and riding basics but there is no rush. Most of the time you are just being with the horses.",
    image: "https://images.unsplash.com/photo-1586424222752-5f87e73aaf5c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    buttonText: "Join This Experience",
    buttonLink: "/experiences",
  },
  {
    id: 2,
    title: "Beginner Riding Week",
    description: "If you have never ridden before this is a good place to start. We spend the first couple days just getting comfortable around horses.",
    image: "https://images.unsplash.com/photo-1664461247469-6890483f4531?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    buttonText: "Join This Experience",
    buttonLink: "/experiences",
  },
  {
    id: 3,
    title: "Trail Experience",
    description: "Two days on horseback out on the trails. This one works best if you have ridden a few times before.",
    image: "https://images.unsplash.com/photo-1698076019037-07ce5f9cc59f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    buttonText: "Join This Experience",
    buttonLink: "/experiences",
  },
];

export const kidsTeensExperiences: HorseExperience[] = [
  {
    id: 4,
    title: "Kids Lessons",
    description: "These are seasonal lessons for kids. We are still working out exactly how they will run but you can sign up to hear when they are ready.",
    image: "https://images.unsplash.com/photo-1597691603190-71981b02a79c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    buttonText: "Get Notified",
    buttonLink: "/contact",
    isComingSoon: true,
  },
  {
    id: 5,
    title: "Teen Riding",
    description: "A program for teenagers who want to learn how to ride. Still working on this one.",
    image: "https://images.unsplash.com/photo-1654693519854-175cee0fa7d6?w=800&q=80",
    buttonText: "Get Notified",
    buttonLink: "/contact",
    isComingSoon: true,
  },
  {
    id: 6,
    title: "Summer Week",
    description: "A weeklong summer program. More details coming later this year.",
    image: "https://images.unsplash.com/photo-1653300027549-2ee8d50cd7ec?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    buttonText: "Get Notified",
    buttonLink: "/contact",
    isComingSoon: true,
  },
];
