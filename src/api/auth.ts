import { FormSchemaLogin } from "@/types";
import axios from "./axios";

export const loginRequest = async (user: FormSchemaLogin) =>
  await axios.post(`/api/v1/auth`, user);

// export const loginRequestV2 = async (user: FormSchemaLogin) => {
//   const responseToken = await axios.post(`/api/v1/auth`, user);
//   const token = responseToken.data.token;

//   const responseUserInfo = await axios.get(`/api/v1/users/userInfo`);
//   const userInfo = responseUserInfo.data;

//   const allResponse = {
//     token,
//     userInfo,
//   };
//   return allResponse;
// };

export const getCurrentUserRequest = async () =>
  await axios.get(`/api/v1/users/userInfo`);

export const registerRequest = (user: any) =>
  axios.post(`/api/v1/users/create`, user);

export const recoveryPasswordRequest = () =>
  axios.post(`/api/v1/users/recoveryPassword`);
