import { workflow } from "@novu/framework";
import { purchaseOrderPayloadSchema } from "./schemas";
import { renderPurchaseOrderEmail } from "../../emails/purchase-order-email";

export const inAppPurchaseOrder = workflow(
  "in-app-purchase-order-notification",
  async ({ step, payload }) => {
    await step.inApp("purchase-order-notification", async () => {
      return {
        subject: payload.title,
        body: payload.description,
        coverImgSrc: payload.coverImgSrc,
        type: payload.type,
        id: payload.id,
      };
    });

    await step.email("purchase-order-email", async () => {
      return {
        subject: payload.title,
        body: renderPurchaseOrderEmail(payload),
      };
    });
  },
  {
    payloadSchema: purchaseOrderPayloadSchema,
  }
);
