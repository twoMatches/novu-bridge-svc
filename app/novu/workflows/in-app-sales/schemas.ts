import { z } from "zod";

export const salesPayloadSchema = z.object({
  title: z.string(),
  description: z.string(),
  coverImgSrc: z.string().optional(),
  type: z.union([
    z.literal("INVOICE"),
    z.literal("PURCHASE_ORDER"),
    z.literal("AGREEMENT"),
  ]),
  id: z.string(),
  preview: z.string(),
  fullName: z.string(),
  body: z.string(),
  salesPersonName: z.string(),
  companyProfileSrc: z.string(),
  companyName: z.string(),
  href: z.string(),
});
