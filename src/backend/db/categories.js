import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "All",
  },
  {
    _id: uuid(),
    categoryName: "Roleplay",
  },
  {
    _id: uuid(),
    categoryName: "Battle Royale",
  },
  {
    _id: uuid(),
    categoryName: "Adventure",
  },
  {
    _id: uuid(),
    categoryName: "FPS",
  },
];
