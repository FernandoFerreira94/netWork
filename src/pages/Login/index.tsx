import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../service/fireBaseConnection";

import { Input } from "../../componets/Input";
import { toast } from "react-toastify";

interface RegisterProps {
  email?: string;
  password?: string;
}

const msgError = "Campo obrigatorio";

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterProps>();

  const navigate = useNavigate();

  async function handleLogin(data: RegisterProps) {
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
  return (
    <>
      <div className="flex flex-col w-full items-center justify-center h-screen ">
        <Link to="/">
          <h1 className="mt-11 text-white mb-7 font-bold text-5xl">
            Dev
            <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">
              Link
            </span>
          </h1>
        </Link>

        <form
          onSubmit={handleSubmit(handleLogin)}
          action=""
          className="w-full max-w-xl flex flex-col px-2"
        >
          <Input
            placeholder="Digite seu email"
            type="email"
            {...register("email", { required: msgError })}
          />

          {errors.email?.message && (
            <small className="text-red-500">{errors.email.message}</small>
          )}

          <Input
            placeholder="*******"
            type="password"
            {...register("password", { required: msgError })}
            autoComplete="current-password"
          />
          {errors.password?.message && (
            <small className="text-red-500">{errors.password.message}</small>
          )}

          <button
            type="submit"
            className="h-9 mt-3 bg-blue-600 rounded border-0 text-white font-medium text-lg cursor-pointer"
          >
            Acessar
          </button>
        </form>
      </div>
    </>
  );
}
