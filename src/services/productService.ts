import type { Product } from "../interfaces/product";

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";
const DEFAULT_LIMIT = 3;

interface GetProductParams {
  page: number;
  limit?: number;
}

interface ProductResponse {
  data: Product[];
  total: number;
  page: number;
  limit: number;
}

export async function getProducts({
  page,
  limit = DEFAULT_LIMIT,
}: GetProductParams): Promise<ProductResponse> {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });

  const url = `${API_BASE_URL}/products?${params.toString()}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro ao buscar produtos: ${response.statusText}`);
    }

    const data = await response.json();

    if (Array.isArray(data)) {
      return {
        data: data as Product[],
        total: data.length,
        page,
        limit,
      };
    }

    return data as ProductResponse;
  } catch (error) {
    console.error("Erro ao buscar produtos do backend:", error);
    throw error;
  }
}

export async function getProductByCategoryId(
  categoryId: number,
  paginationParams?: GetProductParams,
): Promise<ProductResponse> {
  const params = new URLSearchParams({
    page: paginationParams?.page.toString() || "1",
    limit: (paginationParams?.limit || DEFAULT_LIMIT).toString(),
    categoryId: categoryId.toString(),
  });

  try {
    const response = await fetch(
      `${API_BASE_URL}/products?${params.toString()}`,
    );

    if (!response.ok) {
      throw new Error(
        `Erro ao buscar produtos por categoria: ${response.statusText}`,
      );
    }

    const data = await response.json();

    if (Array.isArray(data)) {
      return {
        data: data as Product[],
        total: data.length,
        page: paginationParams?.page ?? 1,
        limit: paginationParams?.limit ?? DEFAULT_LIMIT,
      };
    }

    return data as ProductResponse;
  } catch (error) {
    console.error("Erro ao buscar produtos por categoria do backend:", error);
    throw error;
  }
}
