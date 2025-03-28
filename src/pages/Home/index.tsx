import Icon from "../../componets/Icon";
import {
  PiInstagramLogo,
  PiFacebookLogo,
  PiGithubLogo,
  PiYoutubeLogo,
} from "react-icons/pi";
import { SiGmail } from "react-icons/si";

import Section from "../../componets/Section";

interface SectionProps {
  title: string;
  link: string;
}
export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full py-4 items-center justify-center">
        <h1 className="md:text-4xl text-3xl font-bold text-white mt-20">
          Fernando Developer
        </h1>
        <span className="text-gray-50 mb-5 mt-3">Veja meus links 👇</span>

        <main className="flex flex-col w-11/12 max-w-xl text-center ">
          <Section
            title="Instagram"
            link="https://www.instagram.com/fernando.ferreira._/"
            bg="#7df589"
          />
          <Section
            title="Canal YouTube"
            bg="red"
            link="https://www.youtube.com/"
          />
          <Section
            title="Facebook"
            bg="#3b5998"
            link="https://www.facebook.com/fernando.ferreira.988926/?locale=pt_BR"
          />
          <Section
            title="GitHub"
            link="https://github.com/FernandoFerreira94"
            bg="#b8e3f2"
          />
          <Section
            title="Gmail"
            link="https://mail.google.com/mail/u/0/#inbox"
          />

          <footer className="flex justify-center gap-3 my-4">
            <Icon url="https://www.instagram.com/fernando.ferreira._/">
              <PiInstagramLogo size={40} color="#fff" />
            </Icon>
            <Icon url="https://www.instagram.com/fernando.ferreira._/">
              <PiYoutubeLogo size={40} />
            </Icon>
            <Icon url="https://www.instagram.com/fernando.ferreira._/">
              <PiFacebookLogo size={40} color="#3b5998" />
            </Icon>
            <Icon url="https://www.instagram.com/fernando.ferreira._/">
              <PiGithubLogo size={40} color="#fff" />
            </Icon>
            <Icon url="https://www.instagram.com/fernando.ferreira._/">
              <SiGmail size={40} color="#ff0000" />
            </Icon>
          </footer>
        </main>
      </div>
    </>
  );
}
