import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx("header", { className: "w-full max-w-2xl mt-5 px-1", children: _jsxs("nav", { className: "w-full bg-white h-12 items-center flex justify-between px-4 rounded-md", children: [_jsxs("div", { className: "flex gap-5 font-medium", children: [_jsx(LinkHeader, { url: "/", text: "Home" }), _jsx(LinkHeader, { url: "/admin", text: "Link" }), _jsx(LinkHeader, { url: "/admin/social", text: "Redes sociais" })] }), _jsx("button", { className: "cursor-pointer transition-all  duration-500 hover:scale-110", children: _jsx(BiLogOut, { size: 28, color: "#db2629", onClick: handleLogout }) })] }) }));
}
