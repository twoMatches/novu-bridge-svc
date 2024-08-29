import { workflow } from "@novu/framework";
import { invitationPayloadSchema } from "./schemas";
// import { renderInvitationEmail } from "../../emails/invitation-email";

export const inAppInvitation = workflow(
  "invitation-workflow",
  async ({ step, payload }) => {
    await step.inApp("invitation-notification", async () => {
      return {
        subject: payload.title,
        body: payload.description,
        coverImgSrc: payload.coverImgSrc,
        ctaHref: payload.ctaHref,
      };
    });

    // await step.email("send-invitation-email", async () => {
    //   return {
    //     subject: payload.title,
    //     body: renderInvitationEmail(payload),
    //   };
    // });
  },
  {
    payloadSchema: invitationPayloadSchema,
  },
);
