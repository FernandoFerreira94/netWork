import { ReactNode, useState, useEffect } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { Navigate } from "react-router-dom";

import { auth } from "../service/fireBaseConnection";

interface PrivateProps {
  children: ReactNode; // Tipo para os filhos do componente
}

export function Private({ children }: PrivateProps): JSX.Element | null {
  // Estado que controla o carregamento e a autenticação do usuário
  const [loading, setLoading] = useState<boolean>(true);
  const [signed, setSigned] = useState<boolean>(false);

  useEffect(() => {
    // Monitora mudanças na autenticação do usuário pelo Firebase
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        // Salva os dados do usuário no localStorage se autenticado
        const userData = {
          uid: user.uid,
          email: user.email,
        };
        localStorage.setItem("@userNEtWork", JSON.stringify(userData));
        setSigned(true); // Define como autenticado
      } else {
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
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1>Carregando...</h1>
      </div>
    );
  }

  // Redireciona para a página de login se o usuário não estiver autenticado
  if (!signed) {
    return <Navigate to="/login" />;
  }

  // Renderiza os filhos do componente se autenticado
  return <>{children}</>;
}
