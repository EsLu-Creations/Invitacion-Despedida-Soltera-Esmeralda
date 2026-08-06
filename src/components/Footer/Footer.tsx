const Footer = () => {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-dorado/20
        bg-marfil/40
        py-12
        sm:py-14
        lg:py-16
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-5xl
          flex-col
          items-center
          px-5
          text-center
          sm:px-8
        "
      >
        <div className="mb-8 flex items-center gap-4">
          <div className="h-px w-12 bg-linear-to-r from-transparent to-dorado/70" />

          <div className="h-2 w-2 rounded-full bg-dorado" />

          <div className="h-px w-12 bg-linear-to-l from-transparent to-dorado/70" />
        </div>

        <p
          className="
            font-montserrat
            text-[10px]
            font-light
            uppercase
            tracking-[0.35em]
            text-gris-calido/60
            sm:text-xs
          "
        >
          Diseño y desarrollo por
        </p>

        <a
          href="https://instagram.com/tu_usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-3
            bg-linear-to-r
            from-[#F1D98B]
            via-[#D6AF3A]
            to-[#B8871A]
            bg-clip-text
            font-cormorant
            text-[clamp(2rem,5vw,3rem)]
            font-semibold
            tracking-wide
            text-transparent
            transition-all
            duration-300
            hover:scale-105
            hover:opacity-80
          "
        >
          EsLu Creations
        </a>

        <div className="mt-5 flex items-center gap-3">
          <div className="h-px w-8 bg-dorado/40" />

          <p
            className="
              font-poppins
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-gris-calido/50
              sm:text-xs
            "
          >
            Invitaciones Digitales Modernas
          </p>

          <div className="h-px w-8 bg-dorado/40" />
        </div>

        <p
          className="
            mt-8
            font-montserrat
            text-[11px]
            text-gris-calido/40
          "
        >
          © {new Date().getFullYear()} EsLu Creations. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
