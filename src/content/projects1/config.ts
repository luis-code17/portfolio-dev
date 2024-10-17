import { defineCollection, z } from "astro:content";

const projects1 = defineCollection({
  schema: z.object({
    id: z.number(),
    imgSrc: z.string(),
    title: z.string(),
    description: z.string(),
    projectPath: z.string(),
  })
});

export const collections = { projects1 };
