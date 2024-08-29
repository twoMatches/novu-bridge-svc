import { z } from "zod";
import { invitationPayloadSchema } from "./schemas";

export type InvitationPayloadSchema = z.infer<typeof invitationPayloadSchema>;
