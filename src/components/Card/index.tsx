import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

import { CartContext } from "../../contexts/CartContext";
import { ProductProps } from "../../interfaces/Product";
import { api } from "../../services/api";

export function Card() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products");
      setProducts(response.data);
    }

    getProducts();
  }, []);

  function handleAddItemToCart(product: ProductProps) {
    toast.success(`${product.title} adicionado ao carrinho.`, {
      style: {
        borderRadius: 10,
        backgroundColor: "#18181b",
        color: "#f3f3f3",
        border: `solid #181818`,
      },
    });
    addItemToCart(product);
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
      {products.slice(0, 10).map((product) => (
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
                currency: "BRL",
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
  );
}

// "https://images.samsung.com/is/image/samsung/br-odyssey-g7-c27g75t-lc27g75tqslxzd-frontblack-thumb-258468450"
