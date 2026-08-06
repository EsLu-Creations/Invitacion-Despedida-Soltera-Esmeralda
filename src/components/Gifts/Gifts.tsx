import imgRegalosDesktop from "../../assets/img/regalos-desktop.png";
import imgRegalosMobile from "../../assets/img/regalos-mobile.png";

const Gifts = () => {
  return (
    <section className="bg-marfil">
      <img
        src={imgRegalosMobile}
        alt="regalos"
        className="block w-full md:hidden"
      />

      <img
        src={imgRegalosDesktop}
        alt="regalos"
        className="hidden w-full md:block"
      />
    </section>
  );
};

export default Gifts;
