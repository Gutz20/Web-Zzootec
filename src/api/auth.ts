import { FormSchemaLogin } from "@/types";
import axios from "./axios";

export const loginRequest = (user: FormSchemaLogin) => axios.post(`/api/v1/auth`, user);

export const getCurrentUserRequest = () => axios.get(`/api/v1/users/userInfo`);

export const registerRequest = (user: any) =>
  axios.post(`/api/v1/users/create`, user);

export const recoveryPasswordRequest = () =>
  axios.post(`/api/v1/users/recoveryPassword`);
