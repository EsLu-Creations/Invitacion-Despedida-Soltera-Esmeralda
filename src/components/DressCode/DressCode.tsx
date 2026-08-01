import imgDressCode from "../../assets/img/dress code.png";

const DressCode = () => {
  return (
    // Quitamos el min-h-[70vh] y los paddings verticales (py-10) para que
    // la altura se adapte 100% a la proporción de la imagen.
    <section className="relative w-full bg-marfil flex items-center justify-center overflow-hidden">
      {/* Contenedor sin restricciones de ancho (w-full) */}
      <div className="relative z-10 w-full animate-fade-in">
        <img
          src={imgDressCode}
          alt="Código de vestimenta: Formal / Casual"
          // w-full asegura que toque los bordes de la pantalla
          className="w-full h-auto mix-blend-multiply drop-shadow-sm"
        />
      </div>
    </section>
  );
};

export default DressCode;
