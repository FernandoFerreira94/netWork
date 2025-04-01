import { Input, Label } from "../Input";
import { useState, useEffect } from "react";
import { FiTrash } from "react-icons/fi";
import { toast } from "react-toastify";

import { Db } from "../../service/fireBaseConnection";
import {
  setDoc,
  doc,
  collection,
  deleteDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

export interface LinkProps {
  id: string;
  link: string;
  color: string;
  bg: string;
  name: string;
}

export default function Form() {
  const [textColor, setTextColor] = useState<string>("#000000");
  const [bgColor, setBgColor] = useState<string>("#ffffff");
  const [nameInput, setNameInput] = useState<string>("");
  const [linkInput, setLinkInput] = useState<string>("");
  const [redeSocial, setRedeSocial] = useState<LinkProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const docRef = collection(Db, "netWork");
    const queryRef = query(docRef, orderBy("created", "asc"));
    const unSub = onSnapshot(queryRef, (snapshot) => {
      const lista: LinkProps[] = [];
      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          name: doc.data().name || "",
          link: doc.data().link || "",
          color: doc.data().color || "#000000",
          bg: doc.data().bg || "#ffffff",
        });
      });
      setRedeSocial(lista);
    });
    return () => unSub();
  }, [redeSocial]);

  function clearInput(): void {
    setNameInput("");
    setLinkInput("");
    setBgColor("#ffffff");
    setTextColor("#000000");
  }

  async function handleRegister(e: React.FormEvent): Promise<void> {
    e.preventDefault();
    setLoading(true);
    if (nameInput == "" && linkInput == "") {
      toast.warn("Preencha os campos");
      setLoading(false);
      return;
    }
    await setDoc(doc(Db, "netWork", nameInput), {
      name: nameInput,
      link: linkInput,
      color: textColor,
      bg: bgColor,
      created: new Date(),
    })
      .then(() => {
        toast.success("Link cadastrado com sucesso");
        clearInput();
        setLoading(false);
      })
      .catch(() => {
        toast.info("Ops tivemos um erro");
        setLoading(false);
      });
  }

  async function handleDelete(idPost: string): Promise<void> {
    const docRef = doc(Db, "netWork", idPost);

    await deleteDoc(docRef)
      .then(() => {
        toast.warn("Rede deletada");
        setRedeSocial(redeSocial.filter((item) => item.id !== idPost));
      })
      .catch(() => toast.error("Erro ao deletar"));
  }

  return (
    <>
      <form
        action=""
        className="flex flex-col w-full max-w-xl mt-10 p-3"
        onSubmit={handleRegister}
      >
        <Label text="Nome do Link" />
        <Input
          placeholder="Nome do seu link"
          onChange={(e) => setNameInput(e.target.value)}
          value={nameInput}
        />

        <Label text="URL do link" />
        <Input
          placeholder="DIgite a URL"
          onChange={(e) => setLinkInput(e.target.value)}
          value={linkInput}
        />

        <section className="flex  gap-5">
          <div className="flex items-end my-4 gap-1 ">
            <Label text="Fundo do link" />
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className="cursor-pointer h-8"
            />
          </div>

          <div className="flex items-end my-4 gap-1">
            <Label text="Cor do link" />
            <input
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
              className="cursor-pointer  h-8"
            />
          </div>
        </section>

        {nameInput && (
          <div className="flex items-center justify-start flex-col mb-7 p-1 border-gray-100/25 border-1 rounded-md">
            <Label text="Veja como esta ficando" />
            <article
              className="w-11/12 max-w-lg flex flex-col items-center justify-between bg-zinc-900 rounded px-1 py-3 my-4"
              style={{ background: bgColor }}
            >
              <p className="font-medium" style={{ color: textColor }}>
                {nameInput}
              </p>
            </article>
          </div>
        )}

        <button
          type="submit"
          className=" w-full border-0 bg-blue-600  rounded-md font-medium text-md text-white transition-all duration-500 hover:scale-102 cursor-pointer mb-7 py-2"
        >
          {loading ? "Cadastrando" : "Cadastrar"}
        </button>
      </form>

      <h2 className="font-bold text-white mb-4 text-2xl"> Meus Links</h2>

      {redeSocial.map((doc) => (
        <article
          key={doc.id}
          className="w-11/12 max-w-lg flex justify-between bg-amber-700 items-center px-8 py-3 mb-3 mt-3 rounded select-none"
          style={{ background: doc.bg, color: doc.color }}
        >
          <p>{doc.name}</p>

          <div>
            <button
              className="border border-dashed border-white p-1 rounded cursor-pointer bg-neutral-900"
              onClick={() => handleDelete(doc.id)}
            >
              <FiTrash size={20} color="white" />
            </button>
          </div>
        </article>
      ))}
    </>
  );
}
