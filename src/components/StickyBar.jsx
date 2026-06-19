import React, { useState } from "react";
import Toast from "../components/Toast";

function StickyBar() {
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState({ text: "", type: "" });
  const [isHidden, setIsHidden] = useState(false);

  const handleSubmit = () => {
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!email.trim()) {
      setToast({ text: "Ingresa tu correo electrónico", type: "error" });
      return;
    }
    if (!valid) {
      setToast({ text: "Correo no válido, intenta de nuevo", type: "error" });
      return;
    }
    setToast({ text: "¡Listo! Te has suscrito", type: "success" });
    setEmail("");
    const timerId = setTimeout(() => {
      setIsHidden(!isHidden);
    }, 3000);
  };

  return (
    <div
      className={`${isHidden ? "hidden" : "hidden sm:flex w-full py-3 top-0 z-70 bg-[#FFFFF9] shadow-[0px_2px_20px_0px_rgba(0,0,0,0.05)] flex-col sm:flex-row justify-center items-center gap-3 sm:gap-12 px-4 sm:px-12"}`}
    >
      <p className="text-zinc-900 text-xs font-normal text-center sm:text-left">
        ¿Tu primera crema de lujo? Recibe{" "}
        <b className="text-[#C11313]">10% de descuento</b> en tu primer pedido
      </p>
      <div className="flex items-center border-b border-gray-400 pb-1.5 gap-3 text-xs w-full sm:w-auto max-w-xs">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          placeholder="tu@correo.com"
          className="flex-1 bg-transparent outline-none text-xs text-gray-800 placeholder-gray-400 min-w-0"
        />
        <button
          onClick={handleSubmit}
          className="text-xs font-semibold text-[#C11313] whitespace-nowrap hover:text-red-800 hover:underline transition-all duration-150 cursor-pointer"
        >
          Suscríbete →
        </button>
      </div>
      <button
        onClick={() => setIsHidden(!isHidden)}
        className="bg-transparent border-none cursor-pointer p-1 text-zinc-900 absolute right-12"
        aria-label="Cerrar menú"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <Toast
        message={toast.text}
        type={toast.type}
        onClose={() => setToast({ text: "", type: "" })}
      />
    </div>
  );
}

export default StickyBar;
