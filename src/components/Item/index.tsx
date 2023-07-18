import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export function Item() {
  const { cart, addItemToCart, decreaseItemFromCart } = useContext(CartContext);

  return (
    <>
      {cart.map((item) => (
        <section
          key={item.id}
          className="flex items-center justify-between border-b-2 border-zinc-800"
        >
          <img
            className="w-28 rounded-2xl p-2"
            src={item.cover}
            alt={item.title}
          />
          <strong>
            {item.price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}
          </strong>
          <div className="flex items-center justify-start">
             <div
            className="flex items-center justify-center gap-3"
          >
            <button
              className={`
                bg-cyan-500 rounded-md text-white
                flex items-center justify-center p-1
                font-bold hover:bg-cyan-600 transition-all
              `}
              onClick={() => decreaseItemFromCart(item)}
            >
              <AiOutlineMinus size={18} />
            </button>
            {item.amount}
            <button
              className={`
                bg-cyan-500 rounded-md text-white
                flex items-center justify-center p-1
                font-bold hover:bg-cyan-600 transition-all
              `}
              onClick={() => addItemToCart(item)}
            >
              <AiOutlinePlus size={18} />
            </button>
          </div>
         </div>
          <span
            className="float-right font-medium"
          >
            Subtotal ({item.amount} {item.amount > 1 ? "itens" : "item"}):
            <br />
            <strong
              className="float-right">
              {item.total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
              })}
            </strong>
          </span>
        </section>
      ))}
    </>
  )
}