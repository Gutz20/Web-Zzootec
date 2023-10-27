import { z } from "zod";

export const userSchema = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
  roles: z.enum(["ADMIN", "USER", "INVITED"]),
});

export type UserSchemaInfer = z.infer<typeof userSchema>;
