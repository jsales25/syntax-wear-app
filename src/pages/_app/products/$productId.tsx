import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "../../../mocks/products";
import { formatCurrency } from "../../../utils/format-currency";
import { CartContext } from "../../../contexts/CartContext";
import { useContext } from "react";
import { CEPForm } from "../../../components/CEPForm";

export const Route = createFileRoute("/_app/products/$productId")({
  component: RouteComponent,
});

function RouteComponent() {
  
  const { addToCart } = useContext(CartContext)

  const { productId } = Route.useParams();

  const filteredProduct = products.find(
    (product) => product.id === Number(productId)
  );

  if(!filteredProduct) return;

  const originalPrice = filteredProduct?.price ?? 0;

  // 1.0 = 100% do valor
  // 0.9 = 90% do valor
  const discountPrice = originalPrice * 0.9;

  // preço parcelado
  const inInstallmentsPrice = originalPrice / 6;

  return (
    <section className="container mb-10 pt-44 md:pt-54 pb-10 md:px-10">
      <nav className="text-black text-sm mb-15 ml-5">
        <Link to="/">Home</Link> / <Link to="/products">Produtos</Link> /{" "}
        <span className="font-semibold">{filteredProduct?.name}</span>
      </nav>

      <div className="flex justify-center gap-10">
        <img
          src={filteredProduct?.image}
          alt={filteredProduct?.name}
          className="w-[500px] bg-white rounded-2xl"
        />

        <div className="text-black">
          <h1 className="text-4xl font-bold mb-1">{filteredProduct?.name}</h1>

          <p className="mb-2">Cor: {filteredProduct?.color}</p>

          <p className="line-through text-sm text-[#878787]">
            {formatCurrency(originalPrice)}
          </p>

          <p className="text-3xl font-bold mb-2">
            {formatCurrency(discountPrice)} no PIX
          </p>

          <p className="text-sm text-[#878787]">
            Você economiza: <span className="font-semibold">10%</span>
          </p>

          <p className="mb-2">
            ou <span className="text-[#38373A] font-semibold">6X</span> de{" "}
            <span className="text-[#38373A] font-semibold">
              {formatCurrency(inInstallmentsPrice)}
            </span>
          </p>

          <p className="max-w-[500px] my-5">{filteredProduct?.description}</p>

          <div className="mb-6">
            <p className="text-sm">Calcular o prazo de entrega</p>

           <CEPForm />
          </div>

          <button className="bg-black text-white rounded-md p-5 w-full cursor-pointer hover:bg-gray-800" onClick={() => addToCart(filteredProduct)}>Adicionar ao carrinho</button>
        </div>
      </div>
    </section>
  );
}
