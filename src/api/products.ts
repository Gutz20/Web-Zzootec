import { ProductSchemaInfer } from "@/models/product";
import axios from "./axios";

export const getProductsRequest = async (): Promise<ProductSchemaInfer[]> =>
  (await axios.get(`/api/v1/products`)).data;

export const getProductRequest = async (id: number) =>
  (await axios.get(`/api/v1/products/${id}`)).data;

export const createProductRequest = (product: ProductSchemaInfer) =>
  axios.post(`/api/v1/products`, product);

export const updateProductRequest = (id: number, product: ProductSchemaInfer) =>
  axios.put(`/api/v1/products/${id}`, product);

export const deleteProductRequest = (id: number) =>
  axios.delete(`/api/v1/products/${id}`);

export const deleteMultipleProductRequest = async (ids: number[]) =>
  await axios.delete(`/api/v1/products/deleteMany`, { data: ids });
