import { z } from "zod";

export const userSchema = z.object({
  id: z.number().nullable(),
  firstName: z.string(),
  lastName: z.string(),
  contract: z.string(),
  genre: z.enum(["HOMBRE", "MUJER", "OTRO"]),
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
  roles: z.array(
    z.object({
      name: z.enum(["ADMIN", "USER", "INVITED"]),
    })
  ),
  creationDate: z.date().nullable(),
  departureDate: z.date().nullable(),
});

export type UserSchemaInfer = z.infer<typeof userSchema>;

// id: 1;
// email: "test@gmail.com";
// username: "test";
// password: "$2a$10$lxZ/HjxjL4ZlSsx3H96d2.DQTtrv/NANNCYLNb208XQf9Id85HqKG";
// roles: [{ id: 1, name: "USER" }];
// creationDate: "2023-11-10T05:34:33.070+00:00";
// branch: null;
