import imgRegalos from "../../assets/img/reaglos.png";

const Gifts = () => {
  return (
    <section className="relative w-full bg-marfil flex items-center justify-center overflow-hidden">
      <div className="relative z-10 w-full animate-fade-in">
        <img
          src={imgRegalos}
          alt="Sugerencia de Regalos"
          className="w-full h-auto mix-blend-multiply drop-shadow-sm"
        />
      </div>
    </section>
  );
};

export default Gifts;
