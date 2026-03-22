import { createFileRoute } from "@tanstack/react-router";
import { ProductList } from "../../../components/ProductList";
import { products } from "../../../mocks/products";

export const Route = createFileRoute("/_app/products/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container pt-44 md:pt-54 pb-10 md:px-10 mb-10 text-black bg-surface">
      <h1 className=" text-3xl text-center mb-3">Lista de produtos</h1>

      <h2 className="text-center mb-10 p-4">Conforto expecional para suas aventuras do dia-a-dia</h2>

      <ProductList products={products} />
    </div>
  );
}
