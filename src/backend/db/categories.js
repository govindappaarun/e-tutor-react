import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "JavaScript",
    description: "JavaScript",
    count: 75,
  },
  {
    _id: uuid(),
    categoryName: "CSS",
    description: "CSS & CSS3",
    count: 75,
  },
  {
    _id: uuid(),
    categoryName: "Web Development",
    description: "Web Development",
    count: 100,
  },
  {
    _id: uuid(),
    categoryName: "ReactJs",
    description: "ReactJS",
    count: 20,
  },
  {
    _id: uuid(),
    categoryName: "Backend",
    description: "NodeJS and backend",
    count: 50,
  },
  {
    _id: uuid(),
    categoryName: "Programming",
    description: "General Programming & CS fundamentals",
    count: 100,
  },
];
