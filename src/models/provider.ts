import { z } from "zod";

export const providerSchema = z.object({
  id: z.number().nullable(),
  contact: z.string(),
  identifierFiscal: z.string(),
  type: z.enum(["PRODUCTS", "SERVICES"]),
  bankInformation: z.string(),
  paymentTerms: z.array(z.string()),
  status: z.enum(["ACTIVO", "INACTIVO"]),
  notes: z.array(z.string()),
});

export type ProviderSchemaInfer = z.infer<typeof providerSchema>;
