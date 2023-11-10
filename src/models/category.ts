import { z } from "zod";

export const categorySchema = z.object({
  id: z.number().nullable(),
  name: z.string(),
  creation_date: z.date().nullable(),
});

export type CategorySchemaInfer = z.infer<typeof categorySchema>;
