import imgDesktop from "../../assets/img/dress code-desktop.png";
import imgMobile from "../../assets/img/dress code-mobile.png";

const DressCode = () => {
  return (
    <section className="bg-marfil">
      <img
        src={imgMobile}
        alt="Dress Code"
        className="block w-full md:hidden"
      />

      <img
        src={imgDesktop}
        alt="Dress Code"
        className="hidden w-full md:block"
      />
    </section>
  );
};

export default DressCode;
