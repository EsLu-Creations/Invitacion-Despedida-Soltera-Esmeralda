import { CalendarDays, MapPinned, Sparkles } from "lucide-react";

const EventInfo = () => {
  return (
    <section className="bg-marfil py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div
          className="
          rounded-4xl
          bg-white/80
          backdrop-blur-sm
          border border-dorado/20
          shadow-xl
          px-8
          py-12
          "
        >
          <div className="flex justify-center mb-4">
            <Sparkles className="text-dorado" size={24} />
          </div>

          <h2
            className="
            font-cormorant
            text-5xl
            text-dorado
            text-center
            "
          >
            Cuándo & Dónde
          </h2>

          <div className="mt-10 space-y-10">
            {/* Fecha */}

            <div className="text-center">
              <CalendarDays className="mx-auto text-dorado mb-4" size={32} />

              <p className="uppercase tracking-[.35em] text-sm text-gris-calido/70 font-montserrat">
                Fecha
              </p>

              <h3 className="font-cormorant text-4xl text-gris-calido mt-3">
                Domingo
              </h3>

              <p className="font-poppins text-xl text-gris-calido/80 mt-1">
                27 de Septiembre de 2026
              </p>
            </div>

            <div className="h-px bg-linear-to-r from-transparent via-dorado/40 to-transparent" />

            {/* Lugar */}

            <div className="text-center">
              <MapPinned className="mx-auto text-dorado mb-4" size={32} />

              <p className="uppercase tracking-[.35em] text-sm text-gris-calido/70 font-montserrat">
                Lugar
              </p>

              <h3 className="font-cormorant text-4xl text-gris-calido mt-3">
                Salón Alanna Eventos
              </h3>

              <a
                href="https://maps.app.goo.gl/yL9H1xqJQnsvPzuv6?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="
                inline-flex
                items-center
                gap-2
                mt-6
                rounded-full
                bg-dorado
                text-white
                px-8
                py-4
                font-montserrat
                transition
                hover:scale-105
                hover:shadow-lg
                "
              >
                <MapPinned size={18} />
                Ver ubicación
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
