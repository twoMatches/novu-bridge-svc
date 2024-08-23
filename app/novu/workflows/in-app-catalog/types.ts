import { z } from "zod";
import { catalogPayloadSchema } from "./schemas";

export type CatalogPayloadSchema = z.infer<typeof catalogPayloadSchema>;
