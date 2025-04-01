import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot, doc, getDoc, } from "firebase/firestore";
import { Db } from "../../service/fireBaseConnection";
import Icon from "../../componets/Icon";
import { PiInstagramLogo, PiFacebookLogo, PiYoutubeLogo, PiGithubLogo, } from "react-icons/pi";
import { RiAccountCircleLine } from "react-icons/ri";
import Section from "../../componets/Section";
import { toast } from "react-toastify";
export default function Home() {
    const [redeSocial, setRedeSocial] = useState([]);
    const [socialLink, setSocialLink] = useState(null);
    // Get info das rede Sociais
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
                    gitHub: snapshot.data()?.github,
                    portifole: snapshot.data()?.portifole,
                });
            }
        })
            .catch(() => {
            toast.warn("Email e senha invalido");
        });
    }
    if (!socialLink) {
        return (_jsx("div", { className: "w-full h-screen flex items-center justify-center ", children: _jsx("h1", { className: "font-medium text-white text-2xl", children: "Carregando..." }) }));
    }
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "flex flex-col w-full py-4 items-center justify-center", children: [_jsx("h1", { className: "md:text-4xl text-3xl font-bold text-white mt-20", children: "Fernando Developer" }), _jsx("span", { className: "text-gray-50 mb-5 mt-3", children: "Veja meus links \uD83D\uDC47" }), _jsx("main", { className: "flex flex-col w-11/12 max-w-xl text-center ", children: redeSocial.map((doc, index) => (_jsx(Section, { title: doc.name, link: doc.link, bg: doc.bg, color: doc.color }, index))) }), socialLink && Object.keys(socialLink).length > 0 && (_jsxs("footer", { className: "flex justify-center gap-3 my-4", children: [_jsx(Icon, { url: socialLink?.instagram || "", children: _jsx(PiInstagramLogo, { size: 40 }) }), _jsx(Icon, { url: socialLink?.youtube || "", children: _jsx(PiYoutubeLogo, { size: 40 }) }), _jsx(Icon, { url: socialLink?.facebook || "", children: _jsx(PiFacebookLogo, { size: 40 }) }), _jsx(Icon, { url: socialLink?.gitHub || "", children: _jsx(PiGithubLogo, { size: 40 }) }), _jsx(Icon, { url: socialLink?.portifole || "", children: _jsx(RiAccountCircleLine, { size: 40 }) })] }))] }) }));
}
