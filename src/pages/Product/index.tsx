import { useContext, useEffect, useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { api } from "../../services/api";
import { useParams, useNavigate } from "react-router-dom";
import { ProductProps } from "../../interfaces/Product";
import { CartContext } from "../../contexts/CartContext";
import { toast } from "react-hot-toast";

export function Product() {
  const { id } = useParams()
  const [product, setProduct] = useState<ProductProps>()
  const { addItemToCart } = useContext(CartContext)
  const navigate = useNavigate()

  useEffect(() => {
    async function getProduct() {
      const response = await api.get(`/products/${id}`)
      setProduct(response.data)
    }

    getProduct()
  }, [id])

  function handleAddItem(product: ProductProps) {
    toast.success(`${product.title} adicionado ao carrinho.`, {
      style: {
        borderRadius: 10,
        backgroundColor: "#18181b",
        color: "#f3f3f3",
        border: `solid #181818`,
      }
    })
    
    addItemToCart(product)
    
    navigate("/cart")
  }

  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto my-6">
        {product && (
          <section className="w-full">
            <div className="flex flex-col lg:flex-row">
              <img
                className="flex-1 w-full max-h-72 object-contain"
                src={product.cover}
                alt={product.title}
              />
              <div className="flex-1">
                <h1 className="text-2xl font-medium mt-4 mb-2">{product.title}</h1>
                <p className="text-zinc-300">{product.description}</p>

                <div className="flex items-center justify-between w-full mt-6">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold">
                      {product.price?.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                    </span>
                    <span className="text-zinc-500 line-through">
                      {product.discountPrice?.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                    </span>
                  </div>
                  <button
                    className="bg-cyan-500 p-1 rounded hover:bg-cyan-600 transition-all"
                    onClick={() => handleAddItem(product)}
                  >
                    <BsCartPlus size={20} className="text-zinc-100 font-bold" />
                  </button>
                </div>
              </div>
            </div>
            </section>
        )}
        </main>
    </div>
  );
}
