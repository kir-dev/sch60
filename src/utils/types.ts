import { ReactNode } from "react";

export type ChildrenProp = { children?: ReactNode };

export type ThemeType = "light" | "dark";

export type EventType = {
  name: string;
  date: Date | string;
  location: string;
  description: string;
  image: string;
  link?: string;
};

export type TimelineEntity = {
  year: number;
  description: string;
};
