import { workflow } from "@novu/framework";
import { invitationPayloadSchema } from "./schemas";
import { renderInvitationEmail } from "../../emails/invitation-email";

export const inAppInvitation = workflow(
  "in-app-invitation-notification",
  async ({ step, payload }) => {
    await step.inApp("invitation-notification", async () => {
      return {
        subject: payload.title,
        body: payload.description,
        coverImgSrc: payload.coverImgSrc,
        type: payload.type,
        invitationId: payload.invitationId,
      };
    });

    await step.email("send-invitation-email", async () => {
      return {
        subject: payload.title,
        body: renderInvitationEmail(payload),
      };
    });
  },
  {
    payloadSchema: invitationPayloadSchema,
  }
);
