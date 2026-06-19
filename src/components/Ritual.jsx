import React from "react";
import kanji3 from "/images/kanji3.svg";
import kanji4 from "/images/kanji4.svg";

const steps = [
  {
    letter: "M",
    title: "Moisture on Contact",
    sub: "Agua",
    desc: "Microcápsulas de gel explotan al contacto. Absorción instantánea.",
  },
  {
    letter: "I",
    title: "Intelligent Balance",
    sub: "Atrae",
    desc: "Agua termal japonesa regula sebo sin deshidratar.",
  },
  {
    letter: "Z",
    title: "Zero Oil, Zero Shine",
    sub: "Refina",
    desc: "Complejo Hadasei-3™ (alga roja + arroz fermentado + té verde) = acabado matte prolongado sin retoque.",
  },
  {
    letter: "U",
    title: "Unlocking Ancient Ritual",
    sub: "Desaparece",
    desc: "400 años de rituales de geishas de Kioto, reformulados con biotecnología.",
  },
];

function Ritual() {
  return (
    <div className="self-stretch py-5 relative flex flex-col justify-center items-center gap-5" id="ritual">
      <div className="w-full max-w-[994px] h-0 top-[290px] absolute border-2 border-red-700 -z-10 border-dashed hidden lg:block" />
      <img src={kanji3} alt="" className="absolute -top-24 left-36 pointer-events-none hidden md:block" />
      <img src={kanji4} alt="" className="absolute bottom-0 right-36 pointer-events-none hidden md:block" />

      <div className="self-stretch flex flex-col justify-start items-center gap-5 text-center">
        <div>
          <span className="text-zinc-900 text-3xl sm:text-4xl font-bold font-playfair">El ritual </span>
          <span className="text-red-700 text-3xl sm:text-4xl font-bold font-playfair italic">MIZU.</span>
        </div>
        <div className="text-zinc-900 text-sm sm:text-base font-light">
          Cuatro pasos. Cuatrocientos años. Una sola fórmula.
        </div>
      </div>

      <div className="self-stretch flex flex-col lg:flex-row justify-start items-stretch gap-0 pt-8 sm:pt-12">
        {steps.map((s) => (
          <div
            key={s.letter}
            className="flex-1 px-4 sm:px-5 py-8 flex flex-col justify-start items-center gap-7 group"
          >
            <div className="size-32 sm:size-44 bg-red-700 rounded-full flex flex-col justify-center items-center gap-2.5 transition-transform duration-200 group-hover:scale-105 shadow-md">
              <span className="text-white text-6xl sm:text-8xl font-bold font-playfair">
                {s.letter}
              </span>
            </div>
            <div className="self-stretch flex flex-col justify-center items-center gap-4 sm:gap-5">
              <div className="text-center text-zinc-900 text-xl sm:text-2xl font-bold font-playfair">
                {s.title}
              </div>
              <div className="text-center text-red-700 text-base font-light italic">
                {s.sub}
              </div>
              <div className="text-center text-zinc-900 text-sm sm:text-base font-normal px-2">
                {s.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ritual;
