import { z } from "zod";

export const productPayloadSchema = z.object({
  title: z.string(),
  description: z.string(),
  coverImgSrc: z.string().optional(),
  type: z.string().default("PRODUCT"),
  productId: z.string(),
});
