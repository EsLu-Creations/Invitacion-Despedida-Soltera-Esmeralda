import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";

interface GalleryPhoto {
  src: string;
  alt: string;
}

interface GalleryModalProps {
  photos: GalleryPhoto[];
  selectedIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

const GalleryModal = ({
  photos,
  selectedIndex,
  onClose,
  onPrevious,
  onNext,
}: GalleryModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrevious, onNext]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const currentPhoto = photos[selectedIndex];

  return (
    <div
      className="
        fixed
        inset-0
        z-100
        flex
        items-center
        justify-center
        bg-gris-calido/90
        p-4
        backdrop-blur-md
        animate-fade-in
        sm:p-6
      "
      role="dialog"
      aria-modal="true"
      aria-label="Galería de fotografías"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar galería"
        className="
          absolute
          right-4
          top-4
          z-20
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-white/20
          bg-white/10
          text-white
          backdrop-blur-md
          transition-all
          duration-300
          hover:scale-105
          hover:bg-white/20
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-dorado
          sm:right-6
          sm:top-6
        "
      >
        <X size={22} strokeWidth={1.5} />
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onPrevious();
        }}
        aria-label="Fotografía anterior"
        className="
          absolute
          left-2
          z-20
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-white/20
          bg-white/10
          text-white
          backdrop-blur-md
          transition-all
          duration-300
          hover:scale-105
          hover:bg-white/20
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-dorado
          sm:left-5
          sm:h-12
          sm:w-12
        "
      >
        <ChevronLeft size={24} strokeWidth={1.5} />
      </button>

      <div
        className="
          relative
          flex
          max-h-[85vh]
          max-w-[90vw]
          items-center
          justify-center
          animate-scale-in
          sm:max-h-[88vh]
          sm:max-w-[85vw]
        "
        onClick={(event) => event.stopPropagation()}
      >
        <img
          key={currentPhoto.src}
          src={currentPhoto.src}
          alt={currentPhoto.alt}
          className="
            max-h-[78vh]
            max-w-full
            rounded-xl
            object-contain
            shadow-2xl
            sm:max-h-[82vh]
            lg:max-h-[85vh]
          "
        />
      </div>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        aria-label="Fotografía siguiente"
        className="
          absolute
          right-2
          z-20
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-white/20
          bg-white/10
          text-white
          backdrop-blur-md
          transition-all
          duration-300
          hover:scale-105
          hover:bg-white/20
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-dorado
          sm:right-5
          sm:h-12
          sm:w-12
        "
      >
        <ChevronRight size={24} strokeWidth={1.5} />
      </button>

      <div
        className="
          absolute
          bottom-5
          left-1/2
          -translate-x-1/2
          rounded-full
          border
          border-white/20
          bg-white/10
          px-4
          py-2
          font-montserrat
          text-[10px]
          uppercase
          tracking-[0.3em]
          text-white/90
          backdrop-blur-md
          sm:bottom-6
          sm:text-xs
        "
      >
        {selectedIndex + 1} / {photos.length}
      </div>
    </div>
  );
};

export default GalleryModal;
