import type { LucideIcon } from "lucide-react";

export type BriefSection = {
  id: string;
  label: string;
  title: string;
  eyebrow?: string;
  content?: string[];
};

export type Deliverable = {
  id: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  requirements: string[];
  formatNote?: string;
};

export type RubricCriterion = {
  id: string;
  name: string;
  weight: number;
  excellent: string;
  good: string;
  acceptable: string;
  insufficient: string;
};

export type Recommendation = {
  id: string;
  text: string;
};

export type GradeScale = {
  level: string;
  range: string;
  description: string;
};
