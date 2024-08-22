import { z } from "zod";

export const invitationPayloadSchema = z.object({
  title: z.string(),
  description: z.string(),
  coverImgSrc: z.string().optional(),
  type: z.string().default("INVITATION"),
  invitationId: z.string(),
});
