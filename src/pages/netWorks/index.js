import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Db } from "../../service/fireBaseConnection";
import Header from "../../componets/Header";
import { Input } from "../../componets/Input";
export default function NetWorks() {
    const [facebook, setFacebook] = useState("");
    const [youtube, setYoutube] = useState("");
    const [instagram, setInstagram] = useState("");
    const [gitHub, setGitHub] = useState("");
    const [portifole, setPortifole] = useState("");
    const [listaUrl, setListaUrl] = useState();
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
    async function handleRegister(e) {
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
        return (_jsx("div", { className: "w-full h-screen flex items-center justify-center ", children: _jsx("h1", { className: "font-medium text-white text-2xl", children: "Carregando..." }) }));
    }
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "flex items-center flex-col min-h-screen pb-7 px-2", children: [_jsx(Header, {}), _jsx("h1", { className: "text-white text-2xl font-medium mt-8 mb-4", children: "Minhas redes sociais" }), _jsxs("form", { onSubmit: handleRegister, action: "", className: "flex flex-col max-w-xl w-full ", children: [_jsx("label", { htmlFor: "", className: "text-white font-medium mt-2 mb-2", children: "Link Facebook" }), _jsx(Input, { placeholder: "Digite a url do facebook", type: "url", value: listaUrl.facebook, onChange: (e) => setFacebook(e.target.value) }), _jsx("label", { htmlFor: "", className: "text-white font-medium mt-2 mb-2", children: "Link Instagram" }), _jsx(Input, { placeholder: "Digite a url do instagram", type: "url", value: listaUrl.instagram, onChange: (e) => setInstagram(e.target.value) }), _jsx("label", { htmlFor: "", className: "text-white font-medium mt-2 mb-2", children: "Link Youtyube" }), _jsx(Input, { placeholder: "Digite a url do youtube", type: "url", value: listaUrl.youtube, onChange: (e) => setYoutube(e.target.value) }), _jsx("label", { htmlFor: "", className: "text-white font-medium mt-2 mb-2", children: "Link GitHub" }), _jsx(Input, { placeholder: "Digite a url do youtube", type: "url", value: listaUrl.gitHub, onChange: (e) => setGitHub(e.target.value) }), _jsx("label", { htmlFor: "", className: "text-white font-medium mt-2 mb-2", children: "Link Portifole" }), _jsx(Input, { placeholder: "Digite a url do youtube", type: "url", value: listaUrl.portifole, onChange: (e) => setPortifole(e.target.value) }), _jsxs("button", { type: "submit", className: "text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium cursor-pointer mt-3", children: [" ", "Salvar links"] })] })] }) }));
}
