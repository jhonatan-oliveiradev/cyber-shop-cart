import { Card } from "../../components/Card";
import { useNavigate } from "react-router-dom"

export function Home() {
  const navigate = useNavigate()

  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto">
        <h1 className="font-bold text-2xl mb-8 mt-10 text-center">Produtos em alta</h1>
        <Card />

        <div className="border-t-2 border-zinc-900 mt-10"></div>
          <div className="flex items-center justify-center my-4">
            <button
              className={`bg-cyan-500 my-3 p-2 px-3 font-medium
                          rounded-md hover:bg-cyan-600 transition-all`}
              onClick={() => navigate("/products")}
          >
            Confira mais ofertas!
          </button>
        </div>
     </main>
    </div>
  )
}