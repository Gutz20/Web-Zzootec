import { z } from "zod";

export const formLoginSchema = z.object({
  username: z.string().min(3, { message: "El usuario debe ser mayor de 3" }),
  password: z.string().min(6, { message: "Minimo 6 digitos" }),
});

export type FormSchemaLogin = z.infer<typeof formLoginSchema>;

export const formDeliverySchema = z.object({
  user: z.string().min(3, { message: "El usuario debe ser mayor de 3" }),
  idPedido: z.number(),
  state: z.string(),
  ubication: z.string(),
  description: z.string(),
  date: z.date(),
});

export type FormSchemaDelivery = z.infer<typeof formDeliverySchema>;
