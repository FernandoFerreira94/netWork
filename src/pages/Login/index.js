import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../service/fireBaseConnection";
import { Input } from "../../componets/Input";
import { toast } from "react-toastify";
const msgError = "Campo obrigatorio";
export default function Login() {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const navigate = useNavigate();
    async function handleLogin(data) {
        if (!data.email || !data.password) {
            console.error("E-mail ou senha ausentes!");
            return;
        }
        await signInWithEmailAndPassword(auth, data.email, data.password)
            .then(() => {
            navigate("/admin");
            reset();
            toast.success("Sejá bem vindo Fernando 😀");
        })
            .catch(() => toast.warn("Email e senha invalidos"));
    }
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "flex flex-col w-full items-center justify-center h-screen ", children: [_jsx(Link, { to: "/", children: _jsxs("h1", { className: "mt-11 text-white mb-7 font-bold text-5xl", children: ["Dev", _jsx("span", { className: "bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent", children: "Link" })] }) }), _jsxs("form", { onSubmit: handleSubmit(handleLogin), action: "", className: "w-full max-w-xl flex flex-col px-2", children: [_jsx(Input, { placeholder: "Digite seu email", type: "email", ...register("email", { required: msgError }) }), errors.email?.message && (_jsx("small", { className: "text-red-500", children: errors.email.message })), _jsx(Input, { placeholder: "*******", type: "password", ...register("password", { required: msgError }), autoComplete: "current-password" }), errors.password?.message && (_jsx("small", { className: "text-red-500", children: errors.password.message })), _jsx("button", { type: "submit", className: "h-9 mt-3 bg-blue-600 rounded border-0 text-white font-medium text-lg cursor-pointer", children: "Acessar" })] })] }) }));
}
