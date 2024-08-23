import { z } from "zod";

export const invitationPayloadSchema = z.object({
  title: z.string(),
  description: z.string(),
  coverImgSrc: z.string().optional(),
  type: z.union([z.literal("SELLER_INVITATION"), z.literal("BRAND_REQUEST")]),
  invitationId: z.string(),
});
