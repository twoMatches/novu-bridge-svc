import { z } from "zod";

export const invitationPayloadSchema = z.object({
  title: z.string(), // also used by the email template as a subject
  description: z.string(), // also used by the email template as a body
  coverImgSrc: z.string().optional(), // also used by the email template as an image
  type: z.union([z.literal("SELLER_INVITATION"), z.literal("SELLER_REQUEST")]),
  ctaHref: z.string(),
  fullName: z.string(), // used by the email template
  companyName: z.string(), // used by the email template
  invitationHref: z.string(), // used for redirecting from external email client
});
