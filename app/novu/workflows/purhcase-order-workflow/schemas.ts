import { z } from "zod";

export const purchaseOrderPayloadSchema = z.object({
  title: z.string(),
  description: z.string(),
  ctaHref: z.string(),
  type: z.literal("PURCHASE_ORDER"),
  coverImgSrc: z.string().optional(),
});
