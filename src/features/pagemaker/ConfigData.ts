import { Item } from "./ui/Configuration";

export const config: Item[] = [
  {
    name: "Navigation",
    definition: "Multiple ways to configure your navigation",
    type: "navigation",
  },
  {
    name: "Header",
    definition: "Choose minimal, or set a cover image",
    type: "header",
  },
  {
    name: "Card or list",
    definition: "Different use case requires different view",
    type: "cartOrList",
  },
  {
    name: "Sidebar",
    definition: "Configure the items or go full width",
    type: "sidebar",
  },
  {
    name: "Dark theme",
    definition: "Set your own custom color theme",
    type: "dark",
  },
  {
    name: "Reaction or emoji",
    definition: "Choose your own reaction type",
    type: "reactOrEmoji",
  },
];
