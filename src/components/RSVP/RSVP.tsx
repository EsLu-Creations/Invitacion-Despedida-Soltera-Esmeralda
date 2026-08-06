import { Flower2, MessageCircleHeart } from "lucide-react";

const RSVP = () => {
  const phoneNumber = "528125789112";

  const message = "¡Hola! Quiero confirmar mi asistencia";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <section className="relative overflow-hidden bg-marfil py-16 sm:py-20 lg:py-28">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-5 text-center sm:px-8">
        <div className="mb-10 flex items-center gap-4 sm:mb-14">
          <div className="h-px w-16 bg-linear-to-r from-transparent to-dorado sm:w-24" />

          <Flower2 size={20} strokeWidth={1.5} className="text-dorado" />

          <div className="h-px w-16 bg-linear-to-l from-transparent to-dorado sm:w-24" />
        </div>

        <p
          className="
            animate-slide-up
            font-montserrat
            text-xs
            uppercase
            tracking-[0.35em]
            text-gris-calido/70
            sm:text-sm
          "
        >
          Confirma tu asistencia
        </p>

        <h2
          className="
            mt-5
            animate-slide-up
            text-balance
            font-cormorant
            text-[clamp(2.5rem,6vw,4.8rem)]
            leading-tight
            text-gris-calido
          "
        >
          Nos encantará compartir
          <br className="hidden sm:block" />
          este momento contigo
        </h2>

        <p
          className="
            animate-slide-up
            mt-8
            max-w-xl
            text-balance
            font-poppins
            text-base
            leading-8
            text-gris-calido/70
            sm:text-lg
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
            mt-12
            inline-flex
            w-full
            max-w-sm
            items-center
            justify-center
            gap-3
            rounded-full
            border
            border-dorado
            bg-dorado
            px-8
            py-4
            font-montserrat
            text-xs
            uppercase
            tracking-[0.2em]
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-2xl
            hover:opacity-95
            sm:mt-14
            sm:w-auto
            sm:px-10
            sm:text-sm
            sm:tracking-[0.28em]
          "
        >
          <MessageCircleHeart size={18} strokeWidth={1.8} />
          Confirmar asistencia
        </a>

        <p
          className="
            mt-12
            font-cormorant
            text-[clamp(2rem,5vw,3rem)]
            italic
            text-gris-calido/70
            sm:mt-16
          "
        >
          ¡Te esperamos!
        </p>
      </div>
    </section>
  );
};

export default RSVP;
