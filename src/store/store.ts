import { UserSchemaInfer } from "@/models/user";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  token: string;
  user: UserSchemaInfer;
  isAuth: boolean;
};

type Actions = {
  setToken: (token: string) => void;
  setUser: (user: UserSchemaInfer) => void;
  logout: () => void;
};

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: "",
      user: {
        username: "",
        password: "",
        email: "",
        roles: "INVITED",
      },
      isAuth: false,
      setToken: (token: string) =>
        set((_) => ({
          token,
          isAuth: true,
        })),
      setUser: (user: UserSchemaInfer) =>
        set((_) => ({
          user,
        })),
      logout: () =>
        set((_) => ({
          token: "",
          isAuth: false,
          user: {
            email: "",
            username: "",
            password: "",
            roles: "INVITED",
          },
        })),
    }),
    { name: "auth" }
  )
);
