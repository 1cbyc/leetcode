import { maximizeAreaOfSquareHoleInGrid } from "./maximize-area-of-square-hole-in-grid";
import { LeetCodePost, byPublishedAtDesc } from "./types";

const registry: LeetCodePost[] = [maximizeAreaOfSquareHoleInGrid];

export const getAllPosts = () => [...registry].sort(byPublishedAtDesc);

export const getPostBySlug = (slug: string) =>
  registry.find((post) => post.slug === slug);


