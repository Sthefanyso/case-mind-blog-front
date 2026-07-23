import { api } from "./api";

export async function getArticles() {
  const response = await api.get("/articles");
  return response.data;
}

export async function getArticleById(id: number) {
  const response = await api.get(`/articles/${id}`);
  return response.data;
}