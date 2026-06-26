import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: ['**/*.md', '**/*.mdx'], base: './src/content/posts' }),
  schema: z.object({
    number: z.string().regex(/^\d{4}$/),
    title: z.string(),
    excerpt: z.string(),
    cover: z.string().optional(),
    category: z.string(),
    series: z.string(),
    tags: z.array(z.string()),
    publishedAt: z.coerce.date(),
    draft: z.boolean().default(false)
  })
});

const series = defineCollection({
  loader: glob({ pattern: ['**/*.json'], base: './src/content/series' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    cover: z.string().optional()
  })
});

export const collections = { blog, series };
