import { workflow } from "@novu/framework";
import { invitationEmailPayloadSchema } from "./schemas";
import { renderInvitationEmail } from "../../emails/invitation-email";

export const invitationEmail = workflow(
  "invitation-email",
  async ({ step, payload }) => {
    await step.email("send-email", async () => {
      return {
        subject: payload.title,
        body: renderInvitationEmail(payload),
      };
    });
  },
  { payloadSchema: invitationEmailPayloadSchema }
);
