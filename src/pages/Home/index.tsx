import { useState, useEffect } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  getDoc,
} from "firebase/firestore";

import { Db } from "../../service/fireBaseConnection";
import Icon from "../../componets/Icon";
import {
  PiInstagramLogo,
  PiFacebookLogo,
  PiYoutubeLogo,
  PiGithubLogo,
} from "react-icons/pi";
import { RiAccountCircleLine } from "react-icons/ri";

import Section from "../../componets/Section";
import { toast } from "react-toastify";

interface SocialNetworkProps {
  id: string;
  name: string;
  link: string;
  color: string;
  bg: string;
}

interface SociaLinkProps {
  facebook?: string;
  instagram?: string;
  youtube?: string;
  gitHub?: string;
  portifole?: string;
}

export default function Home() {
  const [redeSocial, setRedeSocial] = useState<SocialNetworkProps[]>([]);

  const [socialLink, setSocialLink] = useState<SociaLinkProps | null>(null);

  // Get info das rede Sociais
  useEffect(() => {
    const docRef = collection(Db, "netWork");
    const queryRef = query(docRef, orderBy("created", "asc"));
    const unSub = onSnapshot(queryRef, (snapshot) => {
      const lista: SocialNetworkProps[] = [];
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

  // Get links instagram / youtube / facebook
  useEffect(() => {
    loadSocial();
  }, []);

  async function loadSocial() {
    const docRef = doc(Db, "social", "link");
    await getDoc(docRef)
      .then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setSocialLink({
            instagram: snapshot.data()?.instagram,
            facebook: snapshot.data()?.facebook,
            youtube: snapshot.data()?.youtube,
            gitHub: snapshot.data()?.gitHub,
            portifole: snapshot.data()?.portifole,
          });
        }
      })
      .catch(() => {
        toast.warn("Email e senha invalido");
      });
  }

  if (!socialLink) {
    return (
      <div className="w-full h-screen flex items-center justify-center ">
        <h1 className="font-medium text-white text-2xl">Carregando...</h1>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col w-full py-4 items-center justify-center">
        <h1 className="md:text-4xl text-3xl font-bold text-white mt-20">
          Fernando Developer
        </h1>
        <span className="text-gray-50 mb-5 mt-3">Veja meus links 👇</span>

        <main className="flex flex-col w-11/12 max-w-xl text-center ">
          {redeSocial.map((doc, index) => (
            <Section
              key={index}
              title={doc.name}
              link={doc.link}
              bg={doc.bg}
              color={doc.color}
            />
          ))}
        </main>
        {socialLink && Object.keys(socialLink).length > 0 && (
          <footer className="flex justify-center gap-3 my-4">
            <Icon url={socialLink?.instagram || ""}>
              <PiInstagramLogo size={40} />
            </Icon>

            <Icon url={socialLink?.youtube || ""}>
              <PiYoutubeLogo size={40} />
            </Icon>

            <Icon url={socialLink?.facebook || ""}>
              <PiFacebookLogo size={40} />
            </Icon>

            <Icon url={socialLink?.gitHub || ""}>
              <PiGithubLogo size={40} />
            </Icon>

            <Icon url={socialLink?.portifole || ""}>
              <RiAccountCircleLine size={40} />
            </Icon>
          </footer>
        )}
      </div>
    </>
  );
}
