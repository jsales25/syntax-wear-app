import { notFound } from "@tanstack/react-router";

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

export async function getCategoryByName(name: string) {
  const params = new URLSearchParams({ page: "1", limit: "1", search: name });

  const response = await fetch(
    `${API_BASE_URL}/categories?${params.toString()}`,
  );

  if (!response.ok) {
    throw notFound();
  }

  const result = await response.json();

  if (!result.data || result.data.length === 0) {
    throw notFound();
  }

  return result.data[0];
}
