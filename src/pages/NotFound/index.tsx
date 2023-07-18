import { Link } from "react-router-dom";
import notFoundImg from "../../assets/404.webp";

export function NotFound() {
  return (
    <div className="flex items-center justify-center flex-col w-full max-w-7xl mx-auto">
      <img src={notFoundImg} alt="" className="w-96" />
      <h1 className="font-bold text-3xl text-center mt-10">Página não encontrada...</h1>
      <div className="flex flex-col items-center justify-center mt-10">
        <Link
          to="/"
          className={`bg-cyan-500 my-3 p-2 px-3 font-medium
                      rounded-md hover:bg-cyan-600 transition-all`}
        >
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  )
}