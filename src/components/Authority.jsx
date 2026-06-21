import React from "react";
import iconDerm from "/images/icon_derm.svg";
import iconTradicion from "/images/icon_tradition.svg";
import iconCruelty from "/images/icon_cruelty.svg";
import iconOilFree from "/images/icon_oilfree.svg";
import iconFragancia from "/images/icon_fragancia.svg";
import kanji9 from "/images/kanji9.svg";

const badges = [
  { label: "Dermatológicamente", bold: "probado", src: iconDerm },
  { label: "400 años de", bold: "tradición", src: iconTradicion },
  { label: "Cruelty", bold: "free", src: iconCruelty },
  { label: "Oil-free", bold: "certificado", src: iconOilFree },
  { label: "Sin fragancia", bold: "artificial", src: iconFragancia },
];

function Authority() {
  return (
    <div className="self-stretch py-5 flex flex-col justify-center items-center gap-12 relative">
      
      <img src={kanji9} alt="" className="absolute -top-64 right-0 pointer-events-none hidden md:block -z-10" />
      <div className="self-stretch flex flex-col justify-start items-center gap-6 text-center px-4 sm:px-0">
        <div className="text-red-700 text-base font-normal italic">— Desde 2009</div>
        <div className="flex flex-col gap-2 text-3xl sm:text-4xl font-bold font-playfair">
          <div className="text-zinc-900 ">
          Nacido en San Francisco.{" "}
        </div>
        <div className="text-red-700 italic">Hecho en Kioto.</div>
        </div>
        
        <div className="text-zinc-900 text-sm sm:text-base font-light max-w-2xl">
          Tatcha nace de manuscritos antiguos de belleza de geishas, con
          ingredientes de <span className="font-bold">Kioto</span> y fórmulas modernas
          desarrolladas con <span className="font-bold">biotecnología</span>, libres de sulfatos y
          parabenos.
        </div>
      </div>

      <div className="self-stretch border-t-[0.50px] border-b-[0.50px] border-zinc-900/30 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {badges.map((b, i) => (
          <div
            key={b.bold}
            className={`py-10 sm:py-12 flex flex-col justify-center items-center gap-5 group cursor-default transition-colors duration-200 z-10 bg-white hover:bg-zinc-50 ${
              i < badges.length - 1
                ? "lg:border-r-[0.50px] border-zinc-900/30"
                : ""
            } ${i >= 2 && i < 4 ? "lg:border-t-0 border-zinc-900/30" : ""}`}
          >
            <img
              src={b.src}
              alt={b.bold}
              className="size-14 object-contain transition-transform duration-200 group-hover:scale-110"
            />
            <div className="text-center">
              <span className="text-neutral-700 text-lg sm:text-2xl font-light">
                {b.label}
                <br />
              </span>
              <span className="text-neutral-700 text-lg sm:text-2xl font-bold font-playfair">
                {b.bold}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Authority;
