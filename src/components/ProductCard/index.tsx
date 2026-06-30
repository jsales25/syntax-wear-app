import { Link } from "@tanstack/react-router";
import type { Product } from "../../interfaces/product";
import { MdAddShoppingCart } from "react-icons/md";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import { formatCurrency } from "../../utils/format-currency";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useContext(CartContext);
  const productImage = product.images?.[0] ?? product.image ?? "";
  const productColor =
    product.colors?.[0] ?? product.color ?? "Sem cor definida";

  return (
    <div className="bg-white rounded-2xl shadow-md">
      <Link
        to="/products/$productId"
        params={{ productId: String(product.id) }}
      >
        <img
          className="w-full max-h-[400px] object-cover rounded-md mb-2"
          src={productImage}
          alt={product.name}
        />
      </Link>

      <div className="text-black rounded-2xl p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>

        <p>{productColor}</p>

        <div className="flex justify-between mt-2.5">
          <p className="font-bold">{formatCurrency(product.price)}</p>

          <button className="cursor-pointer" onClick={() => addToCart(product)}>
            <MdAddShoppingCart className="h-7 w-7" />
          </button>
        </div>
      </div>
    </div>
  );
};
