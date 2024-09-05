import { z } from "zod";

export const catalogPayloadSchema = z.object({
  title: z.string(),
  description: z.string(),
  coverImgSrc: z.string().optional(),
  type: z.string().default("CATALOG"),
  ctaHref: z.string(),
});
