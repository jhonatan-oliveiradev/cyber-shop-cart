import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { useEffect, useState, useContext } from "react";
import { api } from "../../services/api";
import { ProductProps } from "../../interfaces/Product";
import { toast } from "react-hot-toast";
import { BsCartPlus } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { CarouselComponent } from "../../components/Carousel";

export function Products() {
  const [products, setProducts] = useState<ProductProps[]>([])
  const { cart } = useContext(CartContext);

  const { addItemToCart } = useContext(CartContext)

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products")
      setProducts(response.data)
    }

    getProducts()
  }, [])

  function handleAddItemToCart(product: ProductProps) {
    toast.success(`${product.title} adicionado ao carrinho.`, {
      style: {
        borderRadius: 10,
        backgroundColor: "#18181b",
        color: "#f3f3f3",
        border: `solid #181818`,
      }
    })

    addItemToCart(product)
  }

  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl mb-8 mt-10 text-center">Confira nossas ofertas!</h1>
        <form>
          <div className="flex items-center justify-center my-4">
            <input
              className="w-full max-w-sm px-4 py-3 mr-4 text-zinc-300 bg-zinc-800 rounded-lg focus:outline-none"
              type="text"
              placeholder="Pesquisar"
            />
            <button
              className="px-4 py-3 text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 focus:outline-none transition-all"
              type="button"
            >
              <FaSearch size={18} />
            </button>
          </div>
        </form>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <section
                    key={product.id}
                    className="w-full bg-zinc-900 rounded-xl shadow-xl px-4 py-3 flex flex-col justify-between"
                  >
                    <Link to={`/product/${product.id}`}>
                      <img
                        className="w-full rounded-lg max-g-70 mb-2"
                        src={product.cover}
                        alt={product.title}
                      />
                      <p className="font-medium mt-1 mb-2">{product.title}</p>
                    </Link>

                    <div className="mt-auto flex justify-between items-center">
                      <strong className="text-zinc-300">
                        {product.price.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL"
                        })}
                      </strong>
                      <button
                        className="bg-cyan-500 p-1 rounded hover:bg-cyan-600 transition-all"
                        onClick={() => handleAddItemToCart(product)}
                      >
                        <BsCartPlus size={20} className="text-zinc-100 font-bold" />
                      </button>
                    </div>
                  </section>
              ))}
            </div>
          </div>
          <aside className="lg:max-w-xs w-full px-4">
            <div className="flex flex-col items-center justify-center">
              {cart.length === 0 && (
                <div className="items-center justify-center">
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

              {cart.length > 0 && (
                <div className="flex flex-col items-center justify-center">
                  <p className="font-medium my-5">Você tem itens te esperando em seu carrinho.</p>
                  <Link
                    to="/cart"
                    className={`bg-cyan-500 my-3 p-2 px-3 font-medium
                              rounded-md hover:bg-cyan-600 transition-all`}
                  >
                    Ir para o carrinho
                  </Link>
                </div>
              )}

              <CarouselComponent />

              <form>
                <div className="flex flex-col gap-4 items-center justify-center my-4">
                  <h2>Inscreva-se em nossa Newsletter para receber ofertas exclusivas!</h2>
                  <input
                    className={`w-full py-3 pl-2 max-w-sm text-zinc-300 
                              bg-zinc-800 rounded-lg focus:outline-none`}
                    type="email"
                    placeholder="Digite seu e-mail"
                  />
                  <button
                    className={`py-3 text-white font-medium bg-cyan-500 rounded-lg 
                              hover:bg-cyan-600 focus:outline-none transition-all w-full`}
                    type="button"
                  >
                    Quero receber ofertas!
                  </button>
                </div>
              </form>
              
            </div>
          </aside>
        </div>
     </main>
    </div>
  )
}