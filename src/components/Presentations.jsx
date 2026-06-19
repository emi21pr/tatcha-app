import React from "react";
import sizes from "/images/sizes.png";
import kanji5 from "/images/kanji5.svg";
import kanji6 from "/images/kanji6.svg";

const tags = ["Absorción inmediata", "Para piel mixta y grasa", "Matte todo el día"];

function Presentations() {
  return (
    <div className="self-stretch py-5 relative flex flex-col justify-center items-center gap-12" id="products">
      <img src={kanji5} alt="" className="absolute -top-36 left-36 pointer-events-none hidden md:block" />
      <img src={kanji6} alt="" className="absolute bottom-5 right-0 pointer-events-none hidden md:block" />

      <div className="self-stretch flex flex-col justify-start items-center gap-6 text-center px-4 sm:px-0">
        <div>
          <span className="text-zinc-900 text-3xl sm:text-4xl font-bold font-playfair">Cuatro tamaños. </span>
          <span className="text-red-700 text-3xl sm:text-4xl font-bold font-playfair italic">Una sola fórmula.</span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6">
          {tags.map((t) => (
            <div
              key={t}
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-[33px] outline outline-1 outline-offset-[-1px] outline-zinc-900 flex justify-center items-center gap-2.5 hover:bg-zinc-900 hover:text-white transition-colors duration-200 cursor-default"
            >
              <span className="text-sm sm:text-base font-light">{t}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-[798px] rounded-[50px] overflow-hidden">
        <img src={sizes} alt="Presentaciones Tatcha" className="w-full h-auto object-cover" />
      </div>

      <a
        href="https://tatcha.com/products/the-water-cream-lightweight-moisturizer"
        target="_blank" 
        className="px-8 sm:px-10 py-4 sm:py-5 bg-zinc-900 rounded-[33px] inline-flex justify-center items-center gap-2.5 hover:bg-red-700 hover:scale-105 transition-all duration-200 ease-in text-white text-sm sm:text-base font-normal"
      >
        Elegir mi presentación →
      </a>
    </div>
  );
}

export default Presentations;
