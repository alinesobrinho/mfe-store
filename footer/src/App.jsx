import "./App.css";
import {CircleHelp,User,} from "lucide-react";
import logo from "./assets/logo.png";

function App() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 py-4 px-8 flex items-center justify-between z-30">

      <div className="flex items-center gap-3">

        <img
          src={logo}
          alt="VR Logo"
          className="w-10 h-10 object-contain"
        />

        <p className="text-gray-500 text-sm">
          © 2026 VR Benefícios - Todos os direitos reservados
        </p>

      </div>

      <div className="flex items-center gap-8 text-gray-600">

        <button className="flex items-center gap-2 hover:text-[#00AA13] transition">

          <CircleHelp size={20} />

          <span>Precisa de ajuda?</span>

        </button>

        <button
          onClick={() => {
            window.location.href =
              "/login";
          }}
          className="flex items-center gap-2 hover:text-[#00AA13] transition"
        >

          <User size={20} />

          <span>Login</span>

        </button>

      </div>
    </footer>
  );
}

export default App;