import { defineCollection, z } from "astro:content";

const products = defineCollection({
    schema: z.object({
        tittle: z.string(),
        description: z.string(),
        price: z.string(),
        image: z.string().url(),
        buy: z.string(),
    })
})

export const collections = { products }