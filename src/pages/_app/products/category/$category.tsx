import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductList } from "../../../../components/ProductList";
import { getProductByCategoryId } from "../../../../services/productService";
import { getCategoryByName } from "../../../../services/categoryService";
import { useEffect, useRef, useState } from "react";
import type { Product } from "../../../../interfaces/product";

export const Route = createFileRoute("/_app/products/category/$category")({
  loader: async ({ params }) => {
    const category = await getCategoryByName(params.category);
    return { category };
  },
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Produtos - SyntaxWear" }],
  }),
  notFoundComponent: () => (
    <section className="container pt-44 text-center text-black min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Categoria não encontrada</h1>
      <Link to="/products" className="underline">
        Voltar para produtos
      </Link>
    </section>
  ),
});

function RouteComponent() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const { category } = Route.useLoaderData();

  const hasFetchedInitialProducts = useRef(false);

  useEffect(() => {
    if (hasFetchedInitialProducts.current) return;
    hasFetchedInitialProducts.current = true;

    loadMore();
  }, []);

  async function loadMore() {
    if (loading || !hasMore) return;

    setLoading(true);

    try {

      const filteredProducts = await getProductByCategoryId(category.id, {page})

      setProducts((prev) => [...prev, ...filteredProducts.data]);

      if (filteredProducts.data.length < filteredProducts.limit) {
        setHasMore(false);
      } else {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="container pt-44 md:pt-54 pb-10 md:px-10 mb-10 text-black min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className=" text-3xl text-center mb-3">Lista de produtos</h1>

      <h2 className="text-center mb-10 p-4">
        Conforto expecional para suas aventuras do dia-a-dia
      </h2>

      {loading && products.length === 0 ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#212A2F]"></div>
        </div>
      ) : products.length === 0 ? (
        <>
          <p className="text-center">
            Nenhum produto encontrado para esta categoria.
          </p>
          <Link
            to="/products"
            className="text-accent hover:text-accent-hover underline"
          >
            Voltar para produtos
          </Link>
        </>
      ) : (
        <>
          <ProductList products={products} />

          {hasMore && (
            <button
              className="bg-[#212A2F] py-3.5 px-7 rounded-xl cursor-pointer mx-auto text-white disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={loadMore}
              disabled={loading}
            >
              {loading ? "Carregando..." : "Carregar mais"}
            </button>
          )}
        </>
      )}
    </section>
  );
}
