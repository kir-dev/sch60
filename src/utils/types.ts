import { ReactNode } from "react";

export type ChildrenProp = { children?: ReactNode };

export type ThemeType = "light" | "dark";

export type EventType = {
  name: string;
  date: Date;
  location: string;
  description: string;
  image: string;
};
