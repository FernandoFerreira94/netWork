import { Input, Label } from "../Input";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface RegisterProps {
  link: string;
  url: string;
}

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [textColor, setTextColor] = useState("#000");
  const [bgColor, setBgColor] = useState("white");

  function handleRegister(data: RegisterProps) {
    console.log(data);
    reset();
  }
  return (
    <>
      <form
        action=""
        className="flex flex-col w-full max-w-xl mt-10 p-3"
        onSubmit={handleSubmit(handleRegister)}
      >
        <Label text="Nome do Link" />
        <Input placeholder="Nome do seu link" {...register("link")} />

        <Label text="URL do link" />
        <Input placeholder="DIgite a URL" {...register("url")} />

        <section className="flex  gap-5">
          <div className="flex items-end my-4 gap-1">
            <Label text="Fundo do link" />
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
            />
          </div>

          <div className="flex items-end my-4 gap-1">
            <Label text="Cor do link" />
            <input
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
            />
          </div>
        </section>

        <div className="flex items-center justify-start flex-col mb-7 p-1 border-gray-100/25 border-1 rounded-md">
          <Label text="Veja como esta ficando" />
          <article
            className="w-11/12 max-w-lg flex flex-col items-center justify-between bg-zinc-900 rounded px-1 py-3 my-4"
            style={{ background: bgColor }}
          >
            <p className="font-medium" style={{ color: textColor }}>
              Canal do youtube
            </p>
          </article>
        </div>

        <button className="w-full border-0 bg-blue-500  rounded-md font-medium text-md transition-all duration-500 hover:scale-102 cursor-pointer py-2">
          Cadastrar
        </button>
      </form>
    </>
  );
}
