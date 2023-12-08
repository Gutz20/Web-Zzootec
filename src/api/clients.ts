import { FormSchemaUser } from "@/types";
import axios from "./axios";
import { UserSchemaInfer } from "@/models";

export const getClientsRequest = async (): Promise<UserSchemaInfer[]> =>
  (await axios.get(`/api/v1/users/list`)).data;

export const getClientRequest = (id: number) =>
  axios.get(`/api/v1/users/${id}`);

export const createClientRequest = (user: FormSchemaUser) =>
  axios.post(`/api/v1/users`, user);

export const updateClientRequest = (id: number, user: FormSchemaUser) =>
  axios.put(`/api/v1/users/${id}`, user);

export const deleteClientRequest = (id: number) =>
  axios.delete(`/api/v1/users/${id}`);

export const deleteMultipleClientRequest = async (ids: number[]) =>
  axios.delete(`/api/v1/users/deleteMany`, { data: ids });
