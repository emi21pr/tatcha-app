import React, { useState } from "react";
import question from "/images/question.svg";
import kanji10 from "/images/kanji10.svg";

const faqs = [
  {
    q: "¿Es muy caro para una crema?",
    a: "El Discovery Kit ($20) te deja probarla sin riesgo. El tarro de 50ml dura de 3 a 4 meses usado dos veces al día, menos de $0,80 por aplicación. Y el refill cuesta menos, lo que lo hace más razonable a largo plazo.",
  },
  {
    q: "No me ha funcionado nada para piel grasa. ¿Por qué este sí?",
    a: "The Water Cream fue formulada específicamente para piel mixta y grasa. Su textura gel-water se absorbe en segundos sin dejar residuo, controla el sebo con agua termal japonesa y mantiene un acabado matte durante todo el día gracias al complejo Hadasei-3™. No es una crema para todas las pieles — es la crema para la tuya.",
  },
  {
    q: "¿El origen japonés es solo marketing?",
    a: "Tatcha nació de la investigación del manuscrito de belleza Nijo Yoshimoto del siglo XVII, usado por geishas de Kioto. Sus ingredientes — alga roja, arroz fermentado y extracto de té verde — tienen décadas de uso en rituales reales de cuidado de la piel japonesa. Reformulamos esa sabiduría con biotecnología moderna para piel grasa contemporánea. No es historia inventada: es el origen de nuestra fórmula.",
  },
  {
    q: "¿Me dejará brillante como otras cremas de lujo?",
    a: "No. Eso es exactamente lo que resuelve The Water Cream. A diferencia de otras cremas premium, es 100% oil-free. Su textura en gel no deja residuo ni sensación pesada. El Método MIZU regula activamente la producción de sebo sin deshidratar, por lo que tu piel queda fresca y controlada, no brillante. Es la crema de lujo que por fin funciona para piel grasa.",
  },
  {
    q: "¿Cuánto tarda en llegar mi pedido?",
    a: "El envío estándar gratuito llega en 5–7 días hábiles dentro de EE.UU. Si lo necesitas antes, ofrecemos envío express en 2–3 días hábiles con costo adicional. Recibirás un correo de confirmación con número de rastreo en cuanto salga tu pedido.",
  },
  {
    q: "¿Puedo usarla con mi serum o rutina actual?",
    a: "Sí. The Water Cream va como último paso de tu rutina de mañana, después del serum o esencia. Su textura ligera no interfiere ni sella mal otros activos. Si ya usas el Silk Serum de Tatcha, son el dúo perfecto — muchas de nuestras clientas lo usan así a diario.",
  },
];

function Questions() {
  const [open, setOpen] = useState(0);

  return (
    <div className="self-stretch py-5 relative flex flex-col justify-center items-center gap-5">
      <img
        src={kanji10}
        className="absolute left-0 top-0 -translate-x-1/4 font-medium leading-none pointer-events-none select-none hidden lg:block"
      ></img>

      <img
        src={question}
        alt=""
        className="absolute top-5 right-0 pointer-events-none hidden md:block"
      />

      <div className="text-center">
        <span className="text-zinc-900 text-3xl sm:text-4xl font-bold font-playfair">
          Lo que
        </span>
        <span className="text-red-700 text-3xl sm:text-4xl font-bold font-playfair italic">
          {" "}
          te preguntas.
        </span>
      </div>

      <div className="w-full max-w-[1112px] py-8 sm:py-12 flex flex-col justify-center items-center gap-12 sm:gap-24">
        <div className="self-stretch flex flex-col justify-start items-center gap-8 sm:gap-12">
          <div className="self-stretch flex flex-col justify-center items-center">
            <div className="self-stretch flex flex-col justify-start items-start">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <button
                    key={i}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="self-stretch text-left py-4 sm:py-5 border-b border-red-700 flex justify-start items-start gap-8 sm:gap-12 group cursor-pointer w-full bg-transparent hover:bg-red-50 transition-colors duration-150 px-2"
                  >
                    <div className="flex flex-1 justify-center items-start gap-5 sm:gap-7">
                      <span
                        className={`text-red-700 text-xl sm:text-2xl ${isOpen ? "font-bold" : "font-normal"} shrink-0 w-8`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1 flex flex-col gap-4 sm:gap-5">
                        <span
                          className={`text-zinc-900 text-lg sm:text-2xl ${isOpen ? "font-bold" : "font-normal"} transition-all duration-150`}
                        >
                          {faq.q}
                        </span>
                        {isOpen && faq.a && (
                          <span className="text-zinc-900 text-sm sm:text-base font-normal leading-relaxed">
                            {faq.a}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-zinc-900 text-xl sm:text-2xl font-normal shrink-0 transition-transform duration-150 group-hover:text-red-700">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
