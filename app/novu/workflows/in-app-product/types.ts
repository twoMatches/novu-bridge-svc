import { z } from "zod";
import { productPayloadSchema } from "./schemas";

export type ProductPayloadSchema = z.infer<typeof productPayloadSchema>;
