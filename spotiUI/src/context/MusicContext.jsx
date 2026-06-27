import { createContext, useContext, useRef, useState } from "react";

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const audioRef = useRef();
  const [currentSong, setCurrentSong] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const playSong = (song) => {
    setCurrentSong(song);

    setTimeout(() => {
      audioRef.current.play();
      setPlaying(true);
    }, 100);
  };
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <MusicContext.Provider
      value={{
        currentSong,
        playSong,
        togglePlay,
        playing,
        audioRef,
        duration,
        setDuration,

        currentTime,
        setCurrentTime,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => useContext(MusicContext);
