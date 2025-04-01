import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
export default function PageError() {
    const navigate = useNavigate();
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "w-full  flex flex-col items-center justify-center min-h-screen", children: [" ", _jsxs("h1", { className: "font-medium text-white text-2xl", children: ["Ops pagina n\u00E3o encontrada...", " "] }), _jsx("button", { onClick: () => {
                        navigate("/");
                    }, className: "text-white mt-7 bg-blue-500 px-5 rounded-xl cursor-pointer py-2 transition-all duration-500 hover:scale-110", children: "Voltar" })] }) }));
}
