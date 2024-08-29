import { z } from "zod";

export const purchaseOrderPayloadSchema = z.object({
  title: z.string(),
  description: z.string(),
  coverImgSrc: z.string().optional(),
  type: z.string().default("PURCHASE_ORDER"),
  id: z.string(),
  preview: z.string(),
  fullName: z.string(),
  body: z.string(),
  salesPersonName: z.string(),
  companyProfileSrc: z.string(),
  companyName: z.string(),
  purchaseOrderHref: z.string(),
});
