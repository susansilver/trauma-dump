import { defineCollection, z, reference } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    draft: z.boolean(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    campaign: z.string(),
    getRef: reference("campaignsList"),
    prev: z.string().optional(),
    next: z.string().optional(),
  }),
});

const players = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/players" }),
  schema: z.object({
    name: z.string(),
    campaigns: z.array(reference("campaignsList")),
    updatedOn: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
  }),
});

const gm = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/gm" }),
  schema: z.object({
    name: z.string(),
    campaigns: z.array(reference("campaignsList")),
    updatedOn: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
  }),
});

const type = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/type" }),
  schema: z.object({
    name: z.string(),
    campaigns: z.array(reference("campaignsList")),
    updatedOn: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
  }),
});

const campaignsList = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/campaignsList" }),
  schema: z.object({
    title: z.string(),
    players: z.array(z.string()),
    dm: z.string(),
    order: z.number(),
    series: z.string().optional(),
    type: z.string(),
    date: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val))
      .optional(),
  }),
});

export const collections = { blog, players, gm, type, campaignsList };
