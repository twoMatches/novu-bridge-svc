import { workflow } from "@novu/framework";
import { catalogPayloadSchema } from './schemas';

export const inAppCatalog = workflow(
  "in-app-catalog-notification",
  async ({ step, payload }) => {
    await step.inApp("catalog-notification", async () => {
      return {
        subject: payload.title,
        body: payload.description,
        coverImgSrc: payload.coverImgSrc,
        type: payload.type,
        catalogId: payload.catalogId,
      };
    });
  },
  {
    payloadSchema: catalogPayloadSchema,
  }
);
