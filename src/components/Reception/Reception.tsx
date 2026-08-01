import { CalendarDays, Clock3, Flower2, MapPin } from "lucide-react";
import imgRecepcion from "../../assets/img/recepcion.png";
import imgEvento from "../../assets/img/foto del evento.png";

const Reception = () => {
  return (
    <section className="relative overflow-hidden bg-marfil py-28">
      <img
        src={imgRecepcion}
        alt=""
        className="
          pointer-events-none
          absolute
          inset-0
          h-full
          w-full
          object-cover
          opacity-55
          select-none
        "
      />

      <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center px-6 text-center">
        <p
          className="
            font-montserrat
            uppercase
            tracking-[0.45em]
            text-sm
            text-gris-calido/70
          "
        >
          Lugar del evento
        </p>

        <h2
          className="
            mt-5
            font-cormorant
            text-5xl
            md:text-6xl
            text-gris-calido
          "
        >
          Salón Alanna Eventos
        </h2>

        <div className="my-10 flex items-center gap-4">
          <div className="h-px w-24 bg-linear-to-r from-transparent to-dorado" />

          <Flower2 size={22} className="text-dorado" strokeWidth={1.5} />

          <div className="h-px w-24 bg-linear-to-l from-transparent to-dorado" />
        </div>

        <div
          className="
            overflow-hidden
            rounded-[28px]
            border-8
            border-white
            shadow-xl
          "
        >
          <img
            src={imgEvento}
            alt="Salón Alanna"
            className="
              h-72
              w-full
              object-cover
            "
          />
        </div>

        <div className="mt-14 flex flex-col items-center">
          <CalendarDays size={28} className="text-dorado" />

          <p
            className="
              mt-5
              font-montserrat
              uppercase
              tracking-[0.35em]
              text-xs
              text-gris-calido/60
            "
          >
            Fecha
          </p>

          <h3
            className="
              mt-2
              font-cormorant
              text-4xl
              text-gris-calido
            "
          >
            Domingo
          </h3>

          <p
            className="
              mt-1
              font-poppins
              text-lg
              text-gris-calido/80
            "
          >
            27 de Septiembre de 2026
          </p>
        </div>

        <div className="mt-14 flex flex-col items-center">
          <Clock3 size={28} className="text-dorado" />

          <p
            className="
              mt-5
              font-montserrat
              uppercase
              tracking-[0.35em]
              text-xs
              text-gris-calido/60
            "
          >
            Hora
          </p>

          <h3
            className="
              mt-2
              font-cormorant
              text-5xl
              text-gris-calido
            "
          >
            3:00 PM
          </h3>

          <p
            className="
              mt-4
              font-poppins
              italic
              text-gris-calido/70
            "
          >
            Show especial • 4:00 PM
          </p>
        </div>
        <a
          href="https://maps.app.goo.gl/yL9H1xqJQnsvPzuv6?g_st=ac"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-16
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-dorado
            px-10
            py-4
            font-montserrat
            text-sm
            uppercase
            tracking-[0.25em]
            text-white
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
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
