import type { LucideIcon } from "lucide-react";

export type CurriculumItem = {
  id: string;
  title: string;
  description: string;
  points: readonly string[];
  icon: LucideIcon;
};

export type BenefitItem = {
  id: string;
  title: string;
  description?: string;
  icon: LucideIcon;
};

export type ScheduleItem = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type LearningStep = {
  id: string;
  title: string;
  description: string;
};

export type MotivationItem = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ExpenseItem = {
  id: string;
  title: string;
  icon: LucideIcon;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};
