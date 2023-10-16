import { z } from "zod";

export const formValidationSchema = z.object({
  username: z.string().min(3, { message: "El usuario debe ser mayor de 3" }),
  password: z.string().min(6, { message: "Minimo 6 digitos" }),
});

export type FormSchema = z.infer<typeof formValidationSchema>;
