import React, { useState, useEffect, useRef } from "react";
import tatcha from "/images/tatcha_icon.svg";

const links = [
  { label: "Skincare", href: "#vsl" },
  { label: "Ritual", href: "#ritual" },
  { label: "Productos", href: "#products" },
];

const secondaryLinks = [
  { label: "Contacto", href: "https://tatcha.com/pages/contact" },
  {
    label: "Cuenta",
    href: "https://account.tatcha.com/authentication/login?client_id=24f3d4e5-66e4-41c2-8dee-9ae8b0931e50&locale=en-EC&redirect_uri=%2Fauthentication%2Foauth%2Fauthorize%3Fbuyer_flags%3DeyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ0NnJ2cTUtZmUubXlzaG9waWZ5LmNvbSIsImZsYWdzIjpbXSwiZXhwIjoxNzgyNDE0MTUyLCJuYmYiOjE3ODE4MDkzNTJ9.72WqK0kSbYmfspYGyEosowqnT8rt1byc8lbLtz1vP2I%26client_id%3D24f3d4e5-66e4-41c2-8dee-9ae8b0931e50%26locale%3Den-EC%26nonce%3Dd79a851b-95f2-42ff-acfe-474bb6d3ffa8%26redirect_uri%3Dhttps%253A%252F%252Faccount.tatcha.com%252Fcallback%26region_country%3DEC%26response_type%3Dcode%26scope%3Dopenid%2Bemail%2Bcustomer-account-api%253Afull%26state%3DhWNDUYWu6XXhWQRLVjgkmw53&region_country=EC",
  },
];

const NavLink = ({ label, href, onClick, className = "" }) => (
  <a
    href={href}
    onClick={onClick}
    className={`relative flex items-center justify-center group ${className}`}
  >
    <span className="font-bold invisible pointer-events-none select-none">
      {label}
    </span>
    <span className="absolute font-light text-gray-600 transition-[font-weight,color] duration-150 ease-in group-hover:font-bold group-hover:text-zinc-900">
      {label}
    </span>
  </a>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const cartCount = 8;

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (menuOpen) {
        lastScrollY.current = currentY;
        return;
      }
      if (currentY < 10) {
        setVisible(true);
      } else if (currentY < lastScrollY.current) {
        setVisible(true);
      } else if (currentY > lastScrollY.current + 5) {
        setVisible(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full flex items-center justify-between h-auto px-6 sm:px-12 pb-5 sm:pt-5 pt-8 text-base font-light bg-white/90 transition-transform duration-300 ease-in-out ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <NavLink key={l.label} {...l} />
          ))}
        </div>

        <div className="flex-none">
          <img className="h-8 sm:h-10 w-auto" src={tatcha} alt="Tatcha" />
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden lg:flex items-center gap-7">
            {secondaryLinks.map((l) => (
              <NavLink key={l.label} {...l} />
            ))}
          </div>
          <a
            href="https://tatcha.com/collections/shop-all"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-black p-0 bg-transparent border-none cursor-pointer transition duration-150 hover:scale-110"
            aria-label={`Carrito, ${cartCount} artículos`}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C11313"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#C11313] text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center leading-none">
                {cartCount}
              </span>
            )}
          </a>

          <button
            className="flex lg:hidden text-black bg-transparent border-none cursor-pointer p-1 z-60 relative"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-80 bg-white flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <img className="h-8 w-auto" src={tatcha} alt="Tatcha" />
          <button
            onClick={close}
            className="bg-transparent border-none cursor-pointer p-1 text-zinc-900"
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
        </div>

        <div className="flex flex-col flex-1 px-8 py-12 gap-2 overflow-y-auto">
          {[...links, ...secondaryLinks].map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={close}
              className="py-5 border-b border-gray-100 text-xl font-light text-zinc-900 hover:text-red-700 hover:font-bold transition-all duration-150"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="px-8 pb-12 flex flex-col gap-4">
          <a
            href="#comprar"
            onClick={close}
            className="w-full py-4 bg-zinc-900 rounded-[33px] flex justify-center items-center text-white text-base font-normal hover:bg-red-700 transition-colors duration-200"
          >
            Comprar ahora →
          </a>
          <p className="text-center text-xs text-zinc-400">
            Pago seguro · 30 días de devolución · Envío gratis
          </p>
        </div>
      </div>
    </>
  );
}
