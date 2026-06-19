import React from "react";
import kanji8 from "/images/kanji8.svg";
import review1 from "/images/review1.png";
import review2 from "/images/review2.png";
import stars from "/images/Group.svg";

const reviews = [
  {
    title: '"Llevo 6 años y no me cambio."',
    body: '"He usado este producto por más de 6 años y siempre será mi ride or die para mi piel mixta."',
    author: "Janet R",
    tag: "Compradora Verificada",
    date: "05/04/26 · Tatcha.com",
  },
  {
    title: '"El clima de Arizona no le gana."',
    body: '"La uso todos los días. Siento que realmente ha ayudado con las líneas finas en mi frente y cuello."',
    author: "Mara T",
    tag: "Compradora Verificada",
    date: "04/17/26 · Tatcha.com",
  },
];


function Social() {
  return (
    <div className="self-stretch py-5 flex flex-col justify-center items-center gap-12">
      <div className="self-stretch flex flex-col justify-start items-center gap-6 text-center px-4 sm:px-0">
        <div className="text-red-700 text-base font-normal italic">
          — Lo que dicen quienes la usan
        </div>
        <div>
          <span className="text-zinc-900 text-3xl sm:text-4xl font-bold font-playfair">
            10.247 historias.
          </span>
          <span className="text-red-700 text-3xl sm:text-4xl font-bold font-playfair italic">
            {" "}
            Aquí te las contamos.
          </span>
        </div>
      </div>

      <div className="self-stretch relative flex flex-col lg:flex-row justify-center items-stretch gap-2.5">
        <img
          src={kanji8}
          className="absolute -z-10 left-40 -top-38 text-zinc-500/30 text-[200px] font-medium leading-none pointer-events-none select-none hidden xl:block"
        ></img>
        <div className="flex-1 flex flex-col gap-2.5">
          {reviews.map((r) => (
            <div
              key={r.author}
              className="flex-1 px-8 sm:px-12 py-10 sm:py-12 bg-white rounded-[50px] shadow-[0px_2px_30px_0px_rgba(0,0,0,0.05)] flex flex-col justify-center items-start gap-5 transition-shadow duration-200 hover:shadow-[0px_4px_40px_0px_rgba(0,0,0,0.10)]"
            >
              <div className="self-stretch pb-5 border-b-[0.30px] border-zinc-900/30 flex flex-col justify-start items-start gap-2.5">
                <img src={stars} alt="Estrellas" />
                <div className="text-zinc-900 text-base font-bold font-playfair italic">
                  {r.title}
                </div>
                <div className="self-stretch text-black text-base font-light leading-snug">
                  {r.body}
                </div>
              </div>
              <div>
                <span className="text-red-700 text-base font-bold">
                  {r.author} ·{" "}
                </span>
                <span className="text-red-700 text-base font-light">
                  {r.tag}
                  <br />
                </span>
                <span className="text-zinc-900 text-sm font-light">
                  {r.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:flex gap-2.5">
          <img
            className="w-60 lg:w-80 h-auto max-h-[590px] object-cover rounded-[50px] hidden lg:block"
            src={review1}
            alt="Testimonio visual 1"
          />
          <img
            className="w-60 lg:w-80 h-auto max-h-[590px] object-cover rounded-[50px] hidden lg:block"
            src={review2}
            alt="Testimonio visual 2"
          />
        </div>
      </div>
    </div>
  );
}

export default Social;
