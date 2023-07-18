import { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { GiCyberEye } from "react-icons/gi"

export function Header() {
  const { cartAmount } = useContext(CartContext)

  return (
    <header className="bg-zinc-900 w-full px-1">
      <nav className="flex items-center justify-between w-full max-w-7xl h-16 mx-auto px-5">
        <Link className="flex items-center gap-2" to="/">
          <GiCyberEye size={28} className="text-cyan-500" />
          <span
            className="font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400"
          >
            Cyber Shop
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-4">
           <Link
            className="font-medium text-cyan-500 hover:text-cyan-400 transition-all"
            to="/"
          >
            Home
          </Link>
          <Link
            className="font-medium text-cyan-500 hover:text-cyan-400 transition-all"
            to="/products"
          >
            Produtos
          </Link>
          <Link className="font-medium text-cyan-500 hover:text-cyan-400 transition-all"
            to="/about"
          >
            Sobre
          </Link>
        </div>
        
        <Link className="relative" to="/cart">
          <FiShoppingCart size={24} className="text-cyan-400" />
          {cartAmount > 0 && (
            <span
              className={`text-zinc-100 -top-2 -right-3 absolute 
                          px-2.5 bg-red-400 rounded-full w-5
                          h-5 items-center justify-center flex text-sm font-bold`}
            >
              {cartAmount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  )
}