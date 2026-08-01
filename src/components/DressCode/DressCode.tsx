import imgDressCode from "../../assets/img/dress code.png";

const DressCode = () => {
  return (
    <section className="relative w-full bg-marfil flex items-center justify-center overflow-hidden">
      <div className="relative z-10 w-full animate-fade-in">
        <img
          src={imgDressCode}
          alt="Código de vestimenta: Formal / Casual"
          className="w-full h-auto mix-blend-multiply drop-shadow-sm"
        />
      </div>
    </section>
  );
};

export default DressCode;
