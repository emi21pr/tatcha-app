import React from "react";

const troubles = [
  {
    kanji: "乾",
    num: "01",
    title: "Hidratantes que brillan",
    desc: "Cremas pesadas que sellan los poros y dejan tu piel grasa a las dos horas. El maquillaje se mueve.",
    border: false,
  },
  {
    kanji: "孔",
    num: "02",
    title: "Geles que no hidratan",
    desc: "Texturas ligeras que se evaporan sin nutrir. Piel tirante, deshidratada bajo la superficie.",
    border: true,
  },
  {
    kanji: "光",
    num: "03",
    title: 'Productos para "todo tipo"',
    desc: "Fórmulas pensadas para piel seca, vendidas a piel grasa. Promesas vagas, resultados nulos.",
    border: false,
  },
];

function Trouble() {
  return (
    <div className="self-stretch py-5 flex flex-col justify-center items-center gap-5 z-10">
      <div className="self-stretch py-12 sm:py-16 lg:py-22 bg-red-700 rounded-[50px] flex flex-col justify-center items-center gap-12 sm:gap-16 lg:gap-24">
        <div className="text-center px-6">
          <span className="text-white text-3xl sm:text-4xl font-normal font-playfair">
            Tres cosas que
          </span>
          <span className="text-white text-3xl sm:text-4xl font-bold font-playfair italic">
            {" "}ya intentaste.
          </span>
        </div>

        <div className="self-stretch flex flex-col lg:flex-row justify-start items-stretch">
          {troubles.map((t, i) => (
            <div
              key={t.num}
              className={`flex-1 px-8 sm:px-12 lg:px-16 py-10 lg:py-12 flex flex-col justify-start items-center gap-8 sm:gap-12 ${
                t.border
                  ? "border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-white"
                  : ""
              }`}
            >
              <div className="flex flex-col justify-start items-center gap-5">
                <div className="text-white text-6xl sm:text-8xl font-bold">{t.kanji}</div>
                <div className="text-white text-base font-normal">{t.num}</div>
              </div>
              <div className="text-white text-xl sm:text-2xl font-bold font-playfair italic text-center">
                {t.title}
              </div>
              <div className="text-white text-sm sm:text-base font-normal text-center">
                {t.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trouble;
