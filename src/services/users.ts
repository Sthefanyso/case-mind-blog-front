import { api } from "./api";

export async function getUsers() {
  const response = await api.get("/users");
  return response.data;
}

export async function getUserById(id: number) {
  const response = await api.get(`/users/${id}`);
  return response.data;
}