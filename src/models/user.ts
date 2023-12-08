import { z } from "zod";

export const userSchema = z.object({
  id: z.number().nullable(),
  firstName: z.string(),
  lastName: z.string(),
  contract: z.enum(["FULLTIME", "PARTTIME", "TEMPORARY"]),
  genre: z.enum([
    "HOMBRE",
    "MUJER",
    "FORASTERO",
    "NO_BINARIO",
    "TRANSFORMER",
    "TRABUCO",
    "OTRO",
  ]),
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
  roles: z.array(
    z.object({
      name: z.enum(["ADMIN", "USER", "INVITED"]),
    })
  ),
  branch: z.string(),
  address: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  creationDate: z.date().nullable(),
  departureDate: z.date().nullable(),
});

export type UserSchemaInfer = z.infer<typeof userSchema>;

export const userSchemaAuth = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
  roles: z.array(
    z.object({
      name: z.enum(["ADMIN", "USER", "INVITED"]),
    })
  ),
});

export type UserAuthSchemaInfer = z.infer<typeof userSchemaAuth>;
