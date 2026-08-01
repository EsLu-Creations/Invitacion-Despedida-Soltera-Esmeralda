import { Flower2, MessageCircleHeart } from "lucide-react";

const RSVP = () => {
  const phoneNumber = "528125789112";

  const message = "¡Hola!  Quiero confirmar mi asistencia";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="relative overflow-hidden bg-marfil py-32">
      <div className="mx-auto flex max-w-xl flex-col items-center px-6 text-center">
        <div className="mb-14 flex items-center gap-4">
          <div className="h-px w-24 bg-linear-to-r from-transparent to-dorado" />

          <Flower2 size={20} className="text-dorado" strokeWidth={1.5} />

          <div className="h-px w-24 bg-linear-to-l from-transparent to-dorado" />
        </div>

        <p
          className="
            font-montserrat
            uppercase
            tracking-[0.45em]
            text-sm
            text-gris-calido/70
            animate-slide-up
          "
        >
          Confirma tu asistencia
        </p>

        <h2
          className="
            mt-5
            font-cormorant
            text-5xl
            md:text-6xl
            text-gris-calido
            animate-slide-up
          "
        >
          Nos encantará compartir
          <br />
          este momento contigo
        </h2>

        <p
          className="
            mt-8
            max-w-md
            font-poppins
            leading-8
            text-gris-calido/70
            animate-slide-up
          "
        >
          Tu presencia hará que este día sea aún más especial. Agradecemos que
          nos confirmes tu asistencia.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-14
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-dorado
            bg-dorado
            px-10
            py-4
            font-montserrat
            text-sm
            uppercase
            tracking-[0.28em]
            text-white
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
            hover:opacity-95
          "
        >
          <MessageCircleHeart size={18} strokeWidth={1.8} />
          Confirmar asistencia
        </a>

        <p
          className="
            mt-14
            font-cormorant
            text-3xl
            italic
            text-gris-calido/70
          "
        >
          ¡Te esperamos!
        </p>
      </div>
    </section>
  );
};

export default RSVP;
