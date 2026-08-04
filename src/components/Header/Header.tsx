import { Sparkles } from "lucide-react";
import imgHeader from "../../assets/img/header.png";

const Header = () => {
  return (
    <header
      className="
        relative
        flex
        h-[85svh]
        min-h-162.5
        items-center
        justify-center
        overflow-hidden
        bg-marfil
        animate-fade-in
      "
    >
      <div className="absolute inset-0">
        <img
          src={imgHeader}
          alt="Header"
          className="h-full w-full object-cover object-center md:hidden"
        />
        <img
          src={imgHeader}
          alt="Header"
          className="hidden h-full w-full object-cover object-center md:block"
        />

        <div className="absolute inset-0 bg-linear-to-b from-marfil/15 via-marfil/5 to-marfil/20" />
      </div>

      <div className="relative z-10 flex max-w-5xl flex-col items-center px-6 text-center mt-8">
        <div
          className="
            mb-6
            flex
            flex-col
            items-center
            gap-1.5
            uppercase
            tracking-[0.3em]
            md:tracking-[0.45em]
            text-gris-calido/150
            text-xs
            md:text-sm
            font-light
            font-montserrat
          "
        >
          <span>Te invitamos a</span>
          <span className="flex items-center gap-2">
            <span className="text-dorado text-[10px]">✦</span>
            Celebrar
            <span className="text-dorado text-[10px]">✦</span>
          </span>
        </div>

        <h1
          className="
            font-cormorant
            leading-[0.95]
            font-semibold
            tracking-wide
            text-transparent
            bg-linear-to-b
            from-[#F1D98B]
            via-[#D6AF3A]
            to-[#B8871A]
            bg-clip-text
            drop-shadow-[0_2px_5px_rgba(0,0,0,.15)]
            text-[4rem]
            sm:text-[5rem]
            md:text-[6.5rem]
            lg:text-[7.5rem]
            animate-scale-in
          "
        >
          Esmeralda
          <br />
          Janeth
        </h1>

        <div
          className="
            mt-8
            mb-6
            flex
            items-center
            w-full
            max-w-56
            md:max-w-xs
            gap-4
          "
        >
          <div className="h-px flex-1 bg-linear-to-r from-transparent via-dorado/60 to-dorado/90" />
          <Sparkles
            size={18}
            className="text-dorado animate-pulse"
            fill="currentColor"
          />
          <div className="h-px flex-1 bg-linear-to-l from-transparent via-dorado/60 to-dorado/90" />
        </div>

        <h2
          className="
            mb-6
            uppercase
            tracking-[0.25em]
            md:tracking-[0.3em]
            text-[#7a505e]
            text-xs
            md:text-sm
            font-medium
            font-montserrat
          "
        >
          Despedida de Soltera
        </h2>

        <p
          className="
            mt-2
            max-w-sm
            md:max-w-md
            font-poppins
            text-gris-calido/80
            text-base
            md:text-[1.1rem]
            italic
            leading-relaxed
          "
        >
          Una tarde para celebrar, brindar y<br />
          crear recuerdos inolvidables
          <br />
          antes del gran día.
        </p>

        <div className="mt-12 md:mt-16 animate-float">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-dorado/30
              bg-[#FFFDF9]/90
              shadow-[0_0_15px_rgba(214,175,58,0.1)]
              backdrop-blur-sm
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="w-5 h-5 text-dorado"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 5v14m0 0l6-6m-6 6l-6-6"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
