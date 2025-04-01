import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Input, Label } from "../Input";
import { useState, useEffect } from "react";
import { FiTrash } from "react-icons/fi";
import { toast } from "react-toastify";
import { Db } from "../../service/fireBaseConnection";
import { setDoc, doc, collection, deleteDoc, query, orderBy, onSnapshot, } from "firebase/firestore";
export default function Form() {
    const [textColor, setTextColor] = useState("#000000");
    const [bgColor, setBgColor] = useState("#ffffff");
    const [nameInput, setNameInput] = useState("");
    const [linkInput, setLinkInput] = useState("");
    const [redeSocial, setRedeSocial] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const docRef = collection(Db, "netWork");
        const queryRef = query(docRef, orderBy("created", "asc"));
        const unSub = onSnapshot(queryRef, (snapshot) => {
            const lista = [];
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
    function clearInput() {
        setNameInput("");
        setLinkInput("");
        setBgColor("#ffffff");
        setTextColor("#000000");
    }
    async function handleRegister(e) {
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
    async function handleDelete(idPost) {
        const docRef = doc(Db, "netWork", idPost);
        await deleteDoc(docRef)
            .then(() => {
            toast.warn("Rede deletada");
            setRedeSocial(redeSocial.filter((item) => item.id !== idPost));
        })
            .catch(() => toast.error("Erro ao deletar"));
    }
    return (_jsxs(_Fragment, { children: [_jsxs("form", { action: "", className: "flex flex-col w-full max-w-xl mt-10 p-3", onSubmit: handleRegister, children: [_jsx(Label, { text: "Nome do Link" }), _jsx(Input, { placeholder: "Nome do seu link", onChange: (e) => setNameInput(e.target.value), value: nameInput }), _jsx(Label, { text: "URL do link" }), _jsx(Input, { placeholder: "DIgite a URL", onChange: (e) => setLinkInput(e.target.value), value: linkInput }), _jsxs("section", { className: "flex  gap-5", children: [_jsxs("div", { className: "flex items-end my-4 gap-1 ", children: [_jsx(Label, { text: "Fundo do link" }), _jsx("input", { type: "color", value: bgColor, onChange: (e) => setBgColor(e.target.value), className: "cursor-pointer h-8" })] }), _jsxs("div", { className: "flex items-end my-4 gap-1", children: [_jsx(Label, { text: "Cor do link" }), _jsx("input", { type: "color", value: textColor, onChange: (e) => setTextColor(e.target.value), className: "cursor-pointer  h-8" })] })] }), nameInput && (_jsxs("div", { className: "flex items-center justify-start flex-col mb-7 p-1 border-gray-100/25 border-1 rounded-md", children: [_jsx(Label, { text: "Veja como esta ficando" }), _jsx("article", { className: "w-11/12 max-w-lg flex flex-col items-center justify-between bg-zinc-900 rounded px-1 py-3 my-4", style: { background: bgColor }, children: _jsx("p", { className: "font-medium", style: { color: textColor }, children: nameInput }) })] })), _jsx("button", { type: "submit", className: " w-full border-0 bg-blue-600  rounded-md font-medium text-md text-white transition-all duration-500 hover:scale-102 cursor-pointer mb-7 py-2", children: loading ? "Cadastrando" : "Cadastrar" })] }), _jsx("h2", { className: "font-bold text-white mb-4 text-2xl", children: " Meus Links" }), redeSocial.map((doc) => (_jsxs("article", { className: "w-11/12 max-w-lg flex justify-between bg-amber-700 items-center px-8 py-3 mb-3 mt-3 rounded select-none", style: { background: doc.bg, color: doc.color }, children: [_jsx("p", { children: doc.name }), _jsx("div", { children: _jsx("button", { className: "border border-dashed border-white p-1 rounded cursor-pointer bg-neutral-900", onClick: () => handleDelete(doc.id), children: _jsx(FiTrash, { size: 20, color: "white" }) }) })] }, doc.id)))] }));
}
