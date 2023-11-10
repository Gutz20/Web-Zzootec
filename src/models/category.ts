import { z } from "zod";

export const categorySchema = z.object({
  id: z.number().nullable(),
  name: z.string(),
  creationDate: z.date().nullable(),
});

export type CategorySchemaInfer = z.infer<typeof categorySchema>;
