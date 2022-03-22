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
  },
  {
    _id: uuid(),
    categoryName: "Web Development",
    description: "Web Development",
  },
  {
    _id: uuid(),
    categoryName: "ReactJs",
    description: "ReactJS",
  },
  {
    _id: uuid(),
    categoryName: "NodeJS",
    description: "NodeJS and backend",
  },
];
