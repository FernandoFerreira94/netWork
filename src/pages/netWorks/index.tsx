import React, { useEffect, useState } from "react";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

import { Db } from "../../service/fireBaseConnection";
import Header from "../../componets/Header";
import { Input } from "../../componets/Input";

interface ListaProps {
  instagram?: string;
  facebook?: string;
  youtube?: string;
  gitHub?: string;
  portifole?: string;
}

export default function NetWorks() {
  const [facebook, setFacebook] = useState<string>("");
  const [youtube, setYoutube] = useState<string>("");
  const [instagram, setInstagram] = useState<string>("");
  const [gitHub, setGitHub] = useState<string>("");
  const [portifole, setPortifole] = useState<string>("");
  const [listaUrl, setListaUrl] = useState<ListaProps>();

  const docRef = doc(Db, "social", "link");

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await getDoc(docRef).then((snapshot) => {
      if (snapshot.data() !== undefined) {
        setListaUrl({
          instagram: snapshot.data()?.instagram,
          facebook: snapshot.data()?.facebook,
          youtube: snapshot.data()?.youtube,
          gitHub: snapshot.data()?.gitHub,
          portifole: snapshot.data()?.portifole,
        });
      }
    });
  }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    if (facebook === "" && youtube === "" && youtube === "")
      return toast.info("Preenhca os campos");
    await setDoc(docRef, {
      instagram,
      facebook,
      youtube,
      gitHub,
      portifole,
    })
      .then(() => {
        toast.success("Cadastrado com sucesso");
      })
      .catch(() => {
        toast.error("Erro ao cadastrar");
      });
  }

  if (!listaUrl) {
    return (
      <div className="w-full h-screen flex items-center justify-center ">
        <h1 className="font-medium text-white text-2xl">Carregando...</h1>
      </div>
    );
  }
  return (
    <>
      <div className="flex items-center flex-col min-h-screen pb-7 px-2">
        <Header />
        <h1 className="text-white text-2xl font-medium mt-8 mb-4">
          Minhas redes sociais
        </h1>

        <form
          onSubmit={handleRegister}
          action=""
          className="flex flex-col max-w-xl w-full "
        >
          <label htmlFor="" className="text-white font-medium mt-2 mb-2">
            Link Facebook
          </label>
          <Input
            placeholder="Digite a url do facebook"
            type="url"
            value={listaUrl.facebook}
            onChange={(e) => setFacebook(e.target.value)}
          />

          <label htmlFor="" className="text-white font-medium mt-2 mb-2">
            Link Instagram
          </label>
          <Input
            placeholder="Digite a url do instagram"
            type="url"
            value={listaUrl.instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />

          <label htmlFor="" className="text-white font-medium mt-2 mb-2">
            Link Youtyube
          </label>
          <Input
            placeholder="Digite a url do youtube"
            type="url"
            value={listaUrl.youtube}
            onChange={(e) => setYoutube(e.target.value)}
          />

          <label htmlFor="" className="text-white font-medium mt-2 mb-2">
            Link GitHub
          </label>
          <Input
            placeholder="Digite a url do youtube"
            type="url"
            value={listaUrl.gitHub}
            onChange={(e) => setGitHub(e.target.value)}
          />

          <label htmlFor="" className="text-white font-medium mt-2 mb-2">
            Link Portifole
          </label>
          <Input
            placeholder="Digite a url do youtube"
            type="url"
            value={listaUrl.portifole}
            onChange={(e) => setPortifole(e.target.value)}
          />

          <button
            type="submit"
            className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium cursor-pointer mt-3"
          >
            {" "}
            Salvar links
          </button>
        </form>
      </div>
    </>
  );
}
