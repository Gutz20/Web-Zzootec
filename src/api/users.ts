import axios from "./axios";

export const getUsersRequest = () => axios.get(`/api/v1/users/list`);

export const getUserRequest = (id: number) => axios.get(`/api/v1/users/${id}`);

export const updateUserRequest = (id: number, user: any) =>
  axios.put(`/api/v1/users/${id}`, user);

export const deleteUserRequest = (id: number) =>
  axios.delete(`/api/v1/users/${id}`);
