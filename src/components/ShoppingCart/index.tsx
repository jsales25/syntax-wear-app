import IconCart from "@/assets/images/icon-cart.png";
import { useState, useContext } from "react";
import { formatCurrency } from "../../utils/format-currency";
import { CartContext } from "../../contexts/CartContext";

export const ShoppingCart = () => {
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);
  const { cart, removeFromCart, incrementInCart, decrementInCart } =
    useContext(CartContext);

  console.log("items no carrinho:", cart);

  return (
    <>
      <button
        className="cursor-pointer"
        onClick={() => setCartIsOpen(!cartIsOpen)}
      >
        <img src={IconCart} alt="Ícone carrinho de compras" />
      </button>

      {/* { Overlay } */}
      <div
        className={`${cartIsOpen ? "bg-black/70 visible" : "bg-transparent invisible"} fixed top-0 bottom-0 left-0 right-0`}
        onClick={() => setCartIsOpen(!cartIsOpen)}
      >
        {/* { Drawer } */}
        <div
          className={`${cartIsOpen ? "translate-x-0" : "translate-x-full"} absolute top-0 right-0 bottom-0 bg-white pt-6 transition-all duration-500 ease-in-out w-75 md:w-100`}
          onClick={(e) => e.stopPropagation()}
        >
          <header className="flex items-center justify-between px-5">
            <p className="text-2xl font-bold">Carrinho ({cart.length})</p>
            <button
              className="text-xl cursor-pointer"
              onClick={() => setCartIsOpen(!cartIsOpen)}
            >
              X
            </button>
          </header>

          <ul className="p-4 overflow-y-auto scrollbar-hide h-[calc(100%_-_140px)] flex flex-col gap-3">
            {cart.map((product) => (
              <li key={product.id} className="flex flex-col gap-1 pr-2">
                <button
                  className="self-end text-xs cursor-pointer"
                  onClick={() => removeFromCart(product.id)}
                >
                  X
                </button>

                <div className="flex gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-24 h-24 md:w-32 md:h-32"
                  />

                  <div className="flex flex-col items-start">
                    <p className="mb-1 text-sm">{product.name}</p>
                    <p className="mb-1 text-sm">
                      Quantidade: {product.quantity}
                    </p>

                    <p className="mb-3.5">
                      <span className="font-bold mr-1.5">
                        {formatCurrency(product.price)}
                      </span>{" "}
                      à vista
                    </p>

                    <div className="border flex gap-6 py-1 px-3">
                      <button
                        className="cursor-pointer"
                        onClick={() => decrementInCart(product)}
                      >
                        -
                      </button>
                      <p>{product.quantity}</p>
                      <button
                        className="cursor-pointer"
                        onClick={() => incrementInCart(product)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <footer className="absolute bottom-0 w-full h-[100px] p-4">
            <button className="w-full h-full bg-black text-white rounded-xs cursor-pointer hover:bg-gray-800">
              Fechar pedido
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};
