import { z } from "zod";
import { salesPayloadSchema } from "./schemas";

export type SalesPayloadSchema = z.infer<typeof salesPayloadSchema>;
