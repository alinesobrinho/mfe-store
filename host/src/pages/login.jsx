import { useState } from "react";

import {Mail,Lock,} from "lucide-react";

import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

function Login() {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [successMessage, setSuccessMessage] =
    useState(false);

  function handleLogin(e) {
    e.preventDefault();

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert(
        "Digite um e-mail válido."
      );

      return;
    }

    if (!password) {
      alert("Digite sua senha.");

      return;
    }

    setSuccessMessage(true);

    setTimeout(() => {
      setSuccessMessage(false);
    }, 2000);
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center p-6">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8 relative">

        <div className="flex justify-center mb-4">

          <img
            src={logo}
            alt="VR Logo"
            className="w-20 h-20 object-contain"
          />

        </div>

        <p className="text-gray-500 text-center mb-8">
          Faça login para continuar
        </p>

        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4"
        >

          <div>
            <label className="text-sm font-medium text-gray-700">
              E-mail
            </label>

            <div className="relative mt-1">

              <Mail
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
                className="w-full p-3 pl-10 border border-gray-300 rounded-xl outline-none focus:border-[#00AA13]"
              />

            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Senha
            </label>

            <div className="relative mt-1">

              <Lock
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                className="w-full p-3 pl-10 border border-gray-300 rounded-xl outline-none focus:border-[#00AA13]"
              />

            </div>
          </div>

          <button
            type="submit"
            className="bg-[#00AA13] text-white py-3 rounded-full font-semibold mt-4 transition-all duration-200 hover:scale-105 active:scale-95 hover:opacity-90"
          >
            Entrar
          </button>

        </form>

        <div className="flex justify-between items-center mt-6 text-sm">

          <button className="text-[#00AA13] hover:underline">
            Esqueceu a senha?
          </button>

          <button className="text-[#00AA13] hover:underline">
            Cadastre-se
          </button>

        </div>

        <div className="mt-8 text-center">

          <Link
            to="/"
            className="text-gray-500 hover:text-[#00AA13] transition"
          >
            ← Voltar para loja
          </Link>

        </div>

        {successMessage && (
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white border border-[#00AA13] shadow-xl rounded-xl px-6 py-3 min-w-[280px]">

            <p className="text-[#00AA13] font-semibold text-center">
              Login efetuado com sucesso!
            </p>

          </div>
        )}

      </div>
    </div>
  );
}

export default Login;