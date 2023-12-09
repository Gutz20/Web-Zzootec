import { z } from "zod";

export enum Status {
  ACTIVO = "ACTIVO",
  INACTIVO = "INACTIVO",
}

export enum TypeProvider {
  PRODUCTS = "PRODUCTS",
  SERVICES = "SERVICES",
}

export const providerSchema = z.object({
  id: z.number().nullable(),
  contact: z.string(),
  identifierFiscal: z.string().nullable(),
  type: z.nativeEnum(TypeProvider),
  bankInformation: z.string().nullable(),
  paymentTerms: z.array(z.string()),
  status: z.nativeEnum(Status),
  notes: z.array(z.string()),
});

export type ProviderSchemaInfer = z.infer<typeof providerSchema>;
