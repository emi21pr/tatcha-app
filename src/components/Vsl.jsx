import React from "react";
import kanji1 from "/images/kanji1.svg";
import kanji2 from "/images/kanji2.svg";

function Vsl() {
  return (
    <div className="relative w-full" id="vsl">
      <img src={kanji1} alt="" className="absolute -top-24 -left-6 pointer-events-none hidden sm:block" />
      <img src={kanji2} alt="" className="absolute -bottom-24 -right-6 pointer-events-none hidden md:block" />

      <div className="self-stretch py-5 flex flex-col justify-center items-center gap-5">
        <div className="self-stretch flex flex-col justify-start items-center gap-6">
          <div className="text-center text-red-700 text-base font-normal italic">
            — Mira cómo se siente
          </div>
          <div className="flex flex-col justify-start items-center gap-5">
            <div className="text-center text-zinc-900 text-3xl sm:text-4xl font-bold font-playfair">
              <span>Toca.</span>
              <span> </span>
              <span className="text-red-700 italic">Siente.</span>
              <span> </span>
              <span>Desaparece.</span>
            </div>
            <div className="text-center text-zinc-900 text-sm sm:text-base font-light px-4 sm:px-0">
              Una textura que se transforma en agua al contacto con tu piel.{" "}
              <br className="hidden sm:block" />
              Sin residuo. Sin brillo. Solo hidratación.
            </div>
          </div>
        </div>

        <div className="z-10 w-full max-w-[950px] aspect-video px-0 sm:px-4 lg:px-0">
          <iframe
            src="https://www.youtube.com/embed/pPYnJjczJYs?si=UdG4tJRxSIQQyp0N"
            title="Tatcha"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-2xl sm:rounded-3xl w-full h-full"
          />
        </div>

        <a
          href="https://tatcha.com/products/the-water-cream-lightweight-moisturizer"
          target="_blank" 
          className="px-8 sm:px-10 py-4 sm:py-5 bg-zinc-900 rounded-[33px] inline-flex justify-center items-center gap-2.5 hover:bg-red-700 hover:scale-105 transition-all duration-200 ease-in"
        >
          <span className="text-white text-sm sm:text-base font-normal">Comprar ahora</span>
          <span className="text-white text-sm sm:text-base font-light"> →</span>
        </a>
      </div>
    </div>
  );
}

export default Vsl;
