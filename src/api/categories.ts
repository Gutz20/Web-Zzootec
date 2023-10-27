import axios from "./axios";

export const getCategoriesRequest = () => axios.get(`/api/v1/categories`);

export const getCategoryRequest = (id: number) =>
  axios.get(`/api/v1/categories/${id}`);

export const createCategoryRequest = (category: any) =>
  axios.post(`/api/v1/categories`, category);

export const updateCategoryRequest = (id: number, category: any) =>
  axios.put(`/api/v1/categories/${id}`, category);

export const deleteCategoryRequest = (id: number) =>
  axios.delete(`/api/v1/categories/${id}`);
