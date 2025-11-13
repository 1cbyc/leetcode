import { ReactElement } from "react";

export type Difficulty = "Easy" | "Medium" | "Hard";

export type SolutionPath = {
  label: string;
  language: string;
  path: string;
};

export interface LeetCodePost {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  difficulty: Difficulty;
  languages: string[];
  tags: string[];
  leetCodeLink?: string;
  solutionPaths: SolutionPath[];
  estimatedReadingMinutes?: number;
  body: () => ReactElement;
}

export const byPublishedAtDesc = (a: LeetCodePost, b: LeetCodePost) =>
  new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();


