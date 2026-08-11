import { Flower2 } from "lucide-react";
import { useCallback, useState } from "react";

import imgGallery1 from "../../assets/img/gallery-1.jpeg";
import imgGallery2 from "../../assets/img/gallery-2.jpeg";
import imgGallery3 from "../../assets/img/gallery-3.jpeg";
import imgGallery4 from "../../assets/img/gallery-4.jpeg";

import GalleryModal from "./GalleryModal";

const Gallery = () => {
  const photos = [
    {
      src: imgGallery1,
      alt: "Momento de la pedida",
    },
    {
      src: imgGallery2,
      alt: "Momento especial de la pedida",
    },
    {
      src: imgGallery3,
      alt: "Celebración de la pedida",
    },
    {
      src: imgGallery4,
      alt: "Recuerdo de la pedida",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedIndex(index);
  };

  const closeModal = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === 0 ? photos.length - 1 : current - 1;
    });
  }, [photos.length]);

  const showNext = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === photos.length - 1 ? 0 : current + 1;
    });
  }, [photos.length]);

  return (
    <>
      <section
        className="
          relative
          overflow-hidden
          bg-marfil
          px-5
          py-16
          sm:px-8
          sm:py-20
          lg:py-28
        "
      >
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div className="mb-12 flex flex-col items-center text-center sm:mb-16">
            <p
              className="
                animate-slide-up
                font-montserrat
                text-xs
                font-light
                uppercase
                tracking-[0.4em]
                text-gris-calido/60
                sm:text-sm
              "
            >
              Momentos especiales
            </p>

            <div className="relative mt-3">
              <h2
                className="
                  animate-slide-up
                  font-cormorant
                  text-[clamp(2.8rem,7vw,4.5rem)]
                  leading-none
                  font-light
                  tracking-wide
                  text-gris-calido
                "
              >
                Recuerdos
              </h2>

              <span
                className="
                  absolute
                  -bottom-7
                  -right-8
                  -rotate-6
                  font-script
                  text-[clamp(2.5rem,6vw,4rem)]
                  leading-none
                  text-lila
                  opacity-90
                  sm:-right-12
                "
              >
                nuestros
              </span>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-12 bg-linear-to-r from-transparent to-dorado/60 sm:w-20" />

              <Flower2 size={20} strokeWidth={1.4} className="text-dorado" />

              <div className="h-px w-12 bg-linear-to-l from-transparent to-dorado/60 sm:w-20" />
            </div>

            <p
              className="
                mt-6
                max-w-md
                font-poppins
                text-sm
                leading-7
                text-gris-calido/65
                sm:text-base
              "
            >
              Algunos momentos que queremos guardar para siempre.
            </p>
          </div>

          <div
            className="
              grid
              grid-cols-1
              gap-5
              sm:gap-6
              md:grid-cols-2
              lg:gap-7
            "
          >
            {photos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => openModal(index)}
                aria-label={`Ver fotografía ${index + 1} en grande`}
                className="
                  group
                  relative
                  cursor-zoom-in
                  overflow-hidden
                  rounded-3xl
                  border
                  border-dorado/15
                  bg-white
                  p-1.5
                  text-left
                  shadow-[0_8px_30px_rgba(77,74,74,0.08)]
                  outline-none
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_15px_40px_rgba(77,74,74,0.14)]
                  focus-visible:ring-2
                  focus-visible:ring-dorado
                  animate-scale-in
                "
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                <div
                  className="
                    relative
                    aspect-4/5
                    overflow-hidden
                    rounded-[18px]
                    sm:aspect-4/5
                    md:aspect-square
                  "
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-linear-to-t
                      from-gris-calido/20
                      via-transparent
                      to-white/10
                      opacity-60
                      transition-opacity
                      duration-500
                      group-hover:opacity-30
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-2
                      rounded-[14px]
                      border
                      border-white/40
                      opacity-60
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  <div
                    className="
                      absolute
                      bottom-4
                      right-4
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-white/80
                      text-gris-calido/70
                      opacity-0
                      shadow-md
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      group-hover:opacity-100
                    "
                  >
                    <span className="text-lg leading-none">+</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div
            className="
              mt-14
              flex
              flex-col
              items-center
              text-center
              sm:mt-16
            "
          >
            <p
              className="
                font-cormorant
                text-[clamp(1.8rem,4vw,2.5rem)]
                italic
                text-gris-calido/70
              "
            >
              Momentos que quedarán para siempre
            </p>

            <div className="mt-5 h-px w-16 bg-dorado/40" />
          </div>
        </div>
      </section>

      {selectedIndex !== null && (
        <GalleryModal
          photos={photos}
          selectedIndex={selectedIndex}
          onClose={closeModal}
          onPrevious={showPrevious}
          onNext={showNext}
        />
      )}
    </>
  );
};

export default Gallery;
