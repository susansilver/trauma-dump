import { defineCollection, z, reference } from "astro:content";

const blog = defineCollection({
  type: "content",
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
  type: "content",
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
  type: "content",
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
  type: "content",
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
  type: "data",
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
