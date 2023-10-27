import axios from "./axios";

export const getProductsRequest = () => axios.get(`/api/v1/products`);

export const getProductRequest = (id: number) =>
  axios.get(`/api/v1/products/${id}`);

export const createProductRequest = (product: any) =>
  axios.post(`/api/v1/products`, product);

export const updateProductRequest = (id: number, product: any) =>
  axios.put(`/api/v1/products/${id}`, product);

export const deleteProductRequest = (id: number) =>
  axios.delete(`/api/v1/products/${id}`);
