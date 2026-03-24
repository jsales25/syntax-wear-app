import IconCart from "@/assets/images/icon-cart.png";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

interface CardButtonProps {
    onClick?: () => void;
}

export const CartButton = ({ onClick }: CardButtonProps) => {
  const { cart } = useContext(CartContext);

  return (
    <button
      className="relative cursor-pointer flex items-center"
      onClick={onClick}
    >
      <img src={IconCart} alt="Ícone carrinho de compras" />
      {cart.length > 0 && (
        <span className="absolute -top-3 -right-2 bg-error text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {cart.length}
        </span>
      )}
    </button>
  );
};
