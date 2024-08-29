import { z } from "zod";
import { purchaseOrderPayloadSchema } from "./schemas";

export type PurchaseOrderPayloadSchema = z.infer<typeof purchaseOrderPayloadSchema>;
