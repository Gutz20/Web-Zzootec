import { ProviderSchemaInfer } from "@/models/provider";
import axios from "./axios";

export const getSuppliersRequest = async (): Promise<ProviderSchemaInfer[]> =>
  (await axios.get(`/api/v1/suppliers`)).data;

export const getSupplierRequest = async (id: number) =>
  (await axios.get(`/api/v1/suppliers/${id}`)).data;

export const createSupplierRequest = (supplier: any) =>
  axios.post(`/api/v1/products`, supplier);

export const updateSupplierRequest = (id: number, supplier: any) =>
  axios.put(`/api/v1/products/${id}`, supplier);

export const deleteSupplierRequest = (id: number) =>
  axios.delete(`/api/v1/products/${id}`);
