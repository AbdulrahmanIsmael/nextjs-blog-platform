import { T_filters, T_tags } from "@/types/constants-types";

export const notAuthenticatedNavLinks = [
  { id: 1, title: "Contact", href: "/contact" },
  { id: 2, title: "About", href: "/about" },
];

export const tags: T_tags = [
  {
    id: 1,
    title: "Technology",
    color: "bg-linear-to-r from-primary/50 to-secondary/50",
    priority: "highest",
  },
  {
    id: 2,
    title: "Algorithms & Data Structures",
    color: "bg-linear-to-r from-secondary/50 to-primary/50",
    priority: "high",
  },
  {
    id: 3,
    title: "Programming",
    color: "bg-linear-to-r from-primary/50 to-secondary/50",
    priority: "high",
  },
  {
    id: 4,
    title: "Insights",
    color: "bg-linear-to-r from-secondary/50 to-primary/50",
    priority: "medium",
  },
  {
    id: 5,
    title: "Tutorials",
    color: "bg-linear-to-r from-primary/50 to-secondary/50",
    priority: "lowest",
  },
  {
    id: 6,
    title: "Best Practices",
    color: "bg-linear-to-r from-secondary/50 to-primary/50",
    priority: "high",
  },
  {
    id: 7,
    title: "Career",
    color: "bg-linear-to-r from-primary/50 to-secondary/50",
    priority: "highest",
  },
  {
    id: 8,
    title: "Performance",
    color: "bg-linear-to-r from-secondary/50 to-primary/50",
    priority: "medium",
  },
  {
    id: 9,
    title: "System Design",
    color: "bg-linear-to-r from-primary/50 to-secondary/50",
    priority: "medium",
  },
  {
    id: 10,
    title: "Innovation",
    color: "bg-linear-to-r from-secondary/50 to-primary/50",
    priority: "lowest",
  },
  {
    id: 11,
    title: "Productivity",
    color: "bg-linear-to-r from-primary/50 to-secondary/50",
    priority: "high",
  },
  {
    id: 12,
    title: "Artificial Intelligence",
    color: "bg-linear-to-r from-secondary/50 to-primary/50",
    priority: "highest",
  },
];

export const customArticles = [
  {
    id: 1,
    thumbnail: "/assets/images/showcase.png",
    title: "this is the heading of the article 1",
    description:
      "This is a description for the article and should be a little bit longer than the title",
    path: "/",
    categories: ["Technology", "Artificial Intelligence", "Innovation"],
  },
  {
    id: 2,
    thumbnail: "/assets/images/showcase.png",
    title: "this is the heading of the article 2",
    description:
      "This is a description for the article and should be a little bit longer than the title",
    path: "/",
    categories: ["Technology", "Artificial Intelligence", "Innovation"],
  },
  {
    id: 3,
    thumbnail: "/assets/images/showcase.png",
    title: "this is the heading of the article 3",
    description:
      "This is a description for the article and should be a little bit longer than the title",
    path: "/",
    categories: ["Technology", "Artificial Intelligence", "Innovation"],
  },
];

export const filters: T_filters = [
  { id: 1, title: "Most Recent" },
  { id: 2, title: "Trending" },
  { id: 3, title: "Most Popular" },
];
