import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../service/fireBaseConnection";
export function Private({ children }) {
    // Estado que controla o carregamento e a autenticação do usuário
    const [loading, setLoading] = useState(true);
    const [signed, setSigned] = useState(false);
    useEffect(() => {
        // Monitora mudanças na autenticação do usuário pelo Firebase
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // Salva os dados do usuário no localStorage se autenticado
                const userData = {
                    uid: user.uid,
                    email: user.email,
                };
                localStorage.setItem("@userNEtWork", JSON.stringify(userData));
                setSigned(true); // Define como autenticado
            }
            else {
                setSigned(false); // Define como não autenticado
            }
            setLoading(false); // Finaliza o estado de carregamento
        });
        // Retorna a função de cleanup para cancelar a escuta ao desmontar o componente
        return () => {
            unsubscribe();
        };
    }, []);
    // Verifica se o componente está carregando
    if (loading) {
        return (_jsx("div", { className: "flex items-center justify-center min-h-screen", children: _jsx("h1", { children: "Carregando..." }) }));
    }
    // Redireciona para a página de login se o usuário não estiver autenticado
    if (!signed) {
        return _jsx(Navigate, { to: "/login" });
    }
    // Renderiza os filhos do componente se autenticado
    return _jsx(_Fragment, { children: children });
}
