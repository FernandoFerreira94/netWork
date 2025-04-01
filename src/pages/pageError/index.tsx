import { useNavigate } from "react-router-dom";

export default function PageError() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full  flex flex-col items-center justify-center min-h-screen">
        {" "}
        <h1 className="font-medium text-white text-2xl">
          Ops pagina não encontrada...{" "}
        </h1>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="text-white mt-7 bg-blue-500 px-5 rounded-xl cursor-pointer py-2 transition-all duration-500 hover:scale-110"
        >
          Voltar
        </button>
      </div>
    </>
  );
}
