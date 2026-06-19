import React from "react";
import kanjif from "/images/kanjif.svg";
import tatcha from "/images/tatcha_icon_white.svg";

function Footer() {
  const socialLinks = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/tatcha?igsh=b2tqaGgyMG4wNzc2",
    },
    { label: "Tiktok", href: "https://www.tiktok.com/@tatcha?_r=1&_t=ZS-97Jvy1ZLA8I" },
    { label: "Pinterest", href: "https://pin.it/5TsUbsf99" },
    { label: "Youtube", href: "https://youtube.com/@tatchabeauty?si=wDqJ3uOjPqGoyKtB" },
  ];
  const policyLinks = [
    {
      label: "Política de Privacidad",
      href: "https://tatcha.com/pages/privacy-notice",
    },
    { label: "Términos", href: "https://tatcha.com/pages/terms-of-use" },
    { label: "Devoluciones", href: "https://help.tatcha.com/en_us/categories/return-policies-rJNw30kxxe" },
  ];
  return (
    <div className="mt-12 self-stretch px-6 sm:px-12 py-5 relative bg-red-700 rounded-tl-[50px] rounded-tr-[50px] flex flex-col justify-center items-center gap-5 overflow-hidden">
      <img src={kanjif} alt="Kanji Footer" className="absolute top-0 left-36" />

      <div className="self-stretch py-10 sm:py-12 border-b border-white/30 flex flex-col justify-start items-center gap-10 sm:gap-14 overflow-hidden">
        <div className="flex flex-col justify-start items-center gap-5 sm:gap-6 text-center px-4 sm:px-0">
          <div className="text-white text-base font-normal italic">
            — Lo que te prometimos al inicio
          </div>
          <div className="text-center flex flex-col gap-6">
            <span className="text-white/80 text-2xl sm:text-4xl font-normal font-playfair">
              "Piel sin brillo y poros visiblemente{" "}
            </span>
            <span className="text-white/80 text-2xl sm:text-4xl font-bold font-playfair italic">
              más finos desde la primera aplicación."
            </span>
          </div>
        </div>

        <div className="self-stretch flex flex-col justify-center items-center gap-8 sm:gap-12">
          <div className="w-full max-w-[888px] px-6 sm:px-16 py-10 sm:py-16 lg:py-24 rounded-[50px] outline-[3px] outline-offset-[-3px] outline-white text-center flex flex-col justify-center items-center gap-6 sm:gap-8">
            <span className="text-white text-lg sm:text-2xl font-bold font-playfair italic">
              — Garantía de satisfacción · 30 días
            </span>
            <span className="text-white text-base sm:text-2xl font-normal">
              Si The Water Cream no cumple la promesa que te hicimos, te
              devolvemos tu dinero completo. Sin formularios complicados. Sin
              preguntas. Solo escríbenos a customercare@tatcha.com
            </span>
            <span className="text-white text-sm sm:text-base font-light">
              Sin preguntas. Sin condiciones.
            </span>
          </div>

          <div className="flex flex-col justify-start items-center gap-5">
            <a
              href="https://tatcha.com/products/the-water-cream-lightweight-moisturizer"
              target="_blank"
              className="px-8 sm:px-10 py-4 sm:py-5 bg-white rounded-[33px] inline-flex justify-center items-center gap-2.5 text-zinc-900 text-sm sm:text-base font-normal hover:bg-zinc-100 hover:scale-105 transition-all duration-200 ease-in"
            >
              Comenzar mi ritual →
            </a>
            <div className="text-white/70 text-xs sm:text-base font-normal text-center px-4">
              Pago seguro · 30 días de devolución · Envío gratis
            </div>
          </div>
        </div>
      </div>

      <div className="self-stretch py-5 flex flex-col justify-start items-start gap-10 sm:gap-14 overflow-hidden">
        <div className="self-stretch flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-0">
          <div className="flex flex-col justify-start items-start gap-4 sm:gap-5">
            <img className="w-40 sm:w-60 h-auto" src={tatcha} alt="Tatcha" />
            <div className="flex flex-wrap items-center gap-4 sm:gap-8">
              {policyLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 text-sm sm:text-base font-light hover:text-white transition-colors duration-150"
                >
                  {s.label}
                </a>
              ))}
              <span className="text-white/60 text-sm sm:text-base font-light">
                © 2026 Tatcha
              </span>
            </div>
          </div>

          <div className="flex items-center gap-5 sm:gap-8 py-0 sm:py-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm sm:text-base font-normal hover:text-white/70 hover:underline transition-all duration-150"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <div className="self-stretch pt-5 border-t border-white/20 flex justify-center">
          <p className="text-white/60 text-sm font-light text-center leading-relaxed">
            Página de demostración académica · Todos los derechos de marca,
            imágenes y contenido pertenecen a{" "}
            <a
              href="https://www.tatcha.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/60 transition-colors duration-150"
            >
              Tatcha LLC
            </a>{" "}
            · Creado con fines educativos, sin intención comercial.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
