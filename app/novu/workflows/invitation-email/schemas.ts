import { z } from "zod";

export const invitationEmailPayloadSchema = z.object({
  preview: z.string(),
  title: z.string(),
  fullName: z.string(),
  body: z.string(),
  companyProfileSrc: z.string(),
  companyName: z.string(),
  invitationHref: z.string(),
});
