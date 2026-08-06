import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import music from "../../assets/musica-fondo.mp3";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.4;
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.log("Reproducción bloqueada por el navegador:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in [animation-delay:1000ms]">
      <audio ref={audioRef} loop src={music}>
        <source src="/audio/cancion.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={togglePlay}
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
        className={`relative flex items-center justify-center w-14 h-14 rounded-full text-white shadow-xl transition-all duration-300 hover:scale-110 ${
          isPlaying ? "bg-rosa-viejo" : "bg-gris-calido/90"
        }`}
      >
        {isPlaying && (
          <>
            <span className="absolute w-full h-full rounded-full bg-rosa-viejo opacity-40 animate-ping"></span>
            <span className="absolute w-full h-full rounded-full bg-rosa-viejo opacity-20 animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite_0.5s]"></span>
          </>
        )}

        <div className="relative z-10">
          {isPlaying ? (
            <Volume2 className="w-6 h-6 stroke-[1.5] animate-pulse" />
          ) : (
            <VolumeX className="w-6 h-6 stroke-[1.5]" />
          )}
        </div>
      </button>
    </div>
  );
};

export default AudioPlayer;
