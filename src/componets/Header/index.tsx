import { BiLogOut } from "react-icons/bi";

import { signOut } from "firebase/auth";
import { auth } from "../../service/fireBaseConnection";
import { toast } from "react-toastify";
import LinkHeader from "../Link";

export default function Header() {
  function handleLogout() {
    signOut(auth);
    toast.info("Voçê foi deslogado");
  }
  return (
    <header className="w-full max-w-2xl mt-5 px-1">
      <nav className="w-full bg-white h-12 items-center flex justify-between px-4 rounded-md">
        <div className="flex gap-5 font-medium">
          <LinkHeader url="/" text="Home" />
          <LinkHeader url="/admin" text="Link" />
          <LinkHeader url="/admin/social" text="Redes sociais" />
        </div>

        <button className="cursor-pointer transition-all  duration-500 hover:scale-110">
          <BiLogOut size={28} color="#db2629" onClick={handleLogout} />
        </button>
      </nav>
    </header>
  );
}
