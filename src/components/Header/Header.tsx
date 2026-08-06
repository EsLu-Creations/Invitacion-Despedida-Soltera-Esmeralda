import { Sparkles } from "lucide-react";
import imgHeader from "../../assets/img/header.png";

const Header = () => {
  return (
    <header
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-marfil
        py-10
        sm:py-12
        md:py-16
        lg:py-20
        animate-fade-in
      "
    >
      <div className="absolute inset-0">
        <img
          src={imgHeader}
          alt="Header"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-linear-to-b from-marfil/15 via-marfil/5 to-marfil/20" />
      </div>

      <div
        className="
          relative
          z-10
          flex
          w-full
          max-w-6xl
          flex-col
          items-center
          gap-5
          px-5
          pt-8
          text-center
          sm:gap-6
          sm:px-8
          md:gap-8
          lg:px-12
        "
      >
        <div
          className="
            flex
            flex-col
            items-center
            gap-2
            font-montserrat
            text-[11px]
            font-light
            uppercase
            tracking-[0.18em]
            text-gris-calido
            sm:text-xs
            sm:tracking-[0.28em]
            md:text-sm
            md:tracking-[0.4em]
          "
        >
          <span>Te invitamos a</span>

          <span className="flex items-center gap-2">
            <span className="text-[10px] text-dorado">✦</span>
            Celebrar
            <span className="text-[10px] text-dorado">✦</span>
          </span>
        </div>

        <h1
          className="
            animate-scale-in
            bg-linear-to-b
            from-[#F1D98B]
            via-[#D6AF3A]
            to-[#B8871A]
            bg-clip-text
            px-2
            py-3
            font-script
            text-[3.2rem]
            leading-[1.05]
            font-semibold
            tracking-wide
            text-transparent
            drop-shadow-[0_2px_5px_rgba(0,0,0,.15)]
            sm:px-4
            sm:text-[4.8rem]
            md:text-[6rem]
            lg:text-[7rem]
            xl:text-[8rem]
          "
        >
          Esmeralda
          <br />
          Janeth
        </h1>

        <div
          className="
            flex
            w-full
            max-w-48
            items-center
            gap-4
            sm:max-w-56
            md:max-w-72
          "
        >
          <div className="h-px flex-1 bg-linear-to-r from-transparent via-dorado/60 to-dorado/90" />

          <Sparkles
            size={18}
            fill="currentColor"
            className="animate-pulse text-dorado"
          />

          <div className="h-px flex-1 bg-linear-to-l from-transparent via-dorado/60 to-dorado/90" />
        </div>

        <h2
          className="
            font-montserrat
            text-[11px]
            font-medium
            uppercase
            tracking-[0.2em]
            text-[#7a505e]
            sm:text-xs
            sm:tracking-[0.25em]
            md:text-sm
            md:tracking-[0.35em]
          "
        >
          Despedida de Soltera
        </h2>

        <p
          className="
            max-w-xs
            text-balance
            font-poppins
            text-sm
            leading-7
            italic
            text-gris-calido/80
            sm:max-w-sm
            sm:text-base
            md:max-w-lg
            md:text-lg
          "
        >
          Una tarde para celebrar, brindar y crear recuerdos inolvidables antes
          del gran día.
        </p>

        <div className="mt-10 animate-float md:mt-16 lg:mt-20">
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-dorado/30
              bg-[#FFFDF9]/90
              shadow-[0_0_15px_rgba(214,175,58,0.1)]
              backdrop-blur-sm
              sm:h-12
              sm:w-12
              lg:h-14
              lg:w-14
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5 text-dorado lg:h-6 lg:w-6"
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
