import { CategorySchemaInfer } from "@/models/category";
import axios from "./axios";

export const getCategoriesRequest = async (): Promise<CategorySchemaInfer[]> =>
  (await axios.get(`/api/v1/categories`)).data;

export const getCategoryRequest = async (id: number) =>
  (await axios.get(`/api/v1/categories/${id}`)).data;

export const createCategoryRequest = async (category: CategorySchemaInfer) =>
  await axios.post(`/api/v1/categories`, category);

export const updateCategoryRequest = async (
  id: number,
  category: CategorySchemaInfer
) => await axios.put(`/api/v1/categories/${id}`, category);

export const deleteCategoryRequest = (id: number) =>
  axios.delete(`/api/v1/categories/${id}`);
