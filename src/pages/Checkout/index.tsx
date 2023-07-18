import { Link } from "react-router-dom";
import vectorImg from "../../assets/vector.webp"

export function Checkout() {
  return (
    <div className="flex items-center justify-center flex-col w-full max-w-7xl mx-auto">
      <img src={vectorImg} alt="" className="w-96 transform scale-x-[-1]" />
      <h1 className="font-bold text-4xl text-center mt-10">Pedido finalizado</h1>
      <div className="flex flex-col items-center justify-center">
        <p className="font-medium my-10">Obrigado pela compra!</p>
        <Link
          to="/products"
          className={`bg-cyan-500 my-3 p-2 px-3 font-medium
                      rounded-md hover:bg-cyan-600 transition-all`}
        >
          Continuar comprando
        </Link>
      </div>
    </div>
  )
}