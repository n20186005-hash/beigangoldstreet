import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const attractions = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/attractions" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    categoryLabel: z.string(),
    address: z.string(),
    admission: z.string(),
    openingHours: z.string(),
    recommendedDuration: z.string(),
    walkMinutesFromChaotianTemple: z.number(),
    toilet: z.enum(["有", "附近", "未確認"]),
    accessibility: z.enum(["良好", "部分", "未確認"]),
    accessibilityNote: z.string(),
    status: z.enum(["open", "limited", "temporarily-closed", "construction", "seasonal", "unknown"]),
    featured: z.boolean().default(false),
    sourceName: z.string(),
    sourceUrl: z.url(),
    officialUrl: z.url().optional(),
    mapQuery: z.string(),
    order: z.number(),
  }),
});

export const collections = { attractions };
