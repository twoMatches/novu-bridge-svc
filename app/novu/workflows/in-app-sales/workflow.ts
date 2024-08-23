import { workflow } from "@novu/framework";
import { salesPayloadSchema } from "./schemas";

export const inAppSales = workflow(
  "in-app-sales-notification",
  async ({ step, payload }) => {
    await step.inApp("sales-notification", async () => {
      return {
        subject: payload.title,
        body: payload.description,
        coverImgSrc: payload.coverImgSrc,
        type: payload.type,
        id: payload.id,
      };
    });
  },
  {
    payloadSchema: salesPayloadSchema,
  }
);
