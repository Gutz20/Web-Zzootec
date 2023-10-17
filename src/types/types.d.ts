import { z } from "zod";

export const formLoginSchema = z.object({
  username: z.string().min(3, { message: "El usuario debe ser mayor de 3" }),
  password: z.string().min(6, { message: "Minimo 6 digitos" }),
});

export type FormSchemaLogin = z.infer<typeof formLoginSchema>;

export const formDeliverySchema = z.object({
  username: z.string().min(3, { message: "El usuario debe ser mayor de 3" }),
  state: z.string(),
  description: z.string(),
  idPedido: z.number(),
  ubication: z.string(),
  date: z.date(),
});

export type FormSchemaDelivery = z.infer<typeof formDeliverySchema>;
