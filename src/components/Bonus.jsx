import React from "react";
import bonus from "/images/bonus.png";

const bonuses = [
  {
    title: "Envío gratis + muestras",
    desc: "En todo pedido. Descubres otros productos Tatcha sin riesgo. Valor percibido ~$10.",
    dark: false,
  },
  {
    title: "Discovery Kit — 4 hidratantes de prueba",
    desc: "Incluye crédito aplicable al full size. Reduce fricción de compra. Construye hábito.",
    dark: false,
  },
  {
    title: "Guía ritual MIZU (PDF o tarjeta física)",
    desc: "Cómo aplicar The Water Cream en 4 pasos. Refuerza el mecanismo único.",
    dark: false,
  },
  {
    title: "Diagnóstico de Piel Tatcha",
    desc: "Quiz personalizado que indica cómo usar el producto según el tipo de piel.",
    dark: true,
  },
];

function BadgeGratis({ dark }) {
  return (
    <div
      className={`px-3.5 py-2 rounded-[33px] outline outline-1 outline-offset-[-1px] inline-flex justify-center items-center ${
        dark ? "bg-white outline-white/40" : "bg-lime-50 outline-neutral-400"
      }`}
    >
      <span className="text-green-700 text-sm font-normal">GRATIS</span>
    </div>
  );
}

function BonusCard({ title, desc, dark }) {
  return (
    <div
      className={`flex-1 px-8 sm:px-12 py-10 sm:py-12 rounded-[50px] flex flex-col justify-center items-start gap-5 transition-transform duration-200 hover:scale-[1.01] ${
        dark
          ? "bg-red-700"
          : "bg-white shadow-[0px_2px_30px_0px_rgba(0,0,0,0.05)]"
      }`}
    >
      <div className={`text-base font-bold font-playfair italic ${dark ? "text-white" : "text-red-700"}`}>
        {title}
      </div>
      <div className={`text-base font-light leading-snug ${dark ? "text-white" : "text-black"}`}>
        {desc}
      </div>
      <BadgeGratis dark={dark} />
    </div>
  );
}

function Bonus() {
  return (
    <div className="self-stretch py-5 flex flex-col justify-center items-center gap-12">
      <div className="self-stretch flex flex-col justify-start items-center gap-6 text-center px-4 sm:px-0">
        <div className="text-red-700 text-base font-normal italic">— Incluidos sin costo</div>
        <div>
          <span className="text-zinc-900 text-3xl sm:text-4xl font-bold font-playfair">Cuatro bonos. </span>
          <span className="text-red-700 text-3xl sm:text-4xl font-bold font-playfair italic">Cero costo extra.</span>
        </div>
      </div>

      <div className="self-stretch flex flex-col lg:flex-row justify-center items-stretch gap-2.5">
        <div className="w-full lg:w-96 lg:flex-shrink-0 min-h-64 lg:min-h-0">
          <img
            className="w-full h-full object-cover rounded-[50px]"
            src={bonus}
            alt="Bonus Tatcha"
          />
        </div>

        <div className="flex-1 flex flex-col gap-2.5">
          <div className="flex-1 flex flex-col sm:flex-row gap-2.5">
            <BonusCard {...bonuses[0]} />
            <BonusCard {...bonuses[1]} />
          </div>
          <div className="flex-1 flex flex-col sm:flex-row gap-2.5">
            <BonusCard {...bonuses[2]} />
            <BonusCard {...bonuses[3]} />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-start items-center gap-5">
        <a
          href="https://tatcha.com/collections/moisturizers"
          target="_blank" 
          className="px-8 sm:px-10 py-4 sm:py-5 bg-zinc-900 rounded-[33px] inline-flex justify-center items-center gap-2.5 hover:bg-red-700 hover:scale-105 transition-all duration-200 ease-in"
        >
          <span className="text-white text-sm sm:text-base font-normal">
            Probar el Discovery Kit →
          </span>
        </a>
        <div className="text-zinc-900/60 text-sm sm:text-base font-normal text-center">
          Alternativa de entrada desde $20 · Crédito aplicable al full size
        </div>
      </div>
    </div>
  );
}

export default Bonus;
