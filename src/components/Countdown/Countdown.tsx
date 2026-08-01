import { useEffect, useState } from "react";
import { Flower2 } from "lucide-react";
import imgFlores from "../../assets/img/flores.png";

const Countdown = () => {
  const targetDate = new Date("2026-09-27T16:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (value: number) => value.toString().padStart(2, "0");

  return (
    <section className="relative overflow-hidden bg-marfil py-28">
      {/* Fondo */}
      <img
        src={imgFlores}
        alt=""
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          opacity-55
          pointer-events-none
          select-none
        "
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        {/* Mes */}

        <p
          className="
            font-montserrat
            uppercase
            tracking-[0.6em]
            text-gris-calido/80
            text-lg
            animate-slide-up
          "
        >
          Septiembre
        </p>

        {/* Calendario */}

        <div
          className="
            mt-10
            animate-slide-up
          "
        >
          <div className="grid grid-cols-5 gap-8">
            {[
              ["J", "24"],
              ["V", "25"],
              ["S", "26"],
              ["D", "27"],
              ["L", "28"],
            ].map(([day, number]) => (
              <div key={number} className="flex flex-col items-center">
                <span className="font-montserrat text-sm font-medium text-gris-calido">
                  {day}
                </span>

                {number === "27" ? (
                  <div className="relative mt-4">
                    <Flower2
                      size={38}
                      className="text-dorado"
                      strokeWidth={1.4}
                    />

                    <span
                      className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        text-sm
                        font-medium
                        text-gris-calido
                      "
                    >
                      {number}
                    </span>

                    <div
                      className="
                        absolute
                        left-1/2
                        top-11
                        h-20
                        w-px
                        -translate-x-1/2
                        bg-gris-calido/30
                      "
                    />
                  </div>
                ) : (
                  <span className="mt-4 text-gris-calido/60">{number}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Texto */}

        <div className="mt-32 animate-slide-up">
          <h2
            className="
              font-cormorant
              text-5xl
              md:text-6xl
              text-gris-calido
            "
          >
            Reserva esta fecha
          </h2>

          <p
            className="
              mt-4
              font-poppins
              text-gris-calido/70
              italic
              text-lg
            "
          >
            Una tarde muy especial está por comenzar
          </p>
        </div>

        {/* Contador */}

        <div
          className="
            mt-20
            animate-slide-up
          "
        >
          <p
            className="
              font-montserrat
              uppercase
              tracking-[0.45em]
              text-sm
              text-gris-calido/70
            "
          >
            Faltan solamente
          </p>

          {/* Días */}

          <div className="mt-8">
            <h3
              className="
                font-cormorant
                text-[7rem]
                leading-none
                text-gris-calido
                font-light
              "
            >
              {format(timeLeft.days)}
            </h3>

            <p
              className="
                mt-2
                font-montserrat
                uppercase
                tracking-[0.45em]
                text-sm
                text-gris-calido/70
              "
            >
              Días
            </p>
          </div>

          <div className="my-10 h-px w-60 bg-linear-to-r from-transparent via-dorado to-transparent" />

          {/* Horas */}

          <div className="grid grid-cols-3 gap-10">
            <div>
              <p
                className="
                  font-cormorant
                  text-5xl
                  text-gris-calido
                "
              >
                {format(timeLeft.hours)}
              </p>

              <span
                className="
                  mt-2
                  block
                  font-montserrat
                  text-xs
                  uppercase
                  tracking-[0.35em]
                  text-gris-calido/70
                "
              >
                Horas
              </span>
            </div>

            <div>
              <p className="font-cormorant text-5xl text-gris-calido">
                {format(timeLeft.minutes)}
              </p>

              <span
                className="
                  mt-2
                  block
                  font-montserrat
                  text-xs
                  uppercase
                  tracking-[0.35em]
                  text-gris-calido/70
                "
              >
                Minutos
              </span>
            </div>

            <div>
              <p className="font-cormorant text-5xl text-gris-calido">
                {format(timeLeft.seconds)}
              </p>

              <span
                className="
                  mt-2
                  block
                  font-montserrat
                  text-xs
                  uppercase
                  tracking-[0.35em]
                  text-gris-calido/70
                "
              >
                Segundos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
