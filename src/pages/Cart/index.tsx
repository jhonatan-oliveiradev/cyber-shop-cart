import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Item } from "../../components/Item";
import { Loader } from "../../components/Loader";
import { CartContext } from "../../contexts/CartContext";

export function Cart() {
  const { cart, total, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  function handleClearCart() {
    clearCart();
    navigate("/checkout");
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="font-medium text-2xl text-center my-4">
        Carrinho de compras
      </h1>
      {cart.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <p className="font-medium my-5">Seu carrinho está vazio...</p>
          <Link
            to="/"
            className={`bg-cyan-500 my-3 p-2 px-3 font-medium
                        rounded-md hover:bg-cyan-600 transition-all`}
          >
            Escolha um produto
          </Link>
        </div>
      )}

      {cart.length !== 0 && (
        <div>
          <div className="border-b-2 border-zinc-800">
            <div className="flex items-center justify-between my-6">
              <p className="font-medium text-xl">Produto</p>
              <p className="font-medium text-xl">Preço</p>
              <p className="font-medium text-xl">Quantidade</p>
              <p className="font-medium text-xl">Subtotal</p>
            </div>
          </div>
        </div>
      )}

      <Item />
      {cart.length !== 0 && (
        <div className="mt-4 float-right">
          <p className="font-medium text-lg mb-8">
            Total: <strong>{total}</strong>
          </p>
          <button
            className="bg-cyan-500 p-2 rounded-md font-medium hover:bg-cyan-600 transition-all w-full"
            onClick={() => handleClearCart()}
          >
            Fechar pedido
          </button>
        </div>
      )}
    </div>
  );
}
