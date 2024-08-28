import { z } from "zod";
import { invitationEmailPayloadSchema } from "./schemas";

export type InvitationEmailPayloadSchema = z.infer<
  typeof invitationEmailPayloadSchema
>;
