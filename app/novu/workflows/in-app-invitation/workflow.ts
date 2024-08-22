import { workflow } from "@novu/framework";
import { invitationPayloadSchema } from "./schemas";

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
  },
  {
    payloadSchema: invitationPayloadSchema,
  }
);
