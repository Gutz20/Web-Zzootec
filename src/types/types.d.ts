import { categorySchema } from "@/models";
import { providerSchema } from "@/models/provider";
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

export const formSucursalSchema = z.object({
  idLocal: z.string(),
  names: z.string(),
  address: z.string(),
  phone: z.string(),
  zone: z.string(),
  admin: z.string(),
  search: z.string(),
});

export type FormSchemaSucursal = z.infer<typeof formSucursalSchema>;

export const formProvidersSchema = z.object({
  id: z.string(),
  names: z.string(),
  address: z.string(),
  phone: z.string(),
  rubro: z.string(), // TODO cambiar al ingles
  responsable: z.string(),
  product: z.string(),
});

export type FormSchemaProviders = z.infer<typeof formProvidersSchema>;

export const formCategorySchema = z.object({
  // id: z.number().optional(),
  name: z.string(),
  // creation_date: z.date().nullable(),
});

export type FormSchemaCategory = z.infer<typeof formCategorySchema>;

export const formUserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
  roles: z.array(z.enum(["ADMIN", "USER", "INVITED"])),
  contract: z.enum(["", "FULLTIME", "PARTTIME", "TEMPORARY"]),
  genre: z.enum([
    "HOMBRE",
    "MUJER",
    "FORASTERO",
    "NO_BINARIO",
    "TRANSFORMER",
    "TRABUCO",
    "OTRO",
    "",
  ]),
});

export type FormSchemaUser = z.infer<typeof formUserSchema>;

export const formProductSchema = z.object({
  id: z.number().nullable(),
  name: z.string(),
  image: z.string(),
  price: z.number(),
  stock: z.number(),
  category: z.union([categorySchema, z.string()]),
  supplier: providerSchema,
});

export type FormSchemaProduct = z.infer<typeof formProductSchema>;
