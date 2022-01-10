import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconeAtencao, IconeGoogle } from "../components/icons";
import useAuth from "../data/hook/useAuth";

export default function Autenticacao(props) {
  const { login, cadastrar, loginGoogle } = useAuth();

  const [modo, setModo] = useState<"login" | "cadastro">("login");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(null);

  async function submeter() {
    try {
      if (modo === "login") {
        {
         await login(email, senha);
        }
      } else {
        {
          await cadastrar(email, senha);
        }
      }
    } catch (e) {
      exibirErro(e.message ?? 'Erro desconhecido!');
    }
  }

  function exibirErro(msg, tempoEmSegundos = 5) {
    setErro(msg);
    setTimeout(() => setErro(""), tempoEmSegundos * 1000);
  }
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden sm:block sm:w-1/2 lg:w-2/3">
        <img
          className="
            h-screen w-full object-cover"
          alt="Imagem da tela de autenticação "
          src="https://source.unsplash.com/random"
        />
      </div>
      <div className="m-10 w-full md:w-1/2 lg:w-1/3">
        <h1 className={`text-3xl font-bold mb-5 `}>
          {modo === "login"
            ? "Entre com Usuario e senha"
            : "Cadastre-se na plataforma"}
        </h1>
        {erro ? (
          <div
            className={`
            flex items-center justify-start
            bg-red-400 text-white py-3 px-5 my-2
            border border-red-700 rounded-lg`}
          >
            {IconeAtencao()}
            <span className="ml-3">{erro}</span>
          </div>
        ) : (
          ""
        )}

        <AuthInput
          tipo="email"
          label="Email"
          valor={email}
          valorMudou={setEmail}
          obrigatorio
        />
        <AuthInput
          tipo="password"
          label="Senha"
          valor={senha}
          valorMudou={setSenha}
          obrigatorio
        />
        <button
          onClick={submeter}
          className={`w-full bg-indigo-500 hover:bg-indigo-400
         text-white rounded-lg px-5 py-3 mt-6`}
        >
          {modo === "login" ? "Entrar" : "Cadastrar-se"}
        </button>
        <hr className="my-6 border-gray-300 w-full" />
        <button
          onClick={loginGoogle}
          className={`
          flex items-center justify-center
          w-full bg-red-500 hover:bg-red-400
          text-white rounded-lg px-5 py-3 mt-6`}
        >
          <span className="mr-3 bg-white rounded-full">{IconeGoogle(25)}</span>
          Entrar com Google
        </button>

        {modo === "login" ? (
          <p className="mt-8">
            Novo por aqui ?
            <a
              onClick={() => setModo("cadastro")}
              className={`
            text-blue-500 houver:text-blue-700 font-semibold cursor-pointer ml-2
            `}
            >
              Crie uma Conta Gratuitamente!
            </a>
          </p>
        ) : (
          <p className="mt-8">
            Ja faz parte da nossa comunidade ?
            <a
              onClick={() => setModo("login")}
              className={`
            text-blue-500 houver:text-blue-700 font-semibold cursor-pointer ml-2
            `}
            >
              Entre com suas credenciais
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
