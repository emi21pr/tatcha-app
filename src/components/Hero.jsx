import React from "react";
import stars from "/images/Group.svg";

function Hero() {
  return (
    <div className="self-stretch z-10 min-h-[750px] sm:min-h-[730px] md:min-h-[810px] 2xl:min-h-[925px] bg-center rounded-[40px] flex justify-start items-start lg:bg-[url(/images/hero2.png)] bg-[url(/images/heromb.png)] bg-cover lg:bg-[center_bottom_-8rem] md:bg-[url(/images/herotb.png)]">
      
      <div className="w-full max-w-[640px] lg:w-[627px] lg:max-w-none self-stretch px-6 sm:px-10 lg:px-[50px] py-12 sm:py-16 lg:py-[100px] flex flex-col justify-between lg:justify-center items-start gap-0 lg:gap-[50px]">
        
        <div className="self-stretch flex flex-col justify-start items-start gap-7 sm:gap-10 lg:gap-[40px] flex-1 lg:flex-none">
          
          <div className="self-stretch hidden md:block">
            <span className="text-zinc-900 text-base font-normal font-playfair">
              Piel sin brillo y poros
            </span>
            <span className="text-zinc-900 text-base font-bold font-playfair italic">
              {" "}visiblemente más finos desde la primera aplicación.
            </span>
          </div>

          <div className="self-stretch flex flex-col justify-start items-start gap-4 sm:gap-5 pt-8 sm:pt-0">
            <div className="flex flex-col justify-start items-start gap-3 sm:gap-4">
              <div className="text-zinc-900 text-4xl sm:text-5xl lg:text-6xl font-bold font-playfair tracking-wider">
                Para piel grasa.
              </div>
              <div className="text-red-700 text-4xl sm:text-5xl lg:text-6xl font-bold font-playfair italic">
                The Water Cream.
              </div>
            </div>
            <div className="self-stretch text-justify text-xs sm:text-base">
              <span className="text-zinc-900 font-light">Un </span>
              <span className="text-zinc-900 font-bold">hidratante</span>
              <span className="text-zinc-900 font-light"> de lujo formulado para piel mixta y grasa.</span>
            </div>
          </div>

          <div className="self-stretch mt-auto lg:mt-0 flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 sm:gap-5">
            <a
              href="https://tatcha.com/products/the-water-cream-lightweight-moisturizer"
              target="_blank" 
              className="w-full sm:w-auto sm:flex-1 px-8 sm:px-10 py-4 bg-zinc-900 rounded-[33px] flex justify-center items-center gap-2.5 hover:bg-red-700 hover:scale-105 transition-all duration-200 ease-in"
            >
              <span className="text-white text-sm sm:text-base font-normal whitespace-nowrap">
                Descúbrela ahora →
              </span>
            </a>
            <div className="flex flex-wrap justify-start items-center gap-2 sm:gap-2.5 text-zinc-900 text-xs sm:text-sm font-light">
              <span><span className="font-extrabold">✓</span> Envío Gratis ·</span>
              <span><span className="font-extrabold">✓</span> Muestras incluidas</span>
            </div>
          </div>
        </div>
        <div className="self-stretch pt-5 mt-4 lg:mt-0 border-t border-[#BC1313] flex flex-wrap justify-between items-center gap-4">
          <div className="flex justify-start items-center gap-2.5">
            <img src={stars} alt="Estrellas" />
            <div className="text-center">
              <span className="text-zinc-900 text-xs sm:text-base font-bold">10.247 </span>
              <span className="text-zinc-900 text-xs sm:text-base font-light">reseñas verificadas</span>
            </div>
          </div>
          <div className="text-zinc-900 text-base font-bold hidden sm:block">|</div>
          <div className="flex justify-start items-center gap-2">
            <div className="text-center">
              <span className="text-zinc-900 text-xs sm:text-sm font-bold">#1 </span>
              <span className="text-zinc-900 text-xs sm:text-sm font-light">hidratante en Japón</span>
            </div>
          </div>
        </div>

      </div>

      {/* Espacio derecho en lg */}
      <div className="hidden lg:flex flex-1 self-stretch px-12 py-3.5" />
    </div>
  );
}

export default Hero;