import { defineCollection, z } from "astro:content";

const projectsJava = defineCollection({
  schema: z.object({
    url: z.string(),
    title: z.string(),
    description: z.string(),
    github: z.string(),
  })
});

export const collections = { projectsJava };
