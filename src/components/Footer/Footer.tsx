const Footer = () => {
  return (
    <footer
      className="
        w-full 
        py-10 
        mt-12
        bg-marfil/30 
        border-t 
        border-dorado/20 
        flex 
        flex-col 
        items-center 
        justify-center
      "
    >
      <div className="flex flex-col items-center gap-2 px-6 text-center">
        <p
          className="
            uppercase 
            tracking-[0.3em] 
            text-gris-calido/60 
            text-[10px] 
            md:text-xs 
            font-light 
            font-montserrat
          "
        >
          Diseño y desarrollo por
        </p>

        <a
          href="https://instagram.com/tu_usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="
            font-cormorant 
            text-2xl 
            md:text-3xl 
            font-semibold 
            tracking-wide 
            text-transparent 
            bg-linear-to-r 
            from-[#F1D98B] 
            via-[#D6AF3A] 
            to-[#B8871A] 
            bg-clip-text 
            hover:opacity-75 
            transition-opacity
            cursor-pointer
          "
        >
          EsLu Creations
        </a>

        <div className="flex items-center gap-2 mt-1">
          <div className="h-px w-6 bg-dorado/40" />
          <p
            className="
              font-poppins 
              text-gris-calido/50 
              text-[10px] 
              md:text-xs 
              tracking-widest 
              uppercase
            "
          >
            Invitaciones Digitales Modernas
          </p>
          <div className="h-px w-6 bg-dorado/40" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
