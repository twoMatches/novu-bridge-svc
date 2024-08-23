import { workflow } from "@novu/framework";
import { productPayloadSchema } from "./schemas";

export const inAppProduct = workflow(
  "in-app-product-notification",
  async ({ step, payload }) => {
    await step.inApp("product-notification", async () => {
      return {
        subject: payload.title,
        body: payload.description,
        coverImgSrc: payload.coverImgSrc,
        type: payload.type,
        productId: payload.productId,
      };
    });
  },
  {
    payloadSchema: productPayloadSchema,
  }
);
