import { CalendarDays, Clock3, Flower2, MapPin } from "lucide-react";
import imgRecepcion from "../../assets/img/recepcion.png";
import imgEvento from "../../assets/img/foto del evento.png";

const Reception = () => {
  const infoCards = [
    {
      icon: <CalendarDays size={28} className="text-dorado" />,
      title: "Fecha",
      value: "Domingo",
      subtitle: "27 de Septiembre de 2026",
    },
    {
      icon: <Clock3 size={28} className="text-dorado" />,
      title: "Hora",
      value: "3:00 PM",
      subtitle: "Show especial • 4:00 PM",
      italic: true,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-marfil py-16 sm:py-20 lg:py-28">
      {/* Fondo */}

      <img
        src={imgRecepcion}
        alt=""
        className="
          pointer-events-none
          absolute
          inset-0
          h-full
          w-full
          select-none
          object-cover
          opacity-50
        "
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 text-center sm:px-8">
        {/* Encabezado */}

        <p
          className="
            font-montserrat
            text-xs
            uppercase
            tracking-[0.35em]
            text-gris-calido/70
            sm:text-sm
          "
        >
          Lugar del evento
        </p>

        <h2
          className="
            mt-5
            font-cormorant
            text-[clamp(2.5rem,6vw,4.8rem)]
            leading-tight
            text-gris-calido
          "
        >
          Salón Alanna Eventos
        </h2>

        {/* Separador */}

        <div className="my-8 flex items-center gap-4 sm:my-10">
          <div className="h-px w-16 bg-linear-to-r from-transparent to-dorado sm:w-24" />

          <Flower2 size={22} strokeWidth={1.5} className="text-dorado" />

          <div className="h-px w-16 bg-linear-to-l from-transparent to-dorado sm:w-24" />
        </div>

        {/* Imagen */}

        <div
          className="
            w-full
            max-w-3xl
            overflow-hidden
            rounded-[28px]
            border-[6px]
            border-white
            shadow-2xl
          "
        >
          <img
            src={imgEvento}
            alt="Salón Alanna"
            className="
              aspect-[4/3]
              w-full
              object-cover
              transition-transform
              duration-500
              hover:scale-105
            "
          />
        </div>

        {/* Información */}

        <div className="mt-12 grid w-full max-w-3xl gap-6 md:grid-cols-2">
          {infoCards.map((card) => (
            <div
              key={card.title}
              className="
                rounded-3xl
                border
                border-dorado/20
                bg-white/50
                px-6
                py-8
                shadow-lg
                backdrop-blur-sm
              "
            >
              <div className="flex justify-center">{card.icon}</div>

              <p
                className="
                  mt-5
                  font-montserrat
                  text-xs
                  uppercase
                  tracking-[0.35em]
                  text-gris-calido/60
                "
              >
                {card.title}
              </p>

              <h3
                className="
                  mt-3
                  font-cormorant
                  text-[clamp(2rem,5vw,3rem)]
                  text-gris-calido
                "
              >
                {card.value}
              </h3>

              <p
                className={`
                  mt-3
                  font-poppins
                  text-base
                  text-gris-calido/75
                  sm:text-lg
                  ${card.italic ? "italic" : ""}
                `}
              >
                {card.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Botón */}

        <a
          href="https://maps.app.goo.gl/yL9H1xqJQnsvPzuv6?g_st=ac"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-12
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-dorado
            px-7
            py-4
            font-montserrat
            text-xs
            uppercase
            tracking-[0.25em]
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-2xl
            sm:px-10
            sm:text-sm
          "
        >
          <MapPin size={18} />
          Ver ubicación
        </a>

        <p
          className="
            mt-5
            font-poppins
            text-sm
            text-gris-calido/60
          "
        >
          Santa Catarina, Nuevo León
        </p>
      </div>
    </section>
  );
};

export default Reception;
