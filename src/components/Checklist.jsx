import React from "react";
import kanji7 from "/images/kanji7.svg";

const product = [
  { kanji: "水", name: "The Water Cream ·", bold: "50ml", price: "$74" },
];

const bonuses = [
  {
    kanji: "絹",
    name: "Envío gratis + muestras gratis ·",
    bold: "en todo pedido",
    price: "$10",
  },
  {
    kanji: "葉",
    name: "Discovery Kit ·",
    bold: "4 hidratantes de prueba",
    price: "$20",
  },
  { kanji: "札", name: "Guía ritual MIZU ·", bold: "guía PDF", price: "$29" },
  {
    kanji: "粧",
    name: "Diagnóstico de Piel Tatcha ·",
    bold: "quiz personalizado",
    price: "$19",
  },
];

function Row({ kanji, name, bold, price }) {
  return (
    <div className="self-stretch py-4 sm:py-5 border-b-[0.50px] border-white flex justify-between items-center gap-4">
      <div className="flex justify-start items-center gap-3 sm:gap-5">
        <span className="text-white text-xl sm:text-2xl font-bold">
          {kanji}
        </span>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-start gap-2">
          <span className="text-white text-xs sm:text-base md:text-2xl font-normal">
            {name}{" "}
          </span>
          <span className="text-white text-xs sm:text-sm lg:text-2xl font-bold sm:inline">
            {bold}
          </span>
        </div>
      </div>
      <span className="text-white text-lg sm:text-2xl font-bold whitespace-nowrap">
        {price}
      </span>
    </div>
  );
}

function Checklist() {
  return (
    <div className="self-stretch py-5 flex flex-col justify-center items-center gap-5">
      <div className="text-center text-red-700 text-base font-normal italic">
        — Todo lo que está dentro
      </div>

      <div className="w-full max-w-[846px] px-6 sm:px-16 lg:px-24 py-12 sm:py-16 lg:py-24 relative bg-red-700 rounded-[50px] flex flex-col justify-center items-center gap-12 sm:gap-16 lg:gap-24 overflow-hidden">
        <img
          src={kanji7}
          alt=""
          className="absolute right-4 top-16 pointer-events-none z-60 md:block"
        />

        <div className="text-center">
          <span className="text-white text-3xl sm:text-4xl font-bold font-playfair">
            Lo que recibes{" "}
          </span>
          <span className="text-white text-3xl sm:text-4xl font-bold font-playfair italic">
            HOY
          </span>
        </div>

        <div className="self-stretch flex flex-col justify-start items-center gap-12">
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch flex flex-col gap-8 sm:gap-10">
              <div className="self-stretch flex flex-col">
                <div className="py-3 sm:py-5">
                  <span className="text-white text-base font-normal">
                    Nuestro Producto
                  </span>
                </div>
                {product.map((r) => (
                  <Row key={r.kanji} {...r} />
                ))}
              </div>

              <div className="self-stretch flex flex-col">
                <div className="py-3 sm:py-5">
                  <span className="text-white text-base font-normal">
                    Bonos
                  </span>
                </div>
                {bonuses.map((r) => (
                  <Row key={r.kanji} {...r} />
                ))}
              </div>
            </div>

            <div className="self-stretch flex flex-col">
              <div className="self-stretch py-4 sm:py-5 border-b-[0.50px] border-white flex justify-between items-center">
                <span className="text-white text-base font-normal">
                  Valor total del paquete
                </span>
                <span className="text-white/60 text-xl sm:text-2xl font-bold line-through">
                  $152
                </span>
              </div>
              <div className="self-stretch py-4 sm:py-5 flex justify-between items-center">
                <span className="text-white text-2xl sm:text-3xl font-bold font-playfair italic">
                  Precio de hoy
                </span>
                <span className="text-white text-4xl sm:text-6xl font-bold font-playfair italic">
                  $74
                </span>
              </div>
            </div>
          </div>

          <div className="self-stretch flex flex-col justify-start items-center gap-5">
            <a
              href="https://tatcha.com/products/the-water-cream-lightweight-moisturizer"
              target="_blank"
              className="self-stretch px-8 sm:px-10 py-4 sm:py-5 bg-white rounded-[33px] flex justify-center items-center gap-2.5 hover:bg-zinc-100 hover:scale-[1.02] transition-all duration-200"
            >
              <span className="text-zinc-900 text-sm sm:text-base font-normal">
                Reclamar el ritual completo →
              </span>
            </a>
            <div className="text-white/70 text-sm sm:text-base font-normal text-center">
              Pago seguro · 30 días de devolución · Envío gratis
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checklist;
